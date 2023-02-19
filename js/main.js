document.getElementById('btn-calculate').addEventListener('click', function(){

    const income = getInputValueById('income-input');

    const foodCost = getInputValueById('food-input');
    // console.log(income, foodCost)
    const rentCost = getInputValueById('rent-input');
    const clothesConst = getInputValueById('clothes-input');

    if(isNaN(income && foodCost && rentCost && clothesConst)){
        return alert('please input Number');
    }
    const totalExpenses = foodCost + rentCost + clothesConst;

    if(income < totalExpenses){
        return alert('please input heigh income by total')
    }

    setTextValueById('total-expense', totalExpenses);

    setTextValueById('balance', income);
    



})

document.getElementById('btn-save').addEventListener('click', function(){
   
    const balance = getTextValueById('balance');
    // console.log(balance);

    const totalExpense = getTextValueById('total-expense');

    const remainingValue = balance - totalExpense;

    const savingInputValue = getInputValueById('save-field');


    // console.log(saveInputValue);

    const parsentValue = (savingInputValue / 100) * balance;
    // console.log(parsentValue);

    if(remainingValue < parsentValue){
        return alert('You cant same mony more expence');
    }
    
    setTextValueById('saving-amount', parsentValue);


    const remainingBalance = balance - (totalExpense + savingInputValue);


    setTextValueById('remaining-balance', remainingBalance);
    


})