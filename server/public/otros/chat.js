const socket = io();

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

const w1 = document.getElementById('weight1');
const w2 = document.getElementById('weight2');
const w3 = document.getElementById('weight3');
let btn2 = document.getElementById('reconnect');
let btn3 = document.getElementById('config');

btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    });
});



btn2.addEventListener('click', function () {
   
socket.emit('tcp', {
    name:"tcp-1",
    port: 1702,
    ip: "192.168.1.193",
    type: 1
});

socket.emit('tcp', {
    name:"tcp-2",
    port: 1702,
    ip: "192.168.1.194"
});

 socket.emit('serial', {
    name:"serial-1",
    port: "/dev/tty.usbserial",
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    type: 1
});

});

btn3.addEventListener('click', function () {
    socket.emit('tcp', 'tcp-1');
    // socket.emit('serial-config', 'serial');
});



socket.emit('tcp', {
    name:"tcp-1",
    port: 1702,
    ip: "192.168.1.193",
    type: 1
});

socket.emit('tcp', {
    name:"tcp-2",
    port: 1702,
    ip: "192.168.1.194"
});

 socket.emit('serial', {
    name:"serial-1",
    port: "/dev/tty.usbserial",
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    type: 1
});

socket.on('message', function (data) {
    actions.innerHTML = '';
    output.innerHTML += `<p>
      <strong>${data.username}</strong>: ${data.message}
    </p>`
});


socket.on('serial-1:response', function (data) {
    handlerweight(w1,data);
});

socket.on('tcp-1:response', function (data) {
    handlerweight(w2,data);
});

socket.on('tcp-2:response', function (data) {
    handlerweight(w3,data);
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


socket.on('img:response', function (data) {
    document.getElementById("placehere").innerHTML = ``;
    document.getElementById("placehere").innerHTML = ` <img src='${data}' />`;
    console.log('hola');
});

socket.on('img2:response', function (data) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var imageObj = new Image();

    imageObj.on = function () {
        context.drawImage(imageObj, 69, 50);
    };
    imageObj.src = data;


    console.log(`${data}`);
});

message.addEventListener('keypress', function () {
    socket.emit('chat:typing', username.value);
});

socket.on('chat:typing', function (data) {
    actions.innerHTML = `<p><em>${data} is typing a message...</em></p>`
});



let url = "http://192.168.1.100:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=admin1&pwd=admin1";


let simbol1 = "#";
let simbol2 = "&";

// "http://24.172.4.142/mjpg/video.mjpg?COUNTER";
// "http://192.168.1.100:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=admin1&pwd=admin1"

var newImage = new Image();
newImage.src = url;


let myVar1 = setInterval(myTimer, 1000);

function myTimer() {
    let date = new Date();
    const src = url+simbol2+"t=" + Math.floor(date.getTime() / 1000);
    let canvas = document.getElementById('myCanvas1');
    let context = canvas.getContext('2d');
    let imageObj = new Image();

    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0);
    };
    imageObj.src = src;
}



// // OPCION NUEVA



// function loadcamera(obj){
//     let src = obj.src;
//     setTimeout(`loadimage(${obj},${src})`, 1000)

// }

// function loadimage(obj,src){
//     let date = new Date();
//     obj.src = src + Math.floor(date.getTime() / 1000);
// }


// function reload2() {
//     setTimeout('reloadImg2("refresh2")', 1000)
// }

// function reloadImg2(id) {
//     let obj = document.getElementById(id);
//     let date = new Date();
//     obj.src = "http://24.172.4.142/mjpg/video.mjpg?COUNTER&t=" + Math.floor(date.getTime() / 1000);
//     // obj.src = "http://24.172.4.142/mjpg/video.mjpg?COUNTER#" + Math.floor(date.getTime() / 1000);
// }


// function reload() {
//     setTimeout('reloadImg("refresh")', 100)
// }

// function reloadImg(id) {
//     let obj = document.getElementById(id);
//     let date = new Date();
//     obj.src = "http://192.168.1.101:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=admin1&pwd=admin1&t=" + Math.floor(date.getTime() / 100);
// }