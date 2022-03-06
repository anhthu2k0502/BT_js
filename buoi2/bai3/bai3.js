getUser('https://randomuser.me/api/')

async function getUser(file) {
    let response = await fetch(file)
    let User = await response.json()
    let getInfor = User.results[0]
    console.log(getInfor)
    document.getElementById('name').innerHTML = ` ${getInfor.name.title} ${getInfor.name.first} ${getInfor.name.last}`
    document.getElementById('email').innerHTML = getInfor.email
    document.getElementById('birth').innerHTML = getInfor.dob.date
    document.getElementById('addr').innerHTML = `${getInfor.location.street.number} ${getInfor.location.street.name} ${getInfor.location.city} ${getInfor.location.state} ${getInfor.location.country}`
    document.getElementById('tel').innerHTML = getInfor.phone
}