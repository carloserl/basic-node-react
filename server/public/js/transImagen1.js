function fecthImagen1() {

    let IDviewImg = localStorage.getItem('cell0');

    fetch(`http://192.168.1.200:6997/TransaccionImagen/${IDviewImg}`)
        .then((respImg) => respImg.json())
        .then(dataImg => {
            writeTable1(dataImg);
        })
}

function writeTable1(dataImg) {
    document.querySelector('.contVI1').innerHTML = dataImg[0].TraID;
    document.querySelector('.contVI2').innerHTML = dataImg[0].TraIDEjecutante;
    document.querySelector('.contVI3').innerHTML = dataImg[0].TraFechaImagen.substr(-27, 10) + '  ' + dataImg[0].TraFechaImagen.substr(-13, 11); 
    document.querySelector('.contVI4').innerHTML = dataImg[0].TraTransaccion;   
    document.querySelector('.contVI5').innerHTML = dataImg[0].TraIDCamara;
    console.log(dataImg[0].TraID);

    document.querySelector('.imgView').innerHTML = `
         <img class="imgTra" src="data:image/png;base64,${dataImg[0].TraImagen}" alt="">
         <div class="viewZoom"><i class="fa fa-camera facamara" aria-hidden="true"></i></div>
    `
   
}

fecthImagen1();
