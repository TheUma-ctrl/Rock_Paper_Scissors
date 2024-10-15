let score= JSON.parse(localStorage.getItem
    ('score'));
 
    if(score===null){
     score={
         wins: 0,
         losses: 0,
         ties: 0
     };
    };
 

    updateScoreElement();
     
     function playGame(playerMove)
     {
         
         let result = '';
         if(playerMove === 'Scissors'){
             if(computerMove==='rock'){
             result='you loos';
         }else if(computerMove === 'paper'){
             result='you won!';
         }else if(computerMove==='Scissors'){
             result='tie';
         }
 
         }else if (playerMove==='paper'){
             if(computerMove==='rock'){
             result='you won!';
         }else if(computerMove === 'paper'){
             result='tie';
         }else if(computerMove==='Scissors'){
             result='you loos';
         }
 
         }else if(playerMove==='rock'){     
             result = '';
         if(computerMove==='rock'){
             result='tie';
         }else if(computerMove === 'paper'){
             result='you loos';
         }else if(computerMove==='Scissors'){
             result='you won!';
         }
         }
 
         if(result === 'you won!'){
             score.wins +=1;
         }else if(result==='you loos'){
             score.losses +=1;
         }else if(result==='tie'){
             score.ties +=1;
         }
         
         localStorage.setItem('score', JSON.stringify
         (score));
 
         
         updateScoreElement();
 
         document.querySelector('.js-result').
         innerHTML = result;
 
         document.querySelector('.js-moves').innerHTML
         = `you
         <img class="but-1" src="https://th.bing.com/th/${playerMove}id/R.85fde7ef8fd6ecc4279c8a0db42fbf4a?rik=runno6Ok%2b4DZmQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-bodyparts%2f1024%2f12020-raised-fist-icon.png&ehk=oz8VSx9HY20SSmufpu%2bgs3vsvWpnq%2b27ZasRsjat%2fIA%3d&risl=&pid=ImgRaw&r=0" alt="">
         <img class="but-2" src="https://hotemoji.com/images/${computerMove}emoji/n/5zg52zzh675n.png" alt="">
         computer`; 
         
     }
 
 
     function updateScoreElement(){
         document.querySelector('.js-score')
         .innerHTML = `wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`;
     }
 
 
     let computerMove = '';
 
     function pickComputerMove()
     {
         const randomNumber = Math.random();
 
         if(randomNumber >=0 && randomNumber <1/3 ){
         computerMove ='rock';
         }else if(randomNumber >= 1/3 && randomNumber <2/3){
         computerMove ='paper';
         }else if(randomNumber >= 2/3 && randomNumber <1){
         computerMove ='Scissors';
         }
     }
 