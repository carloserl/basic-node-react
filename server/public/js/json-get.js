var conten = document.querySelector('#autores');
var cantr = document.querySelector('#countItems');
var urldbcrud = sessionStorage.getItem("urlcrud");

fetch(urldbcrud)
.then((resp) => resp.json())
.then( data => {
    tabla(data)
})

function tabla(data){
    // console.log(data)
    //    conten.innerHTML = ''
    var i=0;
    for(let valor of data){
        conten.innerHTML += `

                  <tr>
                    <td class="col1ta">${ valor.UsuUsuario }</td>
                    <td class="col2ta">${ valor.UsuNombre }</td>
                    <td class="col3ta">${ valor.UsuClave }</td>
                    <td class="col4ta">${ valor.UsuUsuario }</td>
                    <td class="col5ta">${ valor.UsuClave }</td>
                    <td class="ttdsize noEx1">
                    <a class="btn btnrowtable iconview"><h3>Ver mas</h3></a>
                    <a class="btn btnrowtable iconedit"><h3>Editar</h3></a>
                    <a class="btn btnrowtable icondelete"><h3>Eliminar</h3></a>
                    </td>
                  </tr>
        
        `
        i++;
    }
    
    cantr.innerHTML = i + ' '+' total users'
    
}