function getInputValueById(inputId){
    const input = document.getElementById(inputId);
    const inputValue = parseInt(input.value);
    input.value = '';
    return inputValue;
}

function setTextValueById(setTextId,value){
    const text = document.getElementById(setTextId);
    text.innerText = value;
}

function getTextValueById (textId){
    const text = document.getElementById(textId).innerText;
    const textValue = parseFloat(text);
    return textValue;
}



