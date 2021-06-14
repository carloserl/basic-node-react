const CLCombobox1 = sessionStorage.getItem('CLCombobox1');
const CLCombobox2 = sessionStorage.getItem('CLCombobox2');
const CLCombobox3 = sessionStorage.getItem('CLCombobox3');
const CLCombobox4 = sessionStorage.getItem('CLCombobox4');
const CLCombobox5 = sessionStorage.getItem('CLCombobox5');

const ParSql1 = sessionStorage.getItem('ParSql1');
const ParSql2 = sessionStorage.getItem('ParSql2');
const ParSql3 = sessionStorage.getItem('ParSql3');
const ParSql4 = sessionStorage.getItem('ParSql4');
const ParSql5 = sessionStorage.getItem('ParSql5');



    if(CLCombobox5 == 'CLComboBox1' && ParSql5 == 'TablaExtra1'){
        fetch(`http://192.168.1.200:6997/TablaExtra1`)
        .then((respsextra1) => respsextra1.json())
        .then(dataextra1 => {
            tablaextra1(dataextra1); 
        })
    }else if(CLCombobox5 == 'CLComboBox1' && ParSql5 == 'TablaExtra2'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra2`)
        .then((respsextra2) => respsextra2.json())
        .then(dataextra1 => {
            tablaextra1(dataextra1); 
        })
    }else if(CLCombobox5 == 'CLComboBox1' && ParSql5 == 'TablaExtra3'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra3`)
        .then((respsextra3) => respsextra3.json())
        .then(dataextra1 => {
            tablaextra1(dataextra1); 
        })
    }else if(CLCombobox5 == 'CLComboBox1' && ParSql5 == 'TablaExtra4'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra4`)
        .then((respsextra4) => respsextra4.json())
        .then(dataextra1 => {
            tablaextra1(dataextra1); 
        })
    }else if(CLCombobox5 == 'CLComboBox1' && ParSql5 == 'TablaExtra5'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra5`)
        .then((respsextra5) => respsextra5.json())
        .then(dataextra1 => {
            tablaextra1(dataextra1); 
        })
    }

    if(CLCombobox4 == 'CLComboBox2' && ParSql4 == 'TablaExtra1'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra1`)
        .then((respsextra1) => respsextra1.json())
        .then(dataextra2 => {
            tablaextra2(dataextra2); 
        })
    }else if(CLCombobox4 == 'CLComboBox2' && ParSql4 == 'TablaExtra2'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra2`)
        .then((respsextra2) => respsextra2.json())
        .then(dataextra2 => {
            tablaextra2(dataextra2); 
        })
    }else if(CLCombobox4 == 'CLComboBox2' && ParSql4 == 'TablaExtra3'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra3`)
        .then((respsextra3) => respsextra3.json())
        .then(dataextra2 => {
            tablaextra2(dataextra2); 
        })
    }else if(CLCombobox4 == 'CLComboBox2' && ParSql4 == 'TablaExtra4'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra4`)
        .then((respsextra4) => respsextra4.json())
        .then(dataextra2 => {
            tablaextra2(dataextra2); 
        })
    }else if(CLCombobox4 == 'CLComboBox2' && ParSql4 == 'TablaExtra5'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra5`)
        .then((respsextra5) => respsextra5.json())
        .then(dataextra2 => {
            tablaextra2(dataextra2); 
        })
    }

    if(CLCombobox3 == 'CLComboBox3' && ParSql3 == 'TablaExtra1'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra1`)
        .then((respsextra1) => respsextra1.json())
        .then(dataextra3 => {
            tablaextra3(dataextra3); 
        })
    }else if(CLCombobox3 == 'CLComboBox3' && ParSql3 == 'TablaExtra2'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra2`)
        .then((respsextra2) => respsextra2.json())
        .then(dataextra3 => {
            tablaextra3(dataextra3); 
        })
    }else if(CLCombobox3 == 'CLComboBox3' && ParSql3 == 'TablaExtra3'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra3`)
        .then((respsextra3) => respsextra3.json())
        .then(dataextra3 => {
            tablaextra3(dataextra3); 
        })
    }else if(CLCombobox3 == 'CLComboBox3' && ParSql3 == 'TablaExtra4'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra4`)
        .then((respsextra4) => respsextra4.json())
        .then(dataextra3 => {
            tablaextra3(dataextra3); 
        })
    }else if(CLCombobox3 == 'CLComboBox3' && ParSql3 == 'TablaExtra5'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra5`)
        .then((respsextra5) => respsextra5.json())
        .then(dataextra3 => {
            tablaextra3(dataextra3); 
        })
    }


    if(CLCombobox2 == 'CLComboBox4' && ParSql2 == 'TablaExtra1'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra1`)
        .then((respsextra1) => respsextra1.json())
        .then(dataextra4 => {
            tablaextra4(dataextra4); 
        })
    }else if(CLCombobox2 == 'CLComboBox4' && ParSql2 == 'TablaExtra2'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra2`)
        .then((respsextra2) => respsextra2.json())
        .then(dataextra4 => {
            tablaextra4(dataextra4); 
        })
    }else if(CLCombobox2 == 'CLComboBox4' && ParSql2 == 'TablaExtra3'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra3`)
        .then((respsextra3) => respsextra3.json())
        .then(dataextra4 => {
            tablaextra4(dataextra4); 
        })
    }else if(CLCombobox2 == 'CLComboBox4' && ParSql2 == 'TablaExtra4'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra4`)
        .then((respsextra4) => respsextra4.json())
        .then(dataextra4 => {
            tablaextra4(dataextra4); 
        })
    }else if(CLCombobox2 == 'CLComboBox4' && ParSql2 == 'TablaExtra5'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra5`)
        .then((respsextra5) => respsextra5.json())
        .then(dataextra4 => {
            tablaextra4(dataextra4); 
        })
    }

    if(CLCombobox1 == 'CLComboBox5' && ParSql1 == 'TablaExtra1'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra1`)
        .then((respsextra1) => respsextra1.json())
        .then(dataextra5 => {
            tablaextra5(dataextra5); 
        })
    }else if(CLCombobox1 == 'CLComboBox5' && ParSql1 == 'TablaExtra2'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra2`)
        .then((respsextra2) => respsextra2.json())
        .then(dataextra5 => {
            tablaextra5(dataextra5); 
        })
    }else if(CLCombobox1 == 'CLComboBox5' && ParSql1 == 'TablaExtra3'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra3`)
        .then((respsextra3) => respsextra3.json())
        .then(dataextra5 => {
            tablaextra5(dataextra5); 
        })
    }else if(CLCombobox1 == 'CLComboBox5' && ParSql1 == 'TablaExtra4'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra4`)
        .then((respsextra4) => respsextra4.json())
        .then(dataextra5 => {
            tablaextra5(dataextra5); 
        })
    }else if(CLCombobox1 == 'CLComboBox5' && ParSql1 == 'TablaExtra5'){
        fetch(`http://sistemaspesamatic.dynu.net:6997/TablaExtra5`)
        .then((respsextra5) => respsextra5.json())
        .then(dataextra5 => {
            tablaextra5(dataextra5); 
        })
    }


function tablaextra1(dataextra1) {
    var parent = document.querySelector('.combobox1');

    var extra1 = [];

    dataextra1.map((row) => {
        if (row.TabSeleccionado == true) {
            extra1.push(row);
        }
    })

    if (extra1.length > 0) {
        createcombo(parent, extra1)
    }

}

function tablaextra2(dataextra2) {
    var parent = document.querySelector('.combobox2');

    var extra2 = [];

    dataextra2.map((row) => {
        if (row.TabSeleccionado == true) {
            extra2.push(row);
        }
    })

    if (extra2.length > 0) {
        createcombo2(parent, extra2)
    }

}

function tablaextra3(dataextra3) {
    var parent = document.querySelector('.combobox3');

    var extra3 = [];

    dataextra3.map((row) => {
        if (row.TabSeleccionado == true) {
            extra3.push(row);
        }
    })

    if (extra3.length > 0) {
        createcombo3(parent, extra3)
    }

}

function tablaextra4(dataextra4) {
    
    var parent = document.querySelector('.combobox4');

    var extra4 = [];

    dataextra4.map((row) => {
        if (row.TabSeleccionado == true) {
            extra4.push(row);
        }
    })

    if (extra4.length > 0) {
        createcombo4(parent, extra4)
    }

}

function tablaextra5(dataextra5) {
    var parent = document.querySelector('.combobox5');

    var extra5 = [];

    dataextra5.map((row) => {
        if (row.TabSeleccionado == true) {
            extra5.push(row);
        }
    })

    if (extra5.length > 0) {
        createcombo5(parent, extra5)
    }

}

function createcombo(parent, rows) {

    var a = Object.create(rows[0]);

    a.TabNombre  = "no aplica";
    a.TabID = "no aplica";
    a.TabCodigo = "no aplica";

    rows.unshift(a);

    const parCCc1 = sessionStorage.getItem('parCC5');

    var div = document.createElement("div");
    div.className = "viewlabel5";

    var h2 = document.createElement("h2");
    h2.className = "nameCombobox";
    h2.style.fontSize = "13px";

    var div2 = document.createElement("div");
    div2.className = "content-viewlabel5";

    var select = document.createElement("select");
    select.className = "fil form-control form-control-sm combobo1d";
    
    var str1 = rows.map((linea) => {
        return `<option value="${linea.TabNombre}" >${linea.TabNombre}</option>`
    });

    var str2 = rows.map((linea) => {
        return `<option value="${linea.TabCodigo}">${linea.TabCodigo}</option>`
    });

    var str3 = rows.map((linea) => {
        return `<option value="${linea.TabID}">${linea.TabID}</option>`
    });


    h2.innerHTML = nll5.toUpperCase();
    if(parCCc1 === 'Nombre'){
        select.innerHTML = str1;
    }else if(parCCc1 === 'Codigo'){
        select.innerHTML = str2;
    }else if(parCCc1 === 'ID'){
        select.innerHTML = str3;
    }
    
    div.appendChild(h2);
    div.appendChild(div2);
    div2.appendChild(select);
    parent.appendChild(div);

  
    console.log(parCCc1);

}

function createcombo2(parent, rows) {

    var a = Object.create(rows[0]);

    a.TabNombre  = "no aplica";
    a.TabID = "no aplica";
    a.TabCodigo = "no aplica";

    rows.unshift(a);

    const parCCc2 = sessionStorage.getItem('parCC4');

    var div = document.createElement("div");
    div.className = "viewlabel5";

    var h2 = document.createElement("h2");
    h2.className = "nameCombobox";
    h2.style.fontSize = "13px";

    var div2 = document.createElement("div");
    div2.className = "content-viewlabel5";

    var select = document.createElement("select");
    select.className = "fil form-control form-control-sm combobo2d";
    
    var str1 = rows.map((linea) => {
        return `<option value="${linea.TabNombre}">${linea.TabNombre}</option>`
    });

    var str2 = rows.map((linea) => {
        return `<option value="${linea.TabCodigo}">${linea.TabCodigo}</option>`
    });

    var str3 = rows.map((linea) => {
        return `<option value="${linea.TabID}">${linea.TabID}</option>`
    });


    h2.innerHTML = nll6.toUpperCase();
    if(parCCc2 === 'Nombre'){
        select.innerHTML = str1;
    }else if(parCCc2 === 'Codigo'){
        select.innerHTML = str2;
    }else if(parCCc2 === 'ID'){
        select.innerHTML = str3;
    }
    
    div.appendChild(h2);
    div.appendChild(div2);
    div2.appendChild(select);
    parent.appendChild(div);

  
    console.log(parCCc2);

}


function createcombo3(parent, rows) {

    var a = Object.create(rows[0]);

    a.TabNombre  = "no aplica";
    a.TabID = "no aplica";
    a.TabCodigo = "no aplica";

    rows.unshift(a);

    const parCCc3 = sessionStorage.getItem('parCC3');

    var div = document.createElement("div");
    div.className = "viewlabel5";

    var h2 = document.createElement("h2");
    h2.className = "nameCombobox";
    h2.style.fontSize = "13px";

    var div2 = document.createElement("div");
    div2.className = "content-viewlabel5";

    var select = document.createElement("select");
    select.className = "fil form-control form-control-sm combobo3d";
    
    var str1 = rows.map((linea) => {
        return `<option value="${linea.TabNombre}">${linea.TabNombre}</option>`
    });

    var str2 = rows.map((linea) => {
        return `<option value="${linea.TabCodigo}">${linea.TabCodigo}</option>`
    });

    var str3 = rows.map((linea) => {
        return `<option value="${linea.TabID}">${linea.TabID}</option>`
    });


    h2.innerHTML = nll7.toUpperCase();
    if(parCCc3 === 'Nombre'){
        select.innerHTML = str1;
    }else if(parCCc3 === 'Codigo'){
        select.innerHTML = str2;
    }else if(parCCc3 === 'ID'){
        select.innerHTML = str3;
    }
    
    div.appendChild(h2);
    div.appendChild(div2);
    div2.appendChild(select);
    parent.appendChild(div);

  
    console.log(parCCc3);

}


function createcombo4(parent, rows) {


    var a = Object.create(rows[0]);

    a.TabNombre  = "no aplica";
    a.TabID = "no aplica";
    a.TabCodigo = "no aplica";

    rows.unshift(a);

    const parCCc4 = sessionStorage.getItem('parCC2');

    if(nll8 == 'NO APLICA'){
        // alert('a');
        document.getElementById(".combobox4").style.display = "none";
    }

    var div = document.createElement("div");
    div.className = "viewlabel5";

    var h2 = document.createElement("h2");
    h2.className = "nameCombobox";
    h2.style.fontSize = "13px";

    var div2 = document.createElement("div");
    div2.className = "content-viewlabel5";

    var select = document.createElement("select");
    select.className = "fil form-control form-control-sm combobo4d";
    
    var str1 = rows.map((linea) => {
        return `<option value="${linea.TabNombre}" >${linea.TabNombre}</option>`
    });

    var str2 = rows.map((linea) => {
        return `<option value="${linea.TabCodigo}">${linea.TabCodigo}</option>`
    });

    var str3 = rows.map((linea) => {
        return `<option value="${linea.TabID}">${linea.TabID}</option>`
    });


    h2.innerHTML = nll8.toUpperCase();
    if(parCCc4 === 'Nombre'){
        select.innerHTML = str1;
    }else if(parCCc4 === 'Codigo'){
        select.innerHTML = str2;
    }else if(parCCc4 === 'ID'){
        select.innerHTML = str3;
    }
    
    div.appendChild(h2);
    div.appendChild(div2);
    div2.appendChild(select);
    parent.appendChild(div);

  
    console.log(parCCc4);

}


function createcombo5(parent, rows) {

    var a = Object.create(rows[0]);

    a.TabNombre  = "no aplica";
    a.TabID = "no aplica";
    a.TabCodigo = "no aplica";

    rows.unshift(a);

    const parCCc5 = sessionStorage.getItem('parCC1');

    var div = document.createElement("div");
    div.className = "viewlabel5";

    var h2 = document.createElement("h2");
    h2.className = "nameCombobox";
    h2.style.fontSize = "13px";

    var div2 = document.createElement("div");
    div2.className = "content-viewlabel5";

    var select = document.createElement("select");
    select.className = "fil form-control form-control-sm combobo5d";
    
    var str1 = rows.map((linea) => {
        return `<option value="${linea.TabNombre}" >${linea.TabNombre}</option>`
    });

    var str2 = rows.map((linea) => {
        return `<option value="${linea.TabCodigo}">${linea.TabCodigo}</option>`
    });

    var str3 = rows.map((linea) => {
        return `<option value="${linea.TabID}">${linea.TabID}</option>`
    });


    h2.innerHTML = nll5.toUpperCase();
    if(parCCc5 === 'Nombre'){
        select.innerHTML = str1;
    }else if(parCCc5 === 'Codigo'){
        select.innerHTML = str2;
    }else if(parCCc5 === 'ID'){
        select.innerHTML = str3;
    }
    
    div.appendChild(h2);
    div.appendChild(div2);
    div2.appendChild(select);
    parent.appendChild(div);

  
    console.log(parCCc5);
}


document.getElementById("butonsavepabb").addEventListener("click", function(){

        urlparametrosR = `http://192.168.1.200:6997/ParametroReporte/corto`

        var input1dd = document.getElementById('namelabeid0').value;
        var input2dd = document.getElementById('namelabeid0').value;
        var input3dd = document.getElementById('namelabeid0').value;
        var input4dd = document.getElementById('namelabeid0').value;
        var input5dd = document.getElementById('namelabeid0').value;

        var a1 = document.querySelector(".combobo1d");
        var combobo1d = a1.options[a1.selectedIndex].value;
        if(combobo1d == 'no aplica'){
            combobo1d = '-1';
        }

        var a2 = document.querySelector(".combobo2d");
        var combobo2d = a2.options[a2.selectedIndex].value;
        if(combobo2d == 'no aplica'){
            combobo2d = '-1';
        }

        var a3 = document.querySelector(".combobo3d");
        var combobo3d = a3.options[a3.selectedIndex].value;
        if(combobo3d == 'no aplica'){
            combobo3d = '-1';
        }

        var a4 = document.querySelector(".combobo4d");
        var combobo4d = a4.options[a4.selectedIndex].value;   
        if(combobo4d == 'no aplica'){
            combobo4d = '-1';
        }   

        // var a5 = document.querySelector(".combobo5d");
        // var combobo5d = a5.options[a5.selectedIndex].value;

        console.log(combobo1d+" "+combobo3d);

    
        nomID = sessionStorage.getItem('logStorage');

        var fechadesde = document.getElementById('search-boxdate1').value;
        var horadesde = document.getElementById('timepicker1').value;

        var horadesdec = fechadesde+"T"+horadesde+":00.000Z";


        var fechadesde2 = document.getElementById('search-boxdate2').value;
        var horadesde2 = document.getElementById('timepicker2').value;

        var horadesdec2 = fechadesde2+"T"+horadesde2+":00.000Z";
    
  

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
            ParVariable23: "-1"
        }
    
        const newPost = parametroscomboylabels =>{
            const options = {
                method: 'PUT',
                body: JSON.stringify(parametroscomboylabels),
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            }
    
            return fetch(urlparametrosR+"/"+"carlos", options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.error(`Error: ${error}`))
        }
    
        newPost(parametroscomboylabels);


})