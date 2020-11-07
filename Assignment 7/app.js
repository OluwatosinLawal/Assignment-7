/* Variables */
var scores, roundScore, activePlayer, gamePlaying;

function initialization () {
    scores = [0];
     activePlayer = 0;
    roundScore = 0;
    currentScore = 0;
    gamePlaying = true;

    /*Remove the win image on start */
    document.getElementById('win').style.display = 'none';

    /*Reset the Scores and Player Names and show dice and results on reset */
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    document.getElementById('name-0').textContent = 'Player';

}
initialization ();

 document.querySelector('.btn-new').addEventListener('click', initialization);
 document.querySelector('.btn-roll').addEventListener('click', function () {

     // 1. Check if game is playing or not.
     if (gamePlaying) {    

     // 2. Generate two random numbers and store them in variables
     var dice1 = Math.floor (Math.random() * 6) + 1 ;
     var dice2 = Math.floor (Math.random() * 6) + 1 ;

     // 3. Display the result on the page.
     document.getElementById('dice-1').style.display = 'block';
     document.getElementById('dice-2').style.display = 'block';
     document.getElementById('dice-1').src = 'images/dice-'+dice1+'.svg';
     document.getElementById('dice-2').src = 'images/dice-'+dice2+'.svg';

     // 4. Update the round score 
     roundScore = roundScore + dice1 +dice2;
     document.querySelector('#current-'+activePlayer).textContent = roundScore;

     currentScore = dice1 +dice2;
     document.querySelector('#score-'+activePlayer).textContent = currentScore;
     
     //If no value is put for winning score, let winning score be 25 */
    var input = document.querySelector('.final-score').value;
                var winningScore;
            
                if (input) {
                    winningScore = input;
                } 
                else {
                    winningScore = 25;
                }
    
    /* If palyer wins, the win image should show and remove other results */
    if (roundScore >= winningScore) {
                    document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
                    document.getElementById('win').style.display = 'block';
                    
                    
                    gamePlaying = false;
                }          
    }
 });
 