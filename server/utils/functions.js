const fetch = require('node-fetch');
var fs = require('fs');
var config = require("./config");
request = require('request');
var {
    IND231,
    IND570
} = require("./indicator");
const objectgeneral = require("../models/configuraciongeneral.model");
const objectransaccion = require("../models/transaccion.model");


function weight(data, decimal, type = "continuos", ind = "") {
    let response = null;
    // console.log('Llamada a function weight');
    if (type === "continuos") {
        // console.log('Continua');
        let word = data.toString('utf8')
        // console.log(word);
        let ini = word.indexOf(String.fromCharCode(2));
        const state = word.substr(ini + 2, 1);
        let gross = word.substr(ini + 4, 6);
        let tare = word.substr(ini + 10, 6);
        let net = gross;
        if (tare > 0) {
            gross = parseFloat(tare) + parseFloat(net);
        }


        tare = calculateDecimals(tare, decimal);
        tare = tare.toFixed(decimal);
        gross = calculateDecimals(gross, decimal);
        gross = gross.toFixed(decimal);
        net = calculateDecimals(net, decimal);
        net = net.toFixed(decimal);

        response = {
            status: "OK",
            state: state.toString().trim(),
            gross: gross.toString().trim(),
            tare: tare.toString().trim(),
            net: net.toString()
        }
    } else {

        if (ind !== "") {
            switch (ind) {
                case "IND231":
                    // console.log("llamando a IND231");
                    return IND231(data);
                case "IND570":
                    // console.log("llamando a IND570");
                    return IND570(data);
                default:
                    return {
                        status: "NOK",
                        message: "Indicator not Found"
                    };
            }
        }
    }
    return response;
};


var calculateDecimals = function (value, decimal) {
    return value / Math.pow(10, decimal);
};

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        // console.log('content-type:', res.headers['content-type']);
        // console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

const InsertTransaction = async (insert) => {

    let result = {
        status: "NOT SUCCESS",
        response: "error"
    };

    try {
        const response = await objectransaccion.create(insert);
        result.status = "SUCCESS"
        result.response = response
    } catch (error) {
        result.response = error
    }

    return result;

};

const GetActualTransaction = async () => {

    const row = await objectgeneral.findOne({
        where: {
            id: "1"
        }
    });

    return row.transaccionActual;

};

const NewTransaction = async () => {
    let oldTransaccion = await GetActualTransaction();
    oldTransaccion = parseInt(oldTransaccion) + 1;
    let response = {};
    try {
        // console.log("udpate");
        response = await objectgeneral.update({
            transaccionActual: oldTransaccion
        }, {
            where: {
                id: '1'
            }
        });

    } catch (error) {
        console.log(error);
    }
    return response;
};

const SendTransaction = () => {
    objectransaccion.findAll({
        where: {
            TraStatus: "0"
        },
    }).then(transactions => {
        transactions.forEach(row => {
            var fecha = row.TraFecha.toLocaleString().slice(0, 19).replace('T', ' ');
            insert = {
                "TraID": row.TraID,
                "TraFecha": fecha,
                "TraHora": row.TraHora,
                "TraTransaccion": row.TraTransaccion,
                "TraCampo1": row.TraCampo1,
                "TraCampo2": row.TraCampo2,
                "TraCampo3": row.TraCampo3,
                "TraCampo4": row.TraCampo4,
                "TraCampo5": row.TraCampo5,
                "TraCampo6": row.TraCampo6,
                "TraCampo7": row.TraCampo7,
                "TraCampo8": row.TraCampo8,
                "TraCampo9": row.TraCampo9,
                "TraCampo10": row.TraCampo10,
                "TraOperador": row.TraOperador,
                "TraBruto": row.TraBruto,
                "TraTara": row.TraTara,
                "TraNeto": row.TraNeto,
                "TraStatus": 1
            }
            const response = insertFetch(config.URLCPMSERVER + "/transaccion", insert);
        });
    });
};

const GetDecimal = async () => {

    const row = await objectgeneral.findOne({
        where: {
            id: "1"
        }
    });

    return row.decimales;

};

const insertFetch = async (url, insert) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(insert),
        headers: {
            'Content-type': 'application/json'
        }
    }
    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            if (res.resul = "Success") {
                // console.log("insertado en CPM id: " + res.response);
                updateTransacptionStatus(res.response);
            }
        })
        .catch(error => console.error(`Error: ${error}`))
};

const insertWeight = function (dataCC, dataP) {

    // console.log(JSON.stringify(dataCC));

    let insert = {
        TraFecha: dataP.date,
        TraCampo1: dataCC[0].TraValue,
        TraCampo2: dataCC[1].TraValue,
        TraCampo3: dataCC[2].TraValue,
        TraCampo4: dataCC[3].TraValue,
        TraCampo5: dataCC[4].TraValue,
        TraCampo6: dataCC[5].TraValue,
        TraCampo7: dataCC[6].TraValue,
        TraCampo8: dataCC[7].TraValue,
        TraCampo9: dataCC[8].TraValue,
        TraCampo10: dataCC[9].TraValue,
        TraBruto: dataP.gross,
        TraTara: dataP.tare,
        TraNeto: dataP.net,
        TraStatus: "OK"
    }
    //    return 0;

    const options = {
        method: 'POST',
        body: JSON.stringify(insert),
        headers: {
            'Content-type': 'application/json'
        }
    }
    // console.log(insert);

    fetch(config.URLWINSERVER + "/my/transaccion", options)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            return ("OK");
        })
        .catch(error => "ERROR")


    // newPost(insert);
}


const updateTransacptionStatus = async (id) => {

    let response = {};
    try {
        // console.log("udpate");
        response = await objectransaccion.update({
            TraStatus: "1"
        }, {
            where: {
                TraID: id
            }
        });

    } catch (error) {
        console.log(error);
    }
    return response;
};

module.exports = {
    weight,
    download,
    InsertTransaction,
    insertWeight,
    GetActualTransaction,
    NewTransaction,
    SendTransaction,
}