document.getElementById("login-btn").addEventListener("click", function () {
    const inputNumber = document.getElementById("input-number");
    const number = inputNumber.value;

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;

    inputNumber.value = ''
    inputPin.value = ''

    if (number.toString().length === 11 && number.startsWith('01')) {
        alert("Log in success")
        window.location.assign("./home.html")
    }
    else {
        alert("log in failed")
    }
})

