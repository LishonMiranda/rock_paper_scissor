 let compScore = 0; yourScore = 0, win = null;
    function rockPaperScissors() {
        function computerMove() {
            let a = Math.floor(Math.random() * 10), b = '';
            if (a <= (10 / 3)) {
                return 'rock';
            }
            else if (a <= (20 / 3)) {
                return 'paper';
            }
            else if (a <= 10) {
                return 'scissor';
            }
        }
        let c = computerMove();

        if (b == c) {
            rockPaperScissors();
        }
        else if (b != c) {
            if (b == 'rock') {
                if (c == 'paper') {
                    compScore++;
                    win = false;
                }
                if (c == 'scissor') {
                    yourScore++;
                    win = true;
                }
            }
            if (b == 'paper') {
                if (c == 'scissor') {
                    compScore++;
                    win = false;
                }
                if (c == 'rock') {
                    yourScore++;
                    win = true;
                }
            }
            if (b == 'scissor') {
                if (c == 'rock') {
                    compScore++;
                }
                if (c == 'paper') {
                    yourScore++;
                }

            }
            // console.clear();
            // console.log(`Your score is ${yourScore} \nComputers score is ${compScore}`);
            
            document.querySelector('.scoreSection').innerHTML = `Your score is ${yourScore} \nComputer's score is ${compScore}`;
            if(win){
                document.querySelector('#wonOrLost').innerHTML = 'You won.'
            } else{
                document.querySelector('#wonOrLost').innerHTML = 'Computer won.'
            }
            if(win){
            if(b == 'rock'){
            document.querySelector('#choice').innerHTML = `You <img src="rock-emoji.png" class='moving-icon'> Computer <img src="scissors-emoji.png" class='moving-icon'>  `}
            else if (b == 'paper'){
                document.querySelector('#choice').innerHTML =  `You <img src="paper-emoji.png" class='moving-icon'> Computer <img src="rock-emoji.png" class='moving-icon'>  `
            }
            else{
                document.querySelector('#choice').innerHTML = `You <img src="scissors-emoji.png" class='moving-icon'> Computer <img src="paper-emoji.png" class='moving-icon'>  `
            }}
            if(!win){
                if(b == 'rock'){
            document.querySelector('#choice').innerHTML = `You <img src="rock-emoji.png" class='moving-icon'> Computer <img src="paper-emoji.png" class='moving-icon'>  `}
            else if (b == 'paper'){
                document.querySelector('#choice').innerHTML =  `You <img src="paper-emoji.png" class='moving-icon'> Computer <img src="scissors-emoji.png" class='moving-icon'>  `
            }
            else{
                document.querySelector('#choice').innerHTML = `You <img src="scissors-emoji.png" class='moving-icon'> Computer <img src="rock-emoji.png" class='moving-icon'>  `
            }
            }
        score.yourScore = yourScore;
        score.compScore = compScore;
        localStorage.setItem('scoreCard', JSON.stringify(score));
        }

       
    }
     let score = {};
        score.yourScore = yourScore;
        score.compScore = compScore;
        localStorage.setItem('score', score)
   