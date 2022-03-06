var miligiay = 0
var giay = 0
var phut = 0
var gio = 0
const array = [];
var playmiligiay = document.getElementById('milisecond')
var playgiay = document.getElementById('second')
var playphut = document.getElementById('minute')
var playgio = document.getElementById('hour')
const x = document.querySelectorAll(".btn");

console.log("chieu dai: " + x.length)

x.forEach(myFunction)

function myFunction(item, index) {
    item.onclick = function () {
        array.push(index)
        if (array.length == 1) {
            miligiay += array[0]
            playmiligiay.innerHTML = '0' + array[0]
        }
        if (array.length == 2) {
            miligiay = array[1] * 10 + array[0]
            playmiligiay.innerHTML = array[1] + "" + array[0]
        }
        if (array.length == 3) {
            giay += array[2]
            playgiay.innerHTML = '0' + array[2]

        }
        if (array.length == 4) {
            giay = array[3] * 10 + array[2]
            playgiay.innerHTML = array[3] + "" + array[2]
        }
        if (array.length == 5) {
            phut += array[4]
            playphut.innerHTML = '0' + array[4]

        }
        if (array.length == 6) {
            phut = array[5] * 10 + array[4]
            playphut.innerHTML = array[5] + "" + array[4]
        }
        if (array.length == 7) {
            gio += array[6]
            playgio.innerHTML = '0' + array[6]
        }
        if (array.length == 8) {
            gio = array[7] * 10 + array[6]
            playgio.innerHTML = array[7] + "" + array[6]
        }
        if (array.length > 8) {
            alert('không thể nhập tiếp')
        }

        console.log(array)

    }

}

function set() {

    if (giay > 60) {
        phut = phut + 1
        giay = giay - 60
    }
    if (phut > 60) {
        gio = gio + 1
        phut = phut - 60
    }

    playmiligiay.innerHTML = miligiay
    playgiay.innerHTML = giay
    playphut.innerHTML = phut
    playgio.innerHTML = gio

}

function start() {

}






