document.getElementById("buttonnewuser").addEventListener("click", function(){
  var urldbcrud = sessionStorage.getItem("urlcrud");
  var getid = document.getElementById("idid").value;
  var getname = document.getElementById("nombre").value;
  var getuser = document.getElementById("loginn").value;
  var getpass = document.getElementById("pass").value;


const post = {
    UsuUsuario: document.getElementById("loginn").value,
    UsuNombre: document.getElementById("nombre").value,
    UsuClave: document.getElementById("pass").value
}
console.log(post);
const newPost = post => {
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    console.log(post);
    return fetch(urldbcrud, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error(`Error: ${error}`))
}

newPost(post);

document.getElementById("nombre").value = "";
document.getElementById("idid").value = "";
document.getElementById("pass").value = "";
document.getElementById("pass2").value = "";
document.getElementById("loginn").value = "";

});