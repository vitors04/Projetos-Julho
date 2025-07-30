const value = document.querySelector('#value');

function onIncrement(){
    value.innerText = `${parseInt(value.innerText) + 1}`;
}

function onDecrement(){
    value.innerText = `${parseInt(value.innerText) - 1}`;
}