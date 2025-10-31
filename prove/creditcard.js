const submitButton = document.getElementById('submitButton');
const msgBox = document.getElementById('messageBox');
const msgContent = document.getElementById('messageContent');

const inputCardNumber = document.getElementById('inputCardNumber');
const inputCardName = document.getElementById('inputCardName');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const inputCVV = document.getElementById('inputCVV');

const cardNumFeedback = document.getElementById('cardNumFeedback');
const expFeedback = document.getElementById('expFeedback');

function closeMessageBox() {
    msgBox.classList.add('hidden');
}

function showFeedback(title, message, isSuccess) {
    msgContent.innerHTML = `
        <div class="${isSuccess ? 'success-icon' : 'error-icon'}">
            ${isSuccess ? '✅' : '❌'}
        </div>
        <h3>${title}</h3>
        <p>${message}</p>
        <button onclick="closeMessageBox()">Close</button>
    `;
    msgBox.classList.remove('hidden');
}

function validateCardNumber(number) {
    return number.length === 16;
}

function validateExpiration(month, year) {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (month < 1 || month > 12) {
        return false;
    }

    if (year < currentYear || year > currentYear + 10) {
        return false;
    }


    if (year > currentYear) {
        return true;
    }

    if (year === currentYear) {
        return month >= currentMonth;
    }
    
    return false;
}

function validateForm() {
    let isValid = true;
    
    cardNumFeedback.classList.add('hidden');
    expFeedback.classList.add('hidden');

    const cardNumber = inputCardNumber.value.replace(/\s/g, '');
    const expMonth = parseInt(inputMonth.value, 10);
    const expYear = parseInt(inputYear.value, 10);
    const cvv = inputCVV.value;

    if (!validateCardNumber(cardNumber)) {
        cardNumFeedback.classList.remove('hidden');
        isValid = false;
    }

    if (isNaN(expMonth) || isNaN(expYear) || !validateExpiration(expMonth, expYear)) {
        expFeedback.classList.remove('hidden');
        isValid = false;
    }
    
    if (!/^\d{3,4}$/.test(cvv)) {
        isValid = false; 
    }

    if (inputCardName.value.trim() === '') {
        isValid = false;
    }

    return isValid;
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (validateForm()) {
        showFeedback(
            "Payment Successful!",
            "The card was successfully validated and is not expired. Thank you for your purchase!",
            true
        );
    } else {
        showFeedback(
            "Payment Failed",
            "Please check the fields in red. The credit card number or expiration date is invalid.",
            false
        );
    }
});

inputCardNumber.addEventListener('input', function(e) {
    let target = e.target;
    let value = target.value.replace(/\D/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
    target.value = formattedValue;
});
