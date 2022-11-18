const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
});

const alertMessage =  document.querySelector('#alert');

alertMessage.addEventListener('click', () => {
    alert('Функция для вывода сообщения в диалоговом окне');
});

const promptMessage = document.querySelector('#prompt');

promptMessage.addEventListener('click', () => {
    prompt('Функция для ввода сообщения в диалоговое окно');
});