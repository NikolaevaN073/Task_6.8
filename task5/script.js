const userText = document.querySelector('#userText');
const dupleText = document.querySelector('#duplicateField');

userText.addEventListener('input', (event) => {
    dupleText.textContent = event.target.value;         
})

document.querySelector('#form').addEventListener('submit', (event) => {    
    console.log(form.elements.userText.value);
    form.elements.userText.value = '';
    dupleText.textContent = '';
    event.preventDefault();
})