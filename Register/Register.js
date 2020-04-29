
function insertLogged(name, email) {
    fetch('https://young-thicket-65183.herokuapp.com/logged', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: name,
        email: email
    })
}) .then(response => response.json())
    
}

onSubmitRegister = () => {
let name = document.querySelector('.name').value;
let email = document.querySelector('.email').value;
let password = document.querySelector('.password').value;

    console.log(name);
    console.log(email);
    console.log(password);
    if (name && email && password) {
    fetch('https://young-thicket-65183.herokuapp.com/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password,
            name: name
        })
    }).then(response => response.json())
      .then(user => {
          if (user.id) {
            insertLogged(user.name, user.email);
            // location.href = "https://www.w3schools.com";
          } else {
              alert('This email or name alredy in use');
          }
      })
    } else {
        alert('Ops! some information is missing');
    }
}

document.querySelector('.send').addEventListener('click', onSubmitRegister);