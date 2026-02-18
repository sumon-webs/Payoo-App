document.getElementById("pay-btn").addEventListener("click", function () {
    const selectBookInput = document.getElementById("select-bock")
    const selectBook = selectBookInput.value;
    if (selectBook === 'Select bock') {
        alert('Pleas select a bock method')
    }

    const payAccount = getInputValue('pay-number');
    if (payAccount.toString().length < 11) {
        alert('Invalid Account Number')
    }

    const payAmount = getInputValue("pay-amount");

    const mainBalance = getBalance();

    const balance = Number(mainBalance) - Number(payAmount)
    if(balance < 0) {
        alert("Invalid Amount")
        return;
    }

    const pin = getInputValue("pay-pin");

    if (pin === "1234") {
        alert("Bill pay successful")
        setBalance(balance)
        const transection = document.getElementById("transection-id");

        const newElement = document.createElement("p")

        newElement.innerHTML = `<div id="transection-id" class="bg-base-100 p-2 rounded-[9px] space-y-10">
            Pay bill successful for ${selectBook}. Amount ${payAmount} from ${payAccount}. At ${new Date} 
        </div>`
        transection.append(newElement)
    }
    else {
        alert("Invalid pin")
    }
})