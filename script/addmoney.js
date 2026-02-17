document.getElementById("add-money-btn").addEventListener("click", function () {
    // Bank name get
    const bankNameInput = document.getElementById("bank-select");
    const bankName = bankNameInput.value;
    console.log(bankName);
    if (bankName === "Select bank") {
        alert("Select a bank")
        return
    }

    // Bank account Number
    const bankNumber = getInputValue("bank-number");
    const bankNumberLength = bankNumber.toString().length;
    console.log(bankNumber);
    if (bankNumberLength !== 11) {
        alert("Invalid account number")
        return
    }

    // Get amount to withdraw
    const getAmount = getInputValue("add-money-amount");
    if (getAmount === "") {
        alert("Enter any amount")
        return
    }

    // Get main balance
    const mainBalance = getBalance();
    console.log(mainBalance);

    // total balance
    const totalBalance = Number(mainBalance) + Number(getAmount);

    // get pin
    const pin = getInputValue("add-money-pin");
    if (pin === "1234") {
        alert("Add money successful")
        setBalance(totalBalance)
        
        const transection = document.getElementById("transection-id");

        const newElement = document.createElement("p")

        newElement.innerHTML = `Add Money Successful from ${bankName}. Account number: ${bankNumber}, at ${new Date} `

        transection.append(newElement)
    } else {
        alert("Invalid pin")
        return
    }
})