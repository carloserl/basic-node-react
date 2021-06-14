var conten = document.querySelector('#autores');
var contenfl1 = document.querySelector('#filter-company')
var cantr = document.querySelector('#countItems');
var urldbcrud = sessionStorage.getItem("urlcrud");

fetch(`http://192.168.1.200:6997/vista_rst1/`)
.then((resp) => resp.json())
.then( data => {
    tabla(data)
})

function tabla(data){
    // console.log(data)
    //    conten.innerHTML = ''
    for(let valor of data){

        const d1 = valor.TraFecha.substr(-27, 10);


        // conten.innerHTML = `

        //           <tr>
        //           <td class="col1ta">${ d1 }</td>
        //           <td class="col2ta" >${ valor.T09 }</td>
        //           <td class="col3ta  company" data-company="${ valor.T08 }">${ valor.T08}</td>
        //           <td class="col4ta">${ valor.TraTransaccion }</td>
        //           <td class="col5ta">${ valor.T01 }</td>
        //           <td class="col6ta">${ valor.T02 }</td>
        //           <td class="col7ta">${ valor.T03 }</td>
        //           <td class="col8ta">${ valor.T012 }</td>
        //           <td class="col9ta">${ valor.TraBruto }</td>
        //           <td class="col10ta">${ valor.TraTara }</td>
        //           <td class="col11ta">${ valor.TraNeto }</td>
        //           <tr>
        
        // `
    }

    // for(let valor of data){

    //     contenfl1.innerHTML += `
        
    //       <option value="${ valor.T08.trim() }">${ valor.T08.trim() }</option>
        
        
        
    //     `
    // }

}