// window.alert("welcome");
let email = document.querySelector('#email')
let password = document.querySelector('#password')

let code = "";
const myform = document.querySelector('#loginform');
myform.addEventListener('submit', (x) => {
    x.preventDefault();
    console.log(myform);
    let sendForm = new FormData(myform);
    console.log(sendForm.get("fname"));
    fetch(`https://localhost:44319/api/User/Login`,
        {
            method: "POST",
            body: sendForm,
        })
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then(function (value) {
            console.log(value.success);
            if (value.success == true) {
                // localStorage.setItem('registrationid',value.data.id);
                // location.href = "vrification.html"
            }
            else {
                window.alert(value.message);
            }

        })
})


