var parentlabel = document.querySelector('.input1');
var parentlabel2 = document.querySelector('.input2');
var parentlabel3 = document.querySelector('.input3');
var parentlabel4 = document.querySelector('.input4');
var parentlabel5 = document.querySelector('.input5');


fetch(`http://192.168.1.200:6997/parametroslabel/FormaParametrosReporte`)
    .then((resps) => resps.json())
    .then(dataa => {
        tablaa(dataa);
    })

function tablaa(dataa) {


    const nl0 = dataa[9].ParText;
    const nl1 = dataa[8].ParText;
    const nl2 = dataa[7].ParText;
    const nl3 = dataa[3].ParText;
    const nl4 = dataa[2].ParText;
    const nl5 = dataa[6].ParText;
    const nl6 = dataa[5].ParText;
    const nl7 = dataa[4].ParText;
    const nl8 = dataa[1].ParText;
    const nl9 = dataa[0].ParText;


    sessionStorage.setItem('nl0', nl0);
    sessionStorage.setItem('nl1', nl1);
    sessionStorage.setItem('nl2', nl2);
    sessionStorage.setItem('nl3', nl3);
    sessionStorage.setItem('nl4', nl4);
    sessionStorage.setItem('nl5', nl5);
    sessionStorage.setItem('nl6', nl6);
    sessionStorage.setItem('nl7', nl7);
    sessionStorage.setItem('nl8', nl8);
    sessionStorage.setItem('nl9', nl9);


    parentlabel.innerHTML = `
    <h2 class="namelabel" id="namelabel0" style="font-size: 13px;">${nl0.toUpperCase()}</h2>
    <input id='namelabeid0' class="namelabell0 search form-control" style="height:30px; font-size: 0.765625rem;">
    `
    parentlabel2.innerHTML = `
    <h2 class="namelabel" id="namelabel1" style="font-size: 13px;">${nl1.toUpperCase()}</h2>
    <input id='namelabeid1' class="namelabell1 search form-control" style="height:30px; font-size: 0.765625rem;">
    `
    parentlabel3.innerHTML = `
    <h2 class="namelabel" id="namelabel2" style="font-size: 13px;">${nl2.toUpperCase()}</h2>
    <input id='namelabeid2' class="namelabell2 search form-control" style="height:30px; font-size: 0.765625rem;">
    `
    parentlabel4.innerHTML = `
    <h2 class="namelabel" id="namelabel3" style="font-size: 13px;">${nl3.toUpperCase()}</h2>
    <input id='namelabeid3' class="namelabell3 search form-control" style="height:30px; font-size: 0.765625rem;">
    `
    parentlabel5.innerHTML = `
    <h2 class="namelabel" id="namelabel4" style="font-size: 13px;">${nl4.toUpperCase()}</h2>
    <input id='namelabeid4' class="namelabell4 search form-control" style="height:30px; font-size: 0.765625rem;">
    `


    if(nl0 == 'NO APLICA'){
        // alert('a');
        document.querySelector(".input1").className = "display-none";
    }
    if(nl1 == 'NO APLICA'){
        // alert('a');
        document.querySelector(".input2").className = "display-none";
    }
    if(nl2 == 'NO APLICA'){
        // alert('a');
        document.querySelector(".input3").className = "display-none";
    }
    if(nl3 == 'NO APLICA'){
        // alert('a');
        document.querySelector(".input4").className = "display-none";
    }
    if(nl4 == 'NO APLICA'){
        // alert('a');
        document.querySelector(".input5").className = "display-none";
    }

    if(nl5 == 'NO APLICA'){
        document.querySelector(".combobox1").style.display = "none";
    }
    if(nl6 == 'NO APLICA'){
        document.querySelector(".combobox2").style.display = "none";
    }
    if(nl7 == 'NO APLICA'){
        document.querySelector(".combobox3").style.display = "none";
    }
    if(nl8 == 'NO APLICA'){
        document.querySelector(".combobox4").style.display = "none";
    }
    if(nl9 == 'NO APLICA'){
        document.querySelector(".combobox5").style.display = "none";
    }

}