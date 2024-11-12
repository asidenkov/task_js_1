const link = document.querySelector('#textLink');

link.addEventListener('click', (event) => {
    event.preventDefault();

    const userInput = prompt('Введите новый текст для ссылки:');

    link.textContent = userInput;
})

