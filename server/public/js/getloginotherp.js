function getsession(){
    

    var name = sessionStorage.getItem('logStorage');


    if((name == null || name == undefined)){


        setTimeout(function(){
            
            var en = document.getElementById('s1');
            en.style.display = "none";
        
        }, 3000);
       
        window.location.href='page-login.html'
    }else{
        var en = document.getElementById('s1');
            en.style.display = "none";
        document.querySelector('#autentification').innerHTML = name;
    }
}

document.querySelector('#logout').onclick = function(){
    sessionStorage.clear();
    localStorage.clear();
    history.clear();
    window.location.href = 'page-login.html';
}

window.onload = getsession;