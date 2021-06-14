let lasttraid = "";

const lasttrans = document.querySelector('#lasttrans');
const horatrans1 = document.querySelector('.horatrans1');
const fechatrans1 = document.querySelector('.fechatrans1');
const brutotrans1 = document.querySelector('.brutotrans1');
const taratrans1 = document.querySelector('.taratrans1');
const netotrans1 = document.querySelector('.netotrans1');
const transcode = document.querySelector('.transcode');
const lastpeso = document.getElementById('lastpesso');

fetch(`http://192.168.1.200:6997/ult/vista_RST1/lastrows`)
    .then((resplta) => resplta.json())
    .then(datalta => {
        lasttrans.innerHTML = '';
        refreshdatasa(datalta);
        myFunction();
    })

function refreshdatasa(datalta) {


    lasttrans.innerHTML = `

                  <tr class="boxsha1">
                  <td class="col1tat  ota">${ datalta[0].TraID}</td>
                  <td class="col1tat">${ datalta[0].TraFecha.substr(-27, 10)} ${datalta[0].TraFecha.substr(-13, 11)}</td>
                  <td class="col2tat" >${ datalta[0].T09.trim()}</td>
                  <td class="col3tat">${datalta[0].T08.trim()}</td>
                  <td class="col4tat">${ datalta[0].TraTransaccion}</td>
                  <td class="col5tat">${ datalta[0].T01}</td>
                  <td class="col6tat">${ datalta[0].T02}</td>
                  <td class="col7tat">${ datalta[0].T03}</td>
                  <td class="col8tat">${ datalta[0].T12}</td>
                  <td class="col9tat">${ datalta[0].TraBruto}</td>
                  <td class="col10tat">${ datalta[0].TraTara}</td>
                  <td class="col11tat">${ datalta[0].TraNeto}</td>
                  <td class="col12tat"><span class="badge badge-pill badge-primary movepulse" style="width:40px;">New</span></td>
                  </tr>
                  <tr class="boxsha2">
                  <td class="col1tat  ota">${ datalta[1].TraID}</td>
                  <td class="col1tat">${ datalta[1].TraFecha.substr(-27, 10)} ${datalta[1].TraFecha.substr(-13, 11)}</td>
                  <td class="col2tat" >${ datalta[1].T09.trim()}</td>
                  <td class="col3tat">${datalta[1].T08.trim()}</td>
                  <td class="col4tat">${ datalta[1].TraTransaccion}</td>
                  <td class="col5tat">${ datalta[1].T01}</td>
                  <td class="col6tat">${ datalta[1].T02}</td>
                  <td class="col7tat">${ datalta[1].T03}</td>
                  <td class="col8tat">${ datalta[1].T12}</td>
                  <td class="col9tat">${ datalta[1].TraBruto}</td>
                  <td class="col10tat">${ datalta[1].TraTara}</td>
                  <td class="col11tat">${ datalta[1].TraNeto}</td>
                  <td class="col12tat"><span class="badge badge-pill badge-warning" style="width:40px;">Last</span></td>
                  </tr>               
        
        `
    for (let i = 2; i < datalta.length; i++) {

        lasttrans.innerHTML += `
                <tr>
                <td class="col1tat  ota">${ datalta[i].TraID}</td>
                <td class="col1tat  ota">${ datalta[i].TraFecha.substr(-27, 10)} ${datalta[i].TraFecha.substr(-13, 11)}</td>
                <td class="col2tat  ota" >${ datalta[i].T09.trim()}</td>
                <td class="col3tat  ota">${datalta[i].T08.trim()}</td>
                <td class="col4tat  ota">${ datalta[i].TraTransaccion}</td>
                <td class="col5tat  ota">${ datalta[i].T01}</td>
                <td class="col6tat  ota">${ datalta[i].T02}</td>
                <td class="col7tat  ota">${ datalta[i].T03}</td>
                <td class="col8tat  ota">${ datalta[i].T12}</td>
                <td class="col9tat  ota">${ datalta[i].TraBruto}</td>
                <td class="col10tat  ota">${ datalta[i].TraTara}</td>
                <td class="col11tat  ota">${ datalta[i].TraNeto}</td>
                <td class="col12tat  ota"><span id="rmid" class="badge badge-pill badge-dark classcl" style="width:40px;">old</span></td>
                </tr> 
        `
    }

    cambio();

    horatrans1.innerHTML = datalta[0].TraFecha.substr(-13, 11);
    fechatrans1.innerHTML = datalta[0].TraFecha.substr(-27, 10);
    brutotrans1.innerHTML = datalta[0].TraBruto;
    taratrans1.innerHTML = datalta[0].TraTara;
    netotrans1.innerHTML = datalta[0].TraNeto;
    transcode.innerHTML = datalta[0].T09;
    lastpeso.innerHTML = datalta[1].TraNeto;


}

function myFunction() {
    setInterval(function () {
        fetch(`http://192.168.1.200:6997/ult/vista_RST1/lastrows`)
            .then((respltt) => respltt.json())
            .then(dataltt => {
                if (lasttraid == '') {
                    lasttraid = dataltt[0].TraID;
                } else if (parseInt(dataltt[0].TraID) > parseInt(lasttraid)) {
                    //  document.getElementById('rmid').classList
                    lasttraid = dataltt[0].TraID;
                    refreshdatasa(dataltt);
                    console.log('entrada')
                }
            })
    }, 5000);
}
