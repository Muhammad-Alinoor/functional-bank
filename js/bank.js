// functional way to do the banking
// using DRY system = don't repeat yourself

// get input value
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const fieldValue = inputField.value;
    const insertedAmount = parseFloat(fieldValue);

    // reset the deposit input field value
    inputField.value = '';

    return insertedAmount;
};
// update value of deposit and withdraw displaying field 
function updateDepositWithdrawDisplay(totalId,amountToBeAdded){
    // displayed deposit amount
    const totalDisplayField = document.getElementById(totalId);
    const totalDisplayInText = totalDisplayField.innerText;
    const totalDisplayingAmount = parseFloat(totalDisplayInText);
    
    // set deposit value to the deposit display
    totalDisplayField.innerText = amountToBeAdded + totalDisplayingAmount;
}

// update value of balance displaying field
function updateBalance(amount,isAdd){
    // get the displayed balance
    const balanceDisplayingField = document.getElementById("current-total");
    const balanceDisplayingText = balanceDisplayingField.innerText;
    const balanceDisplayingAmount = parseFloat(balanceDisplayingText);
    
    // set the update balance to the balanceDisplayingfield 
    if(isAdd == true){
        balanceDisplayingField.innerText = balanceDisplayingAmount + amount;
    }
    else{
        balanceDisplayingField.innerText = balanceDisplayingAmount -amount; 
    }
}



// Deposit users money

document.getElementById('deposit-button').addEventListener('click',function(){
    // // get deposit amount
    // const depositField = document.getElementById('deposit-input');
    // const depositInput = depositField.value;
    // const depositAmount = parseFloat(depositInput);
    const depositAmount = getInput('deposit-input');
    /*

    // displayed deposit amount
    const depositDisplayField = document.getElementById('deposit-total');
    const depositDisplaysInText = depositDisplayField.innerText;
    const depositDisplayingAmount = parseFloat(depositDisplaysInText);
    
    // set deposit value to the deposit display
    depositDisplayField.innerText = depositAmount + depositDisplayingAmount;
    
    */
   updateDepositWithdrawDisplay('deposit-total',depositAmount);

    /* // get the displayed balance
    const balanceDisplayingField = document.getElementById("current-total");
    const balanceDisplayingText = balanceDisplayingField.innerText;
    const balanceDisplayingAmount = parseFloat(balanceDisplayingText);
    
    // set the update balance to the balanceDisplayingfield 
    balanceDisplayingField.innerText = balanceDisplayingAmount + depositAmount; */

    // reset the deposit input field value
    // depositField.value = '';
    updateBalance(depositAmount,true);
});

// withdraw users money
document.getElementById('withdraw-button').addEventListener('click',function(){
    
    // get withdraw amount 
    // const withdrawField = document.getElementById('withdraw-input');
    // const withdrawInput = withdrawField.value;
    const withdrawAmount = getInput('withdraw-input');
    /* 
    // display withdraw amount 
    const withdrawAmountDisplayingField = document.getElementById('withdraw-total');
    const withdrawAmountDisplayedInText = withdrawAmountDisplayingField.innerText;
    const withdrawDisplayingAmount = parseFloat(withdrawAmountDisplayedInText);

    // set withdraw amount to the withdraw display
    withdrawAmountDisplayingField.innerText = withdrawAmount + withdrawDisplayingAmount; */
    updateDepositWithdrawDisplay('withdraw-total',withdrawAmount);

    /*  // get the displayed balance
     const balanceDisplayingField = document.getElementById("current-total");
     const balanceDisplayingText = balanceDisplayingField.innerText;
     const balanceDisplayingAmount = parseFloat(balanceDisplayingText);

    // set the update balance to the balanceDisplayingfield 
    balanceDisplayingField.innerText = balanceDisplayingAmount -withdrawAmount;

    // reset the deposit input field value
    withdrawField.value = ''; */
    updateBalance(withdrawAmount,false);

})
