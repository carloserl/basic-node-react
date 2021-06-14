var iduser;
var nameuser;
var loginuser;
var pass1user;
var pass2user;

var urldbcrud = sessionStorage.getItem("urlcrud");

iduser = localStorage.getItem("colt1");
nameuser = localStorage.getItem("colt2");
loginuser = localStorage.getItem("colt3");
pass1user = localStorage.getItem("colt4");
pass2user = localStorage.getItem("colt5");

document.getElementById("userid").value = iduser;
document.getElementById("username").value = nameuser;
document.getElementById("userlogin").value = loginuser;
document.getElementById("userpass1").value = pass1user;
document.getElementById("userpass2").value = pass2user;


document.getElementById("buttonupdate").addEventListener("click", function(){

    const userupdate = {
        UsuNombre: document.getElementById("username").value,
        UsuUsuario: document.getElementById("userlogin").value,
        UsuClave: document.getElementById("userpass1").value
    }

    const newPost = userupdate =>{
        const options = {
            method: 'PUT',
            body: JSON.stringify(userupdate),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }

        return fetch(urldbcrud+"/"+iduser, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error(`Error: ${error}`))
    }

    newPost(userupdate);

    document.getElementById("userid").value = "";
    document.getElementById("username").value = "";
    document.getElementById("userlogin").value = "";
    document.getElementById("userpass1").value = "";
    document.getElementById("userpass2").value = "";
    // location.href ="table-data-table.html";

})