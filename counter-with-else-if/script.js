let counter = 0;

        const btnOne = document.getElementById('increment');
        const btnTwo = document.getElementById('decrement');
        const btnThree = document.getElementById('reset');
        const paragraph = document.getElementById('para');
        const message = document.getElementById('message');
        const result = document.getElementById('status');

         function testLogic() {if(counter < 5){
            result.textContent = "Low value";
        }else if (counter >= 5 && counter <= 9){
            result.textContent = "Medium value";
        }else {
            result.textContent = "Maximum reached";
        }
        }

        function updateDisplay (){
            paragraph.textContent = counter;
            message.textContent = '';
            testLogic();
        }

        //if counter < 10, increment
        //else show message

        function incrementFunc() {
            if (counter < 10){
            counter++;
            // paragraph.textContent = counter;
            // message.textContent = '';
            updateDisplay();
            }else{
                message.textContent = "sorry max value is 10";
            }
            // testLogic();
        }

        //if counter > 0, dicrement
        //else show message

        function decrementFunc() {
            if (counter > 0){
            counter--;
            updateDisplay();
            // paragraph.textContent = counter;
            // message.textContent = '';
            }else{
                message.textContent = "sorry min value is 0";
            }
            // testLogic();
        }

        function resetFunc() {
            counter = 0;
            // paragraph.textContent = counter;
            // message.textContent = '';
            // testLogic();
            updateDisplay();
        }

        btnOne.addEventListener('click', incrementFunc);
        btnTwo.addEventListener('click', decrementFunc);
        btnThree.addEventListener('click', resetFunc);