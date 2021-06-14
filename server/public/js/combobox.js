var contennn = document.querySelector('#labelsss');


const nll0 = sessionStorage.getItem('nl5');
const nll1 = sessionStorage.getItem('nl6');
const nll2 = sessionStorage.getItem('nl7');
const nll3 = sessionStorage.getItem('nl8');
const nll4 = sessionStorage.getItem('nl9');
const nll5 = sessionStorage.getItem('nl5');
const nll6 = sessionStorage.getItem('nl6');
const nll7 = sessionStorage.getItem('nl7');
const nll8 = sessionStorage.getItem('nl8');
const nll9 = sessionStorage.getItem('nl9');

let combos = [];

fetch(`http://192.168.1.200:6997/parametroscombobox/FormaParametrosReporte`)
    .then((respst) => respst.json())
    .then(ForReporte => {
        FormaParametrosReporte(ForReporte);

    })

function FormaParametrosReporte(ForReporte) {

    combos = ForReporte

    combos.map((row) => {
        // console.log(row.ParName);

        if (row.ParSql != "undefined") {
            fetch(`http://192.168.1.200:6997/${row.ParSql}`)
                .then((resp) => resp.json())
                .then(resp => {
                    console.log(resp);
                    CargarFetch(row, resp);
                    namecombo();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    });


}

function CargarFetch(row, tablaextra) {

    if (row.ParVisible = true) {
        let parent = GetParent(row.ParName);
        createcombo(parent, row, tablaextra);

    }

}

function GetParent(name) {
    if (name == "CLComboBox1") {
        return document.querySelector('.combobox1');
    } else if (name == "CLComboBox2") {
        return document.querySelector('.combobox2');
    } else if (name == "CLComboBox3") {
        return document.querySelector('.combobox3');
    } else if (name == "CLComboBox4") {
        return document.querySelector('.combobox4');
    } else {
        return document.querySelector('.combobox5');
    }
}

function createcombo(parent, combo, tablaextra) {

    var a = Object.create(tablaextra[0]);

    a.TabNombre = "no aplica";
    a.TabID = "-1";
    a.TabCodigo = "-1";
    a.TabSeleccionado = true;


    tablaextra.unshift(a);

    var div = document.createElement("div");
    div.className = "viewlabel5";

    var h2 = document.createElement("h2");
    h2.className = "nameCombobox";
    h2.style.fontSize = "13px";

    var div2 = document.createElement("div");
    div2.className = "content-viewlabel5";

    var select = document.createElement("select");
    select.className = "fil form-control form-control-sm combobo1d";


    var str1 = tablaextra.map((linea) => {


        if (linea.TabSeleccionado) {
            return `<option value="${ReturnC(linea, combo.ParC1)}" >${ReturnC(linea, combo.ParC2)}</option>`
        }



    });


    select.innerHTML = str1;

    div.appendChild(h2);
    div.appendChild(div2);
    div2.appendChild(select);
    parent.appendChild(div);
}



function ReturnC(linea, C) {
    if (C == 'Nombre') {
        return linea.TabNombre
    } else if (C == 'Codigo') {
        return linea.TabCodigo
    } else if (C == 'ID')
        return linea.TabID
}




document.getElementById("butonsavepabb").addEventListener("click", function () {

    urlparametrosR = `http://192.168.1.200:6997/ParametroReporte/corto`

    var input1dd = document.getElementById('namelabeid0').value;
    var input2dd = document.getElementById('namelabeid1').value;
    var input3dd = document.getElementById('namelabeid2').value;
    var input4dd = document.getElementById('namelabeid3').value;
    var input5dd = document.getElementById('namelabeid4').value;

    var a1 = document.querySelector(".combobox1 .combobo1d");
    var combobo1d = a1.options[a1.selectedIndex].value;
    if (combobo1d == 'no aplica') {
        combobo1d = '-1';
    }

    var a2 = document.querySelector(".combobox2 .combobo1d");
    var combobo2d = a2.options[a2.selectedIndex].value;
    if (combobo2d == 'no aplica') {
        combobo2d = '-1';
    }

    var a3 = document.querySelector(".combobox3 .combobo1d");
    var combobo3d = a3.options[a3.selectedIndex].value;
    if (combobo3d == 'no aplica') {
        combobo3d = '-1';
    }

    var a4 = document.querySelector(".combobox4 .combobo1d");
    var combobo4d = a4.options[a4.selectedIndex].value;
    if (combobo4d == 'no aplica') {
        combobo4d = '-1';
    }

        var a5 = document.querySelector(".combobox5 .combobo1d");
        var combobo5d = a5.options[a5.selectedIndex].value;
        if (combobo5d == 'no aplica') {
            combobo5d = '-1';
        }

    nomID = sessionStorage.getItem('logStorage');

    var fechadesde = document.getElementById('search-boxdate1').value;
    var horadesde = document.getElementById('timepicker1').value;

    var horadesdec = fechadesde + "T" + horadesde + ":00.000Z";


    var fechadesde2 = document.getElementById('search-boxdate2').value;
    var horadesde2 = document.getElementById('timepicker2').value;

    var horadesdec2 = fechadesde2 + "T" + horadesde2 + ":00.000Z";



    const parametroscomboylabels = {
        ParFechaDesde: horadesdec,
        ParFechaHasta: horadesdec2,
        ParVariable14: input1dd,
        ParVariable15: input2dd,
        ParVariable16: input3dd,
        ParVariable17: input4dd,
        ParVariable18: input5dd,
        ParVariable19: combobo1d,
        ParVariable20: combobo2d,
        ParVariable21: combobo3d,
        ParVariable22: combobo4d,
        ParVariable23: ""
    }

    const newPost = parametroscomboylabels => {
        const options = {
            method: 'PUT',
            body: JSON.stringify(parametroscomboylabels),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }

        return fetch(urlparametrosR + "/" + "carlos", options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.error(`Error: ${error}`))
    }

    newPost(parametroscomboylabels);

    fetch(urlP+`vista_rst1/`)
    .then((resprefresh) => resprefresh.json())
    .then(datarefresh => {
        conten.innerHTML = '';
        refreshdatas(datarefresh);
    })

})


function namecombo() {

    document.querySelector(".combobox1 .nameCombobox").innerHTML = nll5.toUpperCase();
    document.querySelector(".combobox2 .nameCombobox").innerHTML = nll6.toUpperCase();
    document.querySelector(".combobox3 .nameCombobox").innerHTML = nll7.toUpperCase();
    document.querySelector(".combobox4 .nameCombobox").innerHTML = nll8.toUpperCase();
    document.querySelector(".combobox5 .nameCombobox").innerHTML = nll9.toUpperCase();

}


// document.getElementById("butonupdatebb").addEventListener("click", function(){
    
//     fetch(`http://sistemaspesamatic.dynu.net:6997/vista_rst1/`)
//     .then((resprefresh) => resprefresh.json())
//     .then(datarefresh => {
//         conten.innerHTML = '';
//         refreshdatas(datarefresh);
//     })
    

// })


function refreshdatas(datarefresh){

    
        

    for (let valorrefresh of datarefresh) {

        conten.innerHTML += `

              <tr>
              <td class="col1ta">${ valorrefresh.TraFecha.substr(-27, 10)}</td>
              <td class="col2ta" >${ valorrefresh.T09.trim()}</td>
              <td class="col3ta  company" data-company="${ valorrefresh.T08.trim()}">${valorrefresh.T08.trim()}</td>
              <td class="col4ta">${ valorrefresh.TraTransaccion}</td>
              <td class="col5ta">${ valorrefresh.T01}</td>
              <td class="col6ta">${ valorrefresh.T02}</td>
              <td class="col7ta">${ valorrefresh.T03}</td>
              <td class="col8ta">${ valorrefresh.T12}</td>
              <td class="col9ta">${ valorrefresh.TraBruto}</td>
              <td class="col10ta">${ valorrefresh.TraTara}</td>
              <td class="col11ta" style="font-size: 13px;">${ valorrefresh.TraNeto}</td>
              </tr>
    
    `
    }

}