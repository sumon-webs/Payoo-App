document.getElementById('bonus-btn').addEventListener("click", function () {
    const bonus = getInputValue("bonus-balance");

    const totalBalance = getBalance();

    const remainingBalance = Number(totalBalance) + Number(bonus)

    setBalance(remainingBalance)


    const transection = document.getElementById("transection-id");

    const newElement = document.createElement("p")
    alert('Bonus add successful')

    newElement.innerHTML = `<div id="transection-id" class="bg-base-100 p-2 rounded-[9px] space-y-10">
            Bonus add successful. Amount${bonus}. At ${new Date} 
        </div>`

    transection.append(newElement)

})