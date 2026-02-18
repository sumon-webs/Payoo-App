document.getElementById("transfer").addEventListener("click", function () {
    const transferNumber = getInputValue("transfer-number");
    if (transferNumber.toString().length < 11) {
        alert("Invalid account NO:")
        return
    }
    const transferAmount = getInputValue("transfer-amount");

    const totalBalance = getBalance()

    const remainingBalance = Number(totalBalance) - Number(transferAmount)
    if(remainingBalance < 0) {
        alert("Invalid Balance")
        return;
    }

    const pin = getInputValue("transfer-pin");
    if (pin === "1234") {
        alert("Transfer successful")
        setBalance(remainingBalance)
        const transection = document.getElementById("transection-id");

        const newElement = document.createElement("p")

        newElement.innerHTML = `<div id="transection-id" class="bg-base-100 p-2 rounded-[9px] space-y-10">
            Transfer Money successful to ${transferNumber}. AC No: ${transferAmount}. At ${new Date} 
        </div>`

        transection.append(newElement)
    }
})