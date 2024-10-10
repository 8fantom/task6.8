const firstLink = document.querySelector('#firstLink');
firstLink.addEventListener('click', function (event)  {
  this.textContent = prompt('Введите текст для изменения');
  event.preventDefault();
})
