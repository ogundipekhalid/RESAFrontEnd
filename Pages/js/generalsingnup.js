// // window.alert("welcome");
// let password = document.querySelector('#password')
// let error = document.querySelector('#error-message')

// const myform = document.querySelector('#complete-registration-form');
// myform.addEventListener('submit', (x) => {
//     x.preventDefault();
//     console.log(myform);
//     // let Token = localStorage.getItem("token");
//     // console.log(Token);
//     let sendForm = new FormData(myform);
//     console.log(sendForm.get("fname"));
//     fetch(`https://localhost:44319/api/Customer/RegisterCustomer`,
//         {
//             method: "POST",
//             body: sendForm,
//         })
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             console.log(res);
//             return res.json();
//         })
//         .then(function (value) {
//             console.log(value.success);
//             if (value.success == true) {
//                 // localStorage.setItem('registrationid',value.data.id);
//                 // location.href = "vrification.html"
//             }
//             else {
//                 window.alert(value.message);
//             }

//         })
       

// })

// let checkingForPassword = (confirmpassword) => {
//     if (confirmpassword != password.value) {
//         error.innerText = "Password not match"
//     }
//     else {
//         error.innerText = ""
//     }
// }



let password = document.querySelector('#password');
let error = document.querySelector('#error-message');

const myform = document.querySelector('#Signup-form');
myform.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    let sendForm = new FormData(myform); // Create a FormData object from the form
    console.log(sendForm.get("username"));
    // Fetch API request to your endpoint
       fetch('https://localhost:44319/api/Customer/RegisterCustomer', {
        method: "POST",
        body: sendForm, // Pass the FormData object as the body
        // headers: {
        //     "Content-Type": "application/json",
        //   },
          
    })
    .then((response) => {
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
        console.log(data);
        if (data.success) {
            // localStorage.setItem('registrationId', data.data.id);
            // window.location.href = "verification.html";
        } else {
            // Handle error case, show message to the user
            window.alert(data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle any fetch errors here
    });
});

// Function to check if the confirm password matches the password
let checkingForPassword = (confirmPassword) => {
    if (confirmPassword !== password.value) {
        error.innerText = "Passwords do not match";
    } else {
        error.innerText = "";
    }
};
