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

document.getElementById("useridd").value = iduser;
document.getElementById("usernamed").value = nameuser;
document.getElementById("userlogind").value = loginuser;
document.getElementById("userpass1d").value = pass1user;
document.getElementById("userpass2d").value = pass2user;

