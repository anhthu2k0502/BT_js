
const array = [];
var miligiay

const x = document.querySelectorAll(".btn");

console.log("chieu dai: " + x.length)

x.forEach(myFunction)

function myFunction(item, index) {
    item.onclick = function () {
        array.push(index)
    }

}





/* document.getElementById('1').onclick = click
document.getElementById('2').onclick = click
document.getElementById('3').onclick = click
document.getElementById('4').onclick = click
document.getElementById('5').onclick = click
document.getElementById('6').onclick = click
document.getElementById('7').onclick = click
document.getElementById('8').onclick = click
document.getElementById('9').onclick = click */





