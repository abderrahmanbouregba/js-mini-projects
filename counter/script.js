let counter = 0;

        const btnOne = document.getElementById('increment');
        const btnTwo = document.getElementById('decrement');
        const btnThree = document.getElementById('reset');
        const paragraph = document.getElementById('para');

        function incrementFunc() {
            counter++;
            paragraph.textContent = counter;
        }

        function decrementFunc() {
            counter--;
            paragraph.textContent = counter;
        }

        function resetFunc() {
            counter = 0;
            paragraph.textContent = counter;
        }

        btnOne.addEventListener('click', incrementFunc);
        btnTwo.addEventListener('click', decrementFunc);
        btnThree.addEventListener('click', resetFunc);