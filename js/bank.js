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
}



// Deposit users money

document.getElementById('deposit-button').addEventListener('click',function(){
    // // get deposit amount
    // const depositField = document.getElementById('deposit-input');
    // const depositInput = depositField.value;
    // const depositAmount = parseFloat(depositInput);
    const depositAmount = getInput('deposit-input');

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
    // depositField.value = '';
});

// withdraw users money
document.getElementById('withdraw-button').addEventListener('click',function(){
    
    // get withdraw amount 
    // const withdrawField = document.getElementById('withdraw-input');
    // const withdrawInput = withdrawField.value;
    const withdrawAmount = getInput('withdraw-input');
    
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