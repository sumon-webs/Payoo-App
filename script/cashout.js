// document.getElementById("whithdraw-btn").addEventListener("click", function () {
//     const cashOutInput = document.getElementById("cashout-number");
//     let cashOutNumber = cashOutInput.value;
//     cashOutInput.value = ""
//     if (
//         typeof cashOutNumber !== "string" ||
//         cashOutNumber.length !== 11 ||
//         isNaN(cashOutNumber)
//     ) {
//         alert("Invalid Number");
//         return;
//     }


//     const cashOutAmountInput = document.getElementById("cashout-amount");
//     let cashOutAmount = cashOutAmountInput.value;
//     cashOutAmountInput.value = ""

//     const cashOutPinInput = document.getElementById("cashout-pin");
//     const cashOutPin = cashOutPinInput.value;
//     cashOutPinInput.value = ""

//     const currentBalance = document.getElementById("current-amount");
//     let remainingBalance = currentBalance.innerText;
//     const totalBalance = Number(remainingBalance) - Number(cashOutAmount);

//     if (totalBalance < 0) {
//         alert("Invalid amount");
//         return;
//     }

//     if (cashOutPin === "1234") {
//         alert("Cash Out successful")
//         currentBalance.innerText = totalBalance;
//     }
//     else {
//         alert("Invalid pin")
//     }

// })

document.getElementById("whithdraw-btn").addEventListener("click", function () {
    // Get input cashOut Number
    const cashOutNumber = getInputValue("cashout-number");
    console.log(cashOutNumber);
    if (cashOutNumber.length !== 11 || typeof cashOutNumber !== "string" || isNaN(cashOutNumber)) {
        alert("Invalid Number");
        return;
    }


    // Get input cashOut Amount
    const cashOutAmount = getInputValue("cashout-amount")
    console.log(cashOutAmount);

    // Get Reserve amount
    const remainingBalance = getBalance ();
    const totalBalance = remainingBalance - Number(cashOutAmount);
    console.log(totalBalance);
    if (totalBalance < 0) {
        alert("Invalid balance")
        return;
    }

    // Get pin
    const pin = getInputValue("cashout-pin");
    console.log(pin);
    if (pin === "1234") {
        alert('Cash Out successful')
        setBalance(totalBalance)
    }
    else {
        alert("Invalid pin")
        return;
    }
})