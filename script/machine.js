function getInputValue(id) {
    const getInput = document.getElementById(id);
    const input = getInput.value;
    getInput.value = ""
    return input;
}

// Balance get
function getBalance () {
    const getBalance = document.getElementById("current-amount");
    const balance = getBalance.innerText;
    return balance
}

// Balance set 
function setBalance (value) {
    const getBalance = document.getElementById("current-amount");
    getBalance.innerText = value;

}

function showButton (id) {
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out")
    const transection = document.getElementById("transaction")
    const transfer = document.getElementById("transfer-money")
    const bonus = document.getElementById("bonus-coupon")
    const payBill = document.getElementById("pay-money")


    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden")
    transection.classList.add("hidden")
    transfer.classList.add("hidden")
    bonus.classList.add("hidden")
    payBill.classList.add("hidden")

    const select = document.getElementById(id);
    select.classList.remove("hidden")
}