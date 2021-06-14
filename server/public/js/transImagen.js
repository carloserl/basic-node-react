const TablaImg = document.getElementById('TablaImge')

function fecthImagen() {
    fetch(`http://192.168.1.200:6997/TransaccionImagen/`)
        .then((respImg) => respImg.json())
        .then(dataImg => {

            writeTable(dataImg);
        })
}

function writeTable(dataImg) {

    for (let i = 0; i < dataImg.length; i++) {

        TablaImg.innerHTML += `
    
                <tr class="">
                <td class="col0tatim">${ dataImg[i].TraID}</td>
                <td class="col1tatim" >${ dataImg[i].TraPeticionID}</td>
                <td class="col2tatim">${ dataImg[i].TraFechaImagen.substr(-27, 10)} ${dataImg[i].TraFechaImagen.substr(-13, 11)}</td>
                <td class="col3tatim">${dataImg[i].TraTransaccion}</td>
                <td class="col4tatim">${ dataImg[i].TraIDEjecutante}</td>
                <td class="col5tatim">${ dataImg[i].TraIDCamara}</td>
                <td class="col6tatim"><img class="imgTra" src="data:image/png;base64,${dataImg[i].TraImagen}" alt=""></td>
                <td class="col7tatim">
                <div class="bs-component rueba" >
                <ul class="nav nav-pills ">
                <li class="nav-item dropdown"><a class="nav-link  fa fa-ellipsis-v" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"></a>
                    <div class="dropdown-menu dropdownt" id="btnnImg"><a class="dropdown-item" name="select"  href="report-img1.html">ver mas</a>
                    </div>
                </li>
                </ul>
                </div>
                </td>
                </tr>
        `
    }
    callvalueImg();
}

function callvalueImg() {
    let radios = document.getElementsByName('select');
    let table = document.getElementById('TablaImge');
    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = function () {
            for (let j = 0; j < table.rows.length; j++) {
                table.rows[i].cells.item(7).onclick = function () {
                    localStorage.setItem('cell0', this.parentElement.cells[0].innerHTML);
                    
                }
            }
        }
    }
}

fecthImagen();


