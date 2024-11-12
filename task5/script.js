const textInput = document.querySelector('#textInput');
const duplicateField = document.querySelector('#duplicateField');
const submitBtn = document.querySelector('#submitBtn');

textInput.addEventListener('input', () =>{
    duplicateField.textContent = textInput.value;

});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(textInput.value);

    textInput.value = " ";
    duplicateField.textContent = " ";

});

