const consoleLogBtn = document.querySelector('#consoleLog');
const alertBtn = document.querySelector("#alert");
const promptBtn = document.querySelector('#prompt');

consoleLogBtn.addEventListener('click', () => {
    console.log('Служит для вывода информации в консоль');

})

alertBtn.addEventListener('click', () => {
    alert('Служит для отображения всплывающего окна с сообщением');

})

promptBtn.addEventListener('click', () => {
    prompt('Служит для запроса информации у пользователя');
    
})

