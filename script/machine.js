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


    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden")
    transection.classList.add("hidden")

    const select = document.getElementById(id);
    select.classList.remove("hidden")
}