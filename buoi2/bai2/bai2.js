var giay = 0
var chucgiay = 0
var phut = 0
var chucphut = 0
var gio = 0
var chucgio = 0
var ngay = 0
var chucngay = 0
var interval
const array = [];
const arr = []
const x = document.querySelectorAll(".btn");

var func = document.getElementById('start')

var pause = true
func.addEventListener('click', function () {


    pause = !pause

    if (pause == false) {
        console.log('hi')
        interval = setInterval(countdown, 1000)
        func.innerText = 'Pause'
    }
    else {
        console.log('hehe')
        clearInterval(interval)
        func.innerText = 'Continute'
    }
})

document.getElementById('clear').onclick = function () {
    func.innerText = 'Start'
    pause = true
    clearInterval(interval)
    giay = arr[0] || 0
    chucgiay = arr[1] || 0
    phut = arr[2] || 0
    chucphut = arr[3] || 0
    gio = arr[4] || 0
    chucgio = arr[5] || 0
    ngay = arr[6] || 0
    chucngay = arr[7] || 0
    if (chucgiay > 5) {
        chucgiay -= 6
        phut += 1
    }
    if (phut > 9) {
        chucphut += 1
        phut = 0
    }
    if (chucphut > 5) {
        chucphut -= 6
        gio += 1
    }
    if (gio > 9) {
        chucgio += 1
        gio = 0
    }
    if (chucgio > 5) {
        chucgio -= 6
        ngay += 1
    }
    if (ngay > 9) {
        chucngay += 1
        ngay = 0
    }
    document.getElementById('giay').innerText = giay
    document.getElementById('chucgiay').innerText = chucgiay
    document.getElementById('phut').innerText = phut
    document.getElementById('chucphut').innerText = chucphut
    document.getElementById('gio').innerText = gio
    document.getElementById('chucgio').innerText = chucgio
    document.getElementById('ngay').innerText = ngay
    document.getElementById('chucngay').innerText = chucngay


}



function start() {
    interval = setInterval(countdown, 1000)

}
function countdown() {
    giay--
    if (giay < 0) {
        chucgiay -= 1
        giay = 9
    }
    if (chucgiay < 0) {
        chucgiay = 5
        giay = 9
        phut -= 1
    }
    if (phut < 0) {
        chucphut -= 1
        phut = 9
    }
    if (chucphut < 0) {
        chucphut = 5
        phut = 9
        gio -= 1
    }
    if (gio < 0) {
        chucgio -= 1
        gio = 9
    }
    if (chucgio < 0) {
        chucgio = 5
        gio = 9
        ngay -= 1
    }
    if (ngay < 0) {
        chucngay -= 1
        ngay = 9
    }
    if (chucngay < 0) {
        clearInterval(interval)
    }
    document.getElementById('giay').innerText = giay
    document.getElementById('chucgiay').innerText = chucgiay
    document.getElementById('phut').innerText = phut
    document.getElementById('chucphut').innerText = chucphut
    document.getElementById('gio').innerText = gio
    document.getElementById('chucgio').innerText = chucgio
    document.getElementById('ngay').innerText = ngay
    document.getElementById('chucngay').innerText = chucngay
    document.getElementById('giay').innerText = giay
    document.getElementById('chucgiay').innerText = chucgiay
    document.getElementById('phut').innerText = phut
    document.getElementById('chucphut').innerText = chucphut
    document.getElementById('gio').innerText = gio
    document.getElementById('chucgio').innerText = chucgio
    document.getElementById('ngay').innerText = ngay
    document.getElementById('chucngay').innerText = chucngay

}

x.forEach(myFunction)

function myFunction(item, index) {
    item.onclick = function () {
        array.unshift(index)
        arr.unshift(index)
        giay = array[0] || 0
        chucgiay = array[1] || 0
        phut = array[2] || 0
        chucphut = array[3] || 0
        gio = array[4] || 0
        chucgio = array[5] || 0
        ngay = array[6] || 0
        chucngay = array[7] || 0
        document.getElementById('giay').innerText = array[0] || 0
        document.getElementById('chucgiay').innerText = array[1] || 0
        document.getElementById('phut').innerText = array[2] || 0
        document.getElementById('chucphut').innerText = array[3] || 0
        document.getElementById('gio').innerText = array[4] || 0
        document.getElementById('chucgio').innerText = array[5] || 0
        document.getElementById('ngay').innerText = array[6] || 0
        document.getElementById('chucngay').innerText = array[7] || 0


    }
}


function set() {

    if (chucgiay > 5) {
        chucgiay -= 6
        phut += 1
    }
    if (phut > 9) {
        chucphut += 1
        phut = 0
    }
    if (chucphut > 5) {
        chucphut -= 6
        gio += 1
    }
    if (gio > 9) {
        chucgio += 1
        gio = 0
    }
    if (chucgio > 5) {
        chucgio -= 6
        ngay += 1
    }
    if (ngay > 9) {
        chucngay += 1
        ngay = 0
    }
    document.getElementById('giay').innerText = giay
    document.getElementById('chucgiay').innerText = chucgiay
    document.getElementById('phut').innerText = phut
    document.getElementById('chucphut').innerText = chucphut
    document.getElementById('gio').innerText = gio
    document.getElementById('chucgio').innerText = chucgio
    document.getElementById('ngay').innerText = ngay
    document.getElementById('chucngay').innerText = chucngay


}



function start() {
    interval = setInterval(countdown, 1000)

}
function countdown() {
    giay--
    if (giay < 0) {
        chucgiay -= 1
        giay = 9
    }
    if (chucgiay < 0) {
        chucgiay = 5
        giay = 9
        phut -= 1
    }
    if (phut < 0) {
        chucphut -= 1
        phut = 9
    }
    if (chucphut < 0) {
        chucphut = 5
        phut = 9
        gio -= 1
    }
    if (gio < 0) {
        chucgio -= 1
        gio = 9
    }
    if (chucgio < 0) {
        chucgio = 5
        gio = 9
        ngay -= 1
    }
    if (ngay < 0) {
        chucngay -= 1
        ngay = 9
    }
    if (chucngay < 0) {
        clearInterval(interval)
    }


    document.getElementById('giay').innerText = giay
    document.getElementById('chucgiay').innerText = chucgiay
    document.getElementById('phut').innerText = phut
    document.getElementById('chucphut').innerText = chucphut
    document.getElementById('gio').innerText = gio
    document.getElementById('chucgio').innerText = chucgio
    document.getElementById('ngay').innerText = ngay
    document.getElementById('chucngay').innerText = chucngay



}





