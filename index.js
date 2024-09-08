// Variables
const modalBlock = document.querySelector('.modal-block');

const inputGosNumber = document.getElementById('input-gosNumber');
const inputDate = document.getElementById('input-date');
const inputSeriesPassport = document.getElementById('input-passportSeries');
const inputNumberPassport = document.getElementById('input-passportNumber');
const inputTs = document.getElementById('input-ts');
const inputFullName = document.getElementById('input-fullName');
const inputWhoTake = document.getElementById('input-whoTake');
const inputWhenTake = document.getElementById('input-whenTake');

const submitBtn = document.getElementById('submit-btn');

// Toggle Visible Form
const MakeVisible = () => {
    modalBlock.classList.add('is-visible');
}

const MakeHidden = () => {
    modalBlock.classList.remove('is-visible');
}

// Load Data from localStorage
const loadFormData = () => {
    const gosNumber = localStorage.getItem('gosNumber');
    const date = localStorage.getItem('date');
    const passportSeries = localStorage.getItem('passportSeries');
    const passportNumber = localStorage.getItem('passportNumber');
    const nameTs = localStorage.getItem('nameTs');
    const fullName = localStorage.getItem('fullName');
    const whoTake = localStorage.getItem('whoTake');
    const whenTake = localStorage.getItem('whenTake');

    console.log('Loaded data from localStorage', {
        gosNumber,
        date,
        passportSeries,
        passportNumber,
        nameTs,
        fullName,
        whoTake,
        whenTake
    });

    if (gosNumber) inputGosNumber.value = gosNumber;
    if (date) inputDate.value = date;
    if (passportSeries) inputSeriesPassport.value = passportSeries;
    if (passportNumber) inputNumberPassport.value = passportNumber;
    if (nameTs) inputTs.value = nameTs;
    if (fullName) inputFullName.value = fullName;
    if (whoTake) inputWhoTake.value = whoTake;
    if (whenTake) inputWhenTake.value = whenTake;
}

// Save Data to localStorage
const saveFormData = () => {
    console.log('Saving data to localStorage', {
        gosNumber: inputGosNumber.value,
        date: inputDate.value,
        passportSeries: inputSeriesPassport.value,
        passportNumber: inputNumberPassport.value,
        nameTs: inputTs.value,
        fullName: inputFullName.value,
        whoTake: inputWhoTake.value,
        whenTake: inputWhenTake.value
    });
    localStorage.setItem('gosNumber', inputGosNumber.value);
    localStorage.setItem('date', inputDate.value);
    localStorage.setItem('passportSeries', inputSeriesPassport.value);
    localStorage.setItem('passportNumber', inputNumberPassport.value);
    localStorage.setItem('nameTs', inputTs.value);
    localStorage.setItem('fullName', inputFullName.value);
    localStorage.setItem('whoTake', inputWhoTake.value);
    localStorage.setItem('whenTake', inputWhenTake.value);
}

// Validate Inputs
const validateGosNumber = (arg) => /^[АВЕКМНОРСТУХ]{1}[0-9]{3}[АВЕКМНОРСТУХ]{2}[0-9]{2,3}$/i.test(arg);
const validateDate = (arg) => /^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i.test(arg);
const validateSeriesPassport = (arg) => /^([0-9]{2}\s{1}[0-9]{2})$/.test(arg);
const validateNumberPassport = (arg) => /^([0-9]{6})$/.test(arg);

//Logic Submit Button
submitBtn.addEventListener("click", () => {
    const gosNumber = inputGosNumber.value;
    const date = inputDate.value;
    const passportSeries = inputSeriesPassport.value;
    const passportNumber = inputNumberPassport.value;

    const isGosNumberValid = validateGosNumber(gosNumber);
    const isDateValid = validateDate(date);
    const isSeriesValid = validateSeriesPassport(passportSeries);
    const isNumberValid = validateNumberPassport(passportNumber);

    alert(isGosNumberValid ? "Госномер валиден" : "Госномер не валиден");
    alert(isDateValid ? "Дата валидна" : "Дата не валидна");
    alert(isSeriesValid ? "Серия валидна" : "Серия не валидна");
    alert(isNumberValid ? "Номер валиден" : "Номер не валиден");

    if (isGosNumberValid && isDateValid && isSeriesValid && isNumberValid) {
        saveFormData();
    }
});

// Load data on page load
window.addEventListener('load', loadFormData);