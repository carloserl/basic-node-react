var iduser;
var nameuser;
var loginuser;
var pass1user;
var pass2user;

var urldbcrud = sessionStorage.getItem("urlcrud");

iduser = localStorage.getItem("colt1d");
nameuser = localStorage.getItem("colt2d");
loginuser = localStorage.getItem("colt3d");
pass1user = localStorage.getItem("colt4d");
pass2user = localStorage.getItem("colt5d");

document.getElementById("useridd").value = iduser;
document.getElementById("usernamed").value = nameuser;
document.getElementById("userlogind").value = loginuser;
document.getElementById("userpass1d").value = pass1user;
document.getElementById("userpass2d").value = pass2user;


document.getElementById("buttonupdated").addEventListener("click", function(){
    const userdelete = {
        nombre: document.getElementById("usernamed").value,
        login: document.getElementById("userlogind").value,
        pass: document.getElementById("userpass1d").value
    }

    const newPost = userdelete =>{
        const options = {
            method: 'DELETE',
            body: JSON.stringify(userdelete),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }

        return fetch(urldbcrud+"/"+iduser, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error(`Error: ${error}`))
    }

    newPost(userdelete);

    document.getElementById("useridd").value = "";
    document.getElementById("usernamed").value = "";
    document.getElementById("userlogind").value = "";
    document.getElementById("userpass1d").value = "";
    document.getElementById("userpass2d").value = "";
  

})