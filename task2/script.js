document.querySelector('#consoleLog').addEventListener('click', 
    function () {
        console.log('Пример использования команды console.log');
    }
)
document.querySelector('#alert').addEventListener('click', 
    function () {
        alert('Пример использования команды alert');
    }
)
document.querySelector('#prompt').addEventListener('click', 
    function () {
        prompt('Пример использования команды prompt', 'Пример использования команды prompt');
    }
)