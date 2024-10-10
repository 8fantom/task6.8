const form = document.querySelector('#form');
const input = document.querySelector('#input');


input.addEventListener('input', () => {
    duplicateField.textContent = input.value;
    sum.textContent = input.value;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(input.value);

    input.value = '';
    duplicateField.textContent = '';
});