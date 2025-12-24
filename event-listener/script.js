const button = document.getElementById('btn');
const paragraph = document.getElementById('para');

function eventFunc() {
    paragraph.textContent = 'I respect CHATGPT';
}

button.addEventListener('click', eventFunc);