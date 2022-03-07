
var phut = 0
var giay = 0
var miligiay = 0
var interval

var pause = true
var func = document.getElementById('start')

func.addEventListener('click', function () {
    pause = !pause
    if (pause == false) {
        interval = setInterval(startTime, 10)
        func.innerText = 'Pause'
    }
    else {
        clearInterval(interval)
        func.innerText = 'Continute'
    }
})

document.getElementById('reset').addEventListener('click', Reset)

function Reset() {
    clearInterval(interval)
    phut = 0
    giay = 0
    miligiay = 0
    pause = true
    func.innerText = 'Start'
    document.getElementById('milliseconds').innerHTML = '0' + miligiay
    document.getElementById('seconds').innerHTML = '0' + giay
    document.getElementById('minutes').innerHTML = '0' + phut

}



function startTime() {
    miligiay++

    if (miligiay <= 9) {
        document.getElementById('milliseconds').innerHTML = '0' + miligiay
    }

    if (miligiay > 9) {
        document.getElementById('milliseconds').innerHTML = miligiay
    }

    if (miligiay > 99) {
        giay++
        miligiay = 0
        if (giay <= 9) {
            document.getElementById('seconds').innerHTML = '0' + giay
        }
        if (giay > 9) {
            document.getElementById('seconds').innerHTML = giay
        }
        if (giay == 60) {
            document.getElementById('seconds').innerHTML = '00'
        }

    }
    if (giay > 59) {

        giay = 0
        phut++
        if (phut <= 9) {
            document.getElementById('minutes').innerHTML = '0' + phut
        }
        if (phut > 9) {
            document.getElementById('minutes').innerHTML = phut
        }

    }

}