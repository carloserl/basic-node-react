var tableTt = document.getElementById('reportesss');

function tableT(){
    fetch(`http://192.168.1.200:6997/winPro`)
    .then((resp) => resp.json())
    .then(reportes => {
        gettableT(reportes);
    })
}

function gettableT(reportes){
    console.log(reportes);
    for(let value of reportes){
      
        tableTt.innerHTML += `
            <tr>
            <td class="col1tat">${ value.TabID }</td>
            <td class="col1tat">${ value.Fecha.substr(-27, 10)} ${ value.Fecha.substr(-13, 11) }</td>
            <td class="col2tat">${ value.Campo1 }</td>
            <td class="col3tat">${ value.Campo2 }</td>
            <td class="col4tat">${ value.Campo3 }</td>
            <td class="col5tat">${ value.Campo4 }</td>
            <td class="col6tat">${ value.Campo5 }</td>
            <td class="col7tat">${ value.bruto }</td>
            <td class="col8tat">${ value.tara }</td>
            <td class="col9tat">${ value.neto }</td>
            </tr>
        `
    }
    paginator({
        table: document.getElementById("table_box_native").getElementsByTagName("table")[0],
        box: document.getElementById("index_native"),
    });
}

tableT();