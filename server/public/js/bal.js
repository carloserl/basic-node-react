const socket = io();

const w1 = document.getElementById('bal1');

socket.emit('tcp', {
    name:"tcp-1",
    port: 1702,
    ip: "192.168.1.193",
    type: 1
});

socket.on('tcp-1:response', function (data) {
    handlerweight(w1,data);
});

function handlerweight(obj, data){
    if (data == 'close') {
        obj.classList.remove("green");
        obj.classList.remove("red");
        obj.classList.add("black");
        obj.innerText = "close TCP";
    } else if (data == 'TCP Waiting') {
        obj.classList.remove("green");
        obj.classList.remove("red");
        obj.classList.add("black");
        obj.innerText = data;
    } else {
        changeweight(obj, data);
    }
}

function changeweight(obj, data) {
    console.log(data.state);
    if (data.state == 0 || data.state == 1) {
        obj.classList.remove("red");
        obj.classList.remove("black");
        obj.classList.add("green");
    } else if (data.state == 8 || data.state == 9) {
        obj.classList.remove("green");
        obj.classList.remove("black");
        obj.classList.add("red");
    } else {
        obj.classList.remove("green");
        obj.classList.remove("black");
        obj.classList.add("red");
    }
    obj.innerText = `${data.gross}`;
}


//*******************************Camara 1************************************ */

let url = "http://192.168.1.100:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=admin1&pwd=admin1";
let url2= "http://24.172.4.142/mjpg/video.mjpg?COUNTER";
//let url = "http://87.54.226.246/mjpg/video.mjpg";


let camara1 = "http://192.168.1.100:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=admin1&pwd=admin1";
let camara2 = "http://24.172.4.142/mjpg/video.mjpg?COUNTER";
let camara3 = "http://87.54.226.246/mjpg/video.mjpg";
let camara4 = "http://192.168.1.101:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=admin1&pwd=admin1";

let simbol1 = "#";
let simbol2 = "&";

function selectCamara(number){
    switch (number){
        case 1:
            url = "";
            url = camara1;
            myTimer();
            break;
        case 2:
            url = "";
            url = camara2;
            myTimer();
            break;
        case 3:
            url = "";
            url = camara3;
            myTimer();
            break;
        case 4:
            url = camara4;
            myTimer();
            break;
        default:
            url = camara1;
        break;
    }
    
}

// "http://24.172.4.142/mjpg/video.mjpg?COUNTER";
// "http://192.168.1.100:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=admin1&pwd=admin1"

var newImage = new Image();
newImage.src = url;


// let myVar1 = setInterval(myTimer, 2000);

// function myTimer() {
//     let date = new Date();
//     const src = url+simbol2+"t=" + Math.floor(date.getTime() / 2000);
//     let canvas = document.getElementById('myCanvas1');
//     let context = canvas.getContext('2d');
//     let imageObj = new Image();

//     imageObj.onload = function () {
//         context.drawImage(imageObj, 0, 0, 300,150);
//     };
//     imageObj.src = src;

// }

//******** Mini Camara 1 *********
var newImage3 = new Image();
newImage3.src = url;


let myVar3 = setInterval(myTimer3, 2000);

function myTimer3() {
    let date3 = new Date();
    const src3 = url+simbol2+"t=" + Math.floor(date3.getTime() / 2000);
    let canvas3 = document.getElementById('miniCanvas1');
    let context3 = canvas3.getContext('2d');
    let imageObj3 = new Image();

    imageObj3.onload = function () {
        context3.drawImage(imageObj3, 0, 0, 300, 150);
    };
    imageObj3.src = src3;
}


//******** Mini Camara 2 *********
var newImage2 = new Image();
newImage2.src = url;


let myVar2 = setInterval(myTimer2, 2000);

function myTimer2() {
    let date2 = new Date();
    const src2 = url+simbol2+"t=" + Math.floor(date2.getTime() / 2000);
    let canvas2 = document.getElementById('miniCanvas2');
    let context2 = canvas2.getContext('2d');
    let imageObj2 = new Image();

    imageObj2.onload = function () {
        context2.drawImage(imageObj2, 0, 0, 300, 150);
    };
    imageObj2.src = src2;
}


//<p>Imagen 64</p>
//    <img src="data:image/jpeg;base64,