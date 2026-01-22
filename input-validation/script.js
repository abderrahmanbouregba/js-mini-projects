
const message = document.getElementById('message');
const userInput = document.getElementById('userInput');
const validate = document.getElementById('validate');

function checkUserInput(){
    //checking type of user input
    if(userInput.value.trim() === ''){
        message.textContent = 'please enter your age';
    }else if(isNaN(userInput.value)){
        message.textContent = 'please type your age in number';
        userInput.value = '';
    }else{
        const age = Number(userInput.value);
        userInput.value = '';

        //checking age of user input
        if (age < 18){
            message.textContent = 'you are under 18';
        }else if (age >= 18){
            message.textContent = 'you are an adult';
        }
    }
}

userInput.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter'){
        checkUserInput();
    }
})

validate.addEventListener('click', checkUserInput);