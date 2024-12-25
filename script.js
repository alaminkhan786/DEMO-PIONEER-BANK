const submitBtn = document.getElementById('button');
const firstContainer = document.getElementById('firstContainer');
const secondContainer = document.getElementById('secondContainer');

const depositBtn = document.getElementById('depositBtn');
const totalDepositAmount = document.getElementById('totalDepositAmount');
const depositAmount = document.getElementById('depositAmount');
const totalBalance = document.getElementById('totalBalance');

const withdrawBtn = document.getElementById('withdrawBtn');
const withdrawAmount = document.getElementById('withdrawAmount');
const totalWithdrawAmount = document.getElementById('totalWithdrawAmount');

submitBtn.addEventListener('click', function(){
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'block';
})

function errorHandle(id){
    const amountError = document.getElementById(id);
    amountError.innerText = 'Please enter a valid amount';
}

depositBtn.addEventListener('click', function(){
    const currentDeposit = parseFloat(depositAmount.value);

    if (isNaN(currentDeposit) || currentDeposit < 0) {
        errorHandle('depositError');
        depositAmount.value = '';
        depositAmount.focus();
    }
    else{
        const previousDepositAmount = parseFloat(totalDepositAmount.innerText);
        totalDepositAmount.innerText = currentDeposit + previousDepositAmount;
        depositAmount.value = '';

        const currentBalance = parseFloat(totalBalance.innerText);
        totalBalance.innerText = currentBalance + currentDeposit;
        depositError.innerText = '';

    }
})

depositAmount.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        depositBtn.click();
    };
})

withdrawBtn.addEventListener('click', function(){
    const currentWithdraw = parseFloat(withdrawAmount.value);
    const currentBalance = parseFloat(totalBalance.innerText);
    
    if(isNaN(currentWithdraw) || currentWithdraw < 0){
        errorHandle('withdrawError');
        withdrawAmount.value = '';
        withdrawAmount.focus();
    }
    else{

        if(currentWithdraw > currentBalance){
            alert('Insufficient Balance');
            withdrawAmount.value = '';
            withdrawAmount.focus();
        }
        else{
            const previousWIthdrawAmount = parseFloat(totalWithdrawAmount.innerText);
            totalWithdrawAmount.innerText = currentWithdraw + previousWIthdrawAmount;
            withdrawAmount.value = '';

            totalBalance.innerText = currentBalance - currentWithdraw;
            withdrawError.innerText = '';
        }
    }
})

withdrawAmount.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        withdrawBtn.click();
    };
})