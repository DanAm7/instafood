
let email = document.getElementsByClassName('email')[0].value;
let password = document.querySelector('.password').value;
const send = document.querySelector('.send');

function insertLogged(name, email) {
    fetch('https://young-thicket-65183.herokuapp.com/logged', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: name,
        email: email
    })
}) .then(response => response.json())
    .then(response => alert(response))
}



onSubmitSignIn = () => {
let email = document.getElementsByClassName('email')[0].value;
let password = document.querySelector('.password').value;
if (email && password) {
// eslint-disable-next-line
console.log(email);
console.log(password);
fetch('https://young-thicket-65183.herokuapp.com/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: email,
        password: password
    })
}) .then(response => response.json())
.then(user => {
    if (user.id) {
        insertLogged(user.name, user.email);
      // location.href = "https://www.w3schools.com";
        } else {
            alert('Wrong email or password');
        }
    })
} 
}

document.querySelector(".send").addEventListener('click', this.onSubmitSignIn);


