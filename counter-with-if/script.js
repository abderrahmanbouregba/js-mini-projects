let counter = 0;

        const btnOne = document.getElementById('increment');
        const btnTwo = document.getElementById('decrement');
        const btnThree = document.getElementById('reset');
        const paragraph = document.getElementById('para');
        const message = document.getElementById('message');

        //if counter < 10, increment
        //else show message

        function incrementFunc() {
            if (counter < 10){
            counter++;
            paragraph.textContent = counter;
            message.textContent = '';
            }else{
                message.textContent = "sorry max value is 10";
            }
        }

        //if counter > 0, dicrement
        //else show message

        function decrementFunc() {
            if (counter > 0){
            counter--;
            paragraph.textContent = counter;
            message.textContent = '';
            }else{
                message.textContent = "sorry min value is 0";
            }
        }

        function resetFunc() {
            counter = 0;
            paragraph.textContent = counter;
            message.textContent = '';
        }

        btnOne.addEventListener('click', incrementFunc);
        btnTwo.addEventListener('click', decrementFunc);
        btnThree.addEventListener('click', resetFunc);