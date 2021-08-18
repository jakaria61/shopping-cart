document.getElementById('phone-plus').addEventListener('click', function () {

    getUpdate('plus', 'phone-number', 'phone-total', 1219);
    calculate();


})
document.getElementById('phone-minus').addEventListener('click', function () {

    getUpdate('minus', 'phone-number', 'phone-total', 1219);
    calculate();


})
document.getElementById('case-plus').addEventListener('click', function () {
    getUpdate('plus', 'input-number', 'case-total', 59);
    total('input-number', 59);
    calculate();
})
document.getElementById('case-minus').addEventListener('click', function () {
    getUpdate('minus', 'input-number', 'case-total', 59);
    total('input-number', 59);
    calculate();
})
function getUpdate(type, product, productTotal, price) {
    const inputValue = document.getElementById(product);
    const inputNumber = inputValue.value;
    if (type == 'plus') {
        inputValue.value = parseInt(inputNumber) + 1;
    }
    else if (inputValue.value > 0) {
        inputValue.value = parseInt(inputNumber) - 1;
    }

    const totalBalance = document.getElementById(productTotal);
    const total = inputValue.value * price;
    totalBalance.innerText = total;
}

function total(product, price) {
    const inputValue = document.getElementById(product);
    const inputNumber = inputValue.value;
    let total = inputNumber * price;
    return total;
}
function getInputValue(product) {
    const phoneInput = document.getElementById(product);
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculate() {
    const phoneTotal = getInputValue('phone-number') * 1219;
    const caseTotal = getInputValue('input-number') * 59;
    let subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}



