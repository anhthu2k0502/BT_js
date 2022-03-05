
var phut = 0
var giay = 0
var miligiay = 0
var interval


function Start() {
    clearInterval(interval)
    interval = setInterval(startTime, 10)
}

function Stop() {
    clearInterval(interval)
}

function Reset() {
    document.getElementById('milliseconds').innerHTML = '00'
    document.getElementById('seconds').innerHTML = '00'
    document.getElementById('minutes').innerHTML = '00'

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