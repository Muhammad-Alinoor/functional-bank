
// Deposit users money

document.getElementById('deposit-button').addEventListener('click',function(){
    // get deposit amount
    const depositField = document.getElementById('deposit-input');
    const depositInput = depositField.value;
    const depositAmount = parseFloat(depositInput);

    // displayed deposit amount
    const depositDisplayField = document.getElementById('deposit-total');
    const depositDisplaysInText = depositDisplayField.innerText;
    const depositDisplayingAmount = parseFloat(depositDisplaysInText);
    
    // set deposit value to the deposit display
    depositDisplayField.innerText = depositAmount + depositDisplayingAmount;

    // get the displayed balance
    const balanceDisplayingField = document.getElementById("current-total");
    const balanceDisplayingText = balanceDisplayingField.innerText;
    const balanceDisplayingAmount = parseFloat(balanceDisplayingText);
    
    // set the update balance to the balanceDisplayingfield 
    balanceDisplayingField.innerText = balanceDisplayingAmount + depositAmount;

    // reset the deposit input field value
    depositField.value = '';
});

// withdraw users money
document.getElementById('withdraw-button').addEventListener('click',function(){
    
    // get withdraw amount 
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawInput = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawInput);
    
    // display withdraw amount 
    const withdrawAmountDisplayingField = document.getElementById('withdraw-total');
    const withdrawAmountDisplayedInText = withdrawAmountDisplayingField.innerText;
    const withdrawDisplayingAmount = parseFloat(withdrawAmountDisplayedInText);

    // set withdraw amount to the withdraw display
    withdrawAmountDisplayingField.innerText = withdrawAmount + withdrawDisplayingAmount;

     // get the displayed balance
     const balanceDisplayingField = document.getElementById("current-total");
     const balanceDisplayingText = balanceDisplayingField.innerText;
     const balanceDisplayingAmount = parseFloat(balanceDisplayingText);

    // set the update balance to the balanceDisplayingfield 
    balanceDisplayingField.innerText = balanceDisplayingAmount -withdrawAmount;

    // reset the deposit input field value
    withdrawField.value = '';

})