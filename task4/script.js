document.querySelector('#textLink').addEventListener('click', function (event) {
    this.textContent = prompt('Введите новый текст для ссылки');       
    event.preventDefault();    
})
