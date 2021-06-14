function getsession(){
    

    var name = sessionStorage.getItem('logStorage');
    var countpage = isNaN(parseInt(window.name))?0:parseInt(window.name);
    localStorage.setItem('countpage', countpage);


    var countpager = localStorage.getItem('countpage');


    if((name == null || name == undefined)){

        localStorage.clear();
        setTimeout(function(){
            
            var en = document.getElementById('s1');
            en.style.display = "none";
        
        }, 3000);
       
        window.location.href='page-login.html'
    }else{

        var en = document.getElementById('s1');
        en.style.display = "none";
        document.querySelector('#autentification').innerHTML = name;
        
        countpager++;
        if(countpager>1){

   
            window.name=countpager;
        }else{
            swal({
                position: 'center',
                type: 'success',
                title: 'Bienvenido ' + name,
                showConfirmButton: false,
                timer: 4000
              })
   
            window.name=countpager;
        } 
        
    }
}

document.getElementById("logout").addEventListener("click", function(){
    sessionStorage.clear();
    localStorage.clear();
    
    window.location.href = 'page-login.html';
    window.name =0;
})

window.onload = getsession;