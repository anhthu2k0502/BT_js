
function bai1() {
    document.getElementById('text').style.color = 'red'
    document.getElementById('text').style.fontSize = '50px'
}

function bai2() {
    let a = document.getElementById('w3r')
    let _id = a.getAttribute('id')
    let _type = a.getAttribute('type')
    let _hreflang = a.getAttribute('hreflang')
    let _rel = a.getAttribute('rel')
    let _target = a.getAttribute('target')
    let _href = a.getAttribute('href')
    let text = "thuộc tính của thẻ a: \nid: " + _id + "\n type: " + _type + "\n hreflang: " + _hreflang + "\n rel: " + _rel + "\n target: " + _target + "\n href: " + _href
    alert(text)
}

function bai3() {
    let table = document.getElementById('table1')
    let x = document.getElementsByTagName('tr')
    let row = table.insertRow(x.length++)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerHTML = 'text'
    cell2.innerHTML = 'text'

}

function bai4() {
    let a = document.getElementById('input').value
    let str = a.split('')
    document.getElementById('output').innerHTML = str.sort().join('')
}

function bai5() {
    let a = document.getElementById('input2').value
    let str = a.split(' ')
    var arr = []
    console.log(str)
    for (i = 0; i < str.length; i++) {
        var s = str[i]
        const [first, ...rest] = s;
        var result = [first.toUpperCase(), ...rest].join('');
        arr.push(result)
    }
    document.getElementById('output2').innerHTML = arr.join(' ')
}
