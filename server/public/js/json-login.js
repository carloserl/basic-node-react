const urlc = 'http://192.168.1.200:6997/usuarios';

document.getElementById("btloginn").addEventListener("click", function(event){
event.preventDefault();



fetch(urlc)
.then((resp) => resp.json())
.then( data => {
    datauser(data)
})
.catch(error => alert.error(`Error: ${error}`))


function datauser(data){

    var user = document.getElementById('getusern').value;
    var pass = document.getElementById('getuserp').value;

    var user1 = document.getElementById('getusern').value;
    var x = 1
    for(var i = 0; i < data.length; i++){

        if(user == data[i].UsuUsuario.trim() && pass == data[i].UsuClave.trim() ){
           console.log('existe')
           console.log(i);
           x = i;
        }

    }

    if(document.getElementById('getusern').value == ''  && document.getElementById('getuserp').value == ''){
        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
          });
          
          toast({
            type: 'info',
            title: 'Introduzca Usuario y Contraseña'
          })
    }else if(document.getElementById('getusern').value != '' && document.getElementById('getuserp').value == ''){
        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
          });
          
          toast({
            type: 'warning',
            title: 'Introduzca su Contraseña'
          })
    }else if(document.getElementById('getusern').value == '' && document.getElementById('getuserp').value != ''){
        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
          });
          
          toast({
            type: 'warning',
            title: 'Introduzca su Usuario'
          })
    }else if(user == data[x].UsuUsuario.trim() && pass == data[x].UsuClave.trim()){
                sessionStorage.setItem('logStorage', user);
                sessionStorage.setItem('us', user1);
                sessionStorage.setItem('urlcrud', urlc);

                window.location.href= 'index.html';
  
            }else{
                const toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  
                  toast({
                    type: 'error',
                    title: 'Error en usuario o contraseña'
                  })

            }
    
}

})

function movelog(){
    var moverlogin = document.getElementById('movel');
    var moverimg1 = document.getElementById('logm1');
    var moverimg2 = document.getElementById('logm2');
    var moverimg3 = document.getElementById('logm3');
    var moverimg4 = document.getElementById('moveimgl');
    var moverform = document.getElementById('login');

    moverlogin.style.marginTop= "auto";
    moverlogin.style.opacity= "1";

    moverimg1.style.transform= "translateX(0px)";
    moverimg1.style.opacity= "1";

    moverimg2.style.transform= "translateX(0px)";
    moverimg2.style.opacity= "1";

    moverimg3.style.transform= "translateX(0px)";
    moverimg3.style.opacity= "1";

    moverimg4.style.opacity= "1";

    moverform.style.opacity= "1";
}

window.onload = movelog;


