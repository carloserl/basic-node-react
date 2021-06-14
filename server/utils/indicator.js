const functions = require('./functions');

const IND231 = (data) => {
    let word = data.toString('utf8')
    console.log('return data demand IND231: ' + word);

    let response = null

    try {
        let index = 0;
        let date = word.substring(word.indexOf("Date") + 6, 16);
        index = word.indexOf("Time") + 4;
        let dtime = word.substring(index, index + 12);
        index = word.indexOf("Gross") + 5;
        let gross = word.substring(index, index + 9);
        index = word.indexOf("Tare") + 4;
        let tare = word.substring(index, index + 10);
        index = word.indexOf("Net") + 3;
        let net = word.substring(index, index + 10);

        response = {
            status: "OK",
            date: date,
            time: dtime,
            gross: gross,
            tare: tare,
            net: net
        }
    } catch (error) {
        response = {
            status: "NOK",
            message: "ERROR IND231"
        };
    }


    return response
}

const IND570 = (data) => {
    let word = data.toString('utf8')
    // console.log('return data demand IND231: ' + word);

    let response = null

    try {


        let index1 = word.indexOf("T") - 10;
        let index2 = word.indexOf("T") + 8;
        let index3 = word.indexOf("kg") - 6;

        let tare = word.substring(index1, index1 + 6);
        let net = word.substring(index2, index2 + 6);
        let gross = word.substring(index3, index3 + 6);

        const d = new Date();

        const date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        const dtime = d.getHours() + ":" + d.getMinutes();

        // console.log(tare.trim());
        // console.log(net.trim());
        // console.log(gross.trim());
        // console.log(date.trim());
        // console.log(dtime.trim());

        response = {
            status: "OK",
            date: date.trim(),
            time: dtime.trim(),
            gross: gross.trim(),
            tare: tare.trim(),
            net: net.trim()
        }


    } catch (error) {
        response = {
            status: "NOK",
            message: "ERROR IND570"
        };
    }


    return response
}

module.exports = {
    IND231,
    IND570,
}