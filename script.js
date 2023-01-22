function updateAccount(id,inputAmount,operation) {
    if (isNaN(inputAmount)) {
        inputAmount = 0;
    }

    const current = parseFloat(document.getElementById(id).innerText);
    const total = inputAmount + current;
    document.getElementById(id).innerText = total;
    const mainBalance = parseFloat(document.getElementById("totalAmount").innerText);
    var newBalance = 0;
    if (operation == 1) {
        newBalance = mainBalance + inputAmount;
    } else {
        newBalance = mainBalance - inputAmount;
    }
    document.getElementById("totalAmount").innerText = newBalance;
}

//login button script
const loginBtn = document.getElementById("submit");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
})


//deposit button script
const depositButton = document.getElementById("deposit-btn");
depositButton.addEventListener("click", function(){
    var depositAmount = parseFloat(document.getElementById("depositAmount").value);
    updateAccount("currentDeposit",depositAmount,1);

    document.getElementById("depositAmount").value = "";
})

//withdraw button script
const withdrawButton = document.getElementById("withdraw-btn");
withdrawButton.addEventListener("click", function(){
    var withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    updateAccount("currentWithdraw",withdrawAmount,2);
    document.getElementById("withdrawAmount").value = "";
})