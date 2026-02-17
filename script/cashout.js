document.getElementById("whithdraw-btn").addEventListener("click", function () {
    const cashOutInput = document.getElementById("cashout-number");
    let cashOutNumber = cashOutInput.value;
    cashOutInput.value = ""
    if (
        typeof cashOutNumber !== "string" ||
        cashOutNumber.length !== 11 ||
        isNaN(cashOutNumber)
    ) {
        alert("Invalid Number");
        return;
    }


    const cashOutAmountInput = document.getElementById("cashout-amount");
    let cashOutAmount = cashOutAmountInput.value;
    cashOutAmountInput.value = ""

    const cashOutPinInput = document.getElementById("cashout-pin");
    const cashOutPin = cashOutPinInput.value;
    cashOutPinInput.value = ""

    const currentBalance = document.getElementById("current-amount");
    let remainingBalance = currentBalance.innerText;
    const totalBalance = remainingBalance - cashOutAmount;



    if (totalBalance < 0) {
        alert("Invalid amount");
        return;
    }

    if (cashOutPin === "1234") {
        currentBalance.innerText = totalBalance;
    }
    else {
        alert("Invalid pin")
    }

})