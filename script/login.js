document.getElementById("login-btn").addEventListener("click", function () {
    const inputNumber = document.getElementById("input-number");
    const number = inputNumber.value;
    console.log(number.startsWith("01"));
    if(number.startsWith('01') === false){
        alert("Number must start with 01")
        return
    }

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;

    inputNumber.value = ''
    inputPin.value = ''

    if (number.toString().length === 11) {
        alert("Log in success")
        window.location.assign("./home.html")
    }
    else {
        alert("log in failed")
    }
})

