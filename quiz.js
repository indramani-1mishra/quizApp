
let i1=document.getElementById('i1');
let i2=document.getElementById('i2');
let i3=document.getElementById('i3');
let i4=document.getElementById('i4');
let c1=document.getElementById('c1');
let c2=document.getElementById('c2');
let c3= document.getElementById('c3');
let c4=document.getElementById('c4');
let questionCount=document.getElementById('question');
let question_container =document.getElementById('question_container');
//let p = document.createElement('p');  // Naya <p> element banaya
//p.id = 'pw';  // Usko id di 'pw'
//question_container.appendChild(p);  // Isko question_container mein add kiya

let p = document.getElementById('pw');




questionCount.textContent=0;



let question =["What is the capital of France?", "Who wrote the play Romeo and Juliet", "What is the largest planet in our solar system?", " What is the largest ocean on Earth?", "What is the chemical symbol for water?", "Who was the first President of India?", " Which river is known as the lifeline of India?", " Who is known as the Father of the Nation in India?"," monkey king who was a loyal ally of Lord Rama?", " What is 7*8"];


let changebutton = document.getElementById('btn');

document.addEventListener('DOMContentLoaded',()=>{
let currentQuestion = 0;

changebutton.addEventListener('click', function() {

   if(currentQuestion <question.length)
    {
        p.innerHTML = question[currentQuestion];
        
        if(currentQuestion == '0')
        {
            i1.value = "paris";
            i2.value = "india";
            i3.value = "pakistan";
            i4.value = "america";
            
            c1.value = "paris";
            c2.value = "india";
            c3.value = "pakistan";
            c4.value = "america";
            
            
        }
        else if(currentQuestion == '1')
            {
                i1.value = "William Shakespeare";
                i2.value = "walmiki";
                i3.value = "rajan";
                i4.value = "shanghai";
                
                c1.value = "William Shakespeare";
                c2.value = "walmiki";
                c3.value = "rajan";
                c4.value = "shanghai";
               
                
            }
        

        else if(currentQuestion == '2')
            {
                i1.value = "cipiter";
                i2.value = "Jupiter";
                i3.value = "asain";
                i4.value = "prefix";

                c1.value = "cipiter";
                c2.value = "Jupiter";
                c3.value = "asain";
                c4.value = "prefix";

                
            }
        else if(currentQuestion == '3')
            {
                i1.value = "Atlantic Ocean";
                i2.value = "Indian Ocean";
                i3.value = "Arctic Ocean";
                i4.value = "Pacific Ocean";
                c1.value = "Atlantic Ocean";
                c2.value = "Indian Ocean";
                c3.value = "Arctic Ocean";
                c4.value = "Pacific Ocean";
            }
        else if(currentQuestion == '4')
            {
                i1.value = "hcl";
                i2.value = "h2so4";
                i3.value = "h2o";
                i4.value = "d20";

                c1.value = "hcl";
                c2.value = "h2so4";
                c3.value = "h2o";
                c4.value = "d20";
            }
        else if(currentQuestion == '5')
            {
                i1.value = "Jawaharlal Nehru";
                i2.value = "Dr. Rajendra Prasad";
                i3.value = "Dr. Sarvepalli Radhakrishnan";
                i4.value = "Indira Gandhi";
                c1.value = "Jawaharlal Nehru";
                c2.value = "Dr. Rajendra Prasad";
                c3.value = "Dr. Sarvepalli Radhakrishnan";
                c4.value = "Indira Gandhi";
            }
        else if(currentQuestion == '6')
            {
                i1.value = "ganga";
                i2.value = "yamuna";
                i3.value = "sarswati";
                i4.value = "gomti";
                c1.value = "ganga";
                c2.value = "yamuna";
                c3.value = "sarswati";
                c4.value = "gomti";
            }
        else if(currentQuestion == '7')
            {
                i1.value = "mahatama gandhi";
                i2.value = "raj";
                i3.value = "arshalan jaheer";
                i4.value = "prakhar sahu";
                c1.value = "mahatama gandhi";
                c2.value = "raj";
                c3.value = "arshalan jaheer";
                c4.value = "prakhar sahu";

            }
        else if(currentQuestion == '8')
            {
                i1.value = "bali";
                i2.value = "sugrewa";
                i3.value = "hanuman";
                i4.value = "angad";
                c1.value = "bali";
                c2.value = "sugrewa";
                c3.value = "hanuman";
                c4.value = "angad";
            }
        else if(currentQuestion == '9')
            {
                i1.value = "56";
                i2.value = "45";
                i3.value = "78";
                i4.value = "89";
                c1.value = "56";
                c2.value = "45";
                c3.value = "78";
                c4.value = "89";

            }
       
        currentQuestion++;
        questionCount.textContent++;
        let audio= new Audio('errs.mp3');
        audio.play();

        let sel=  document.querySelector('input[name="answer"]:checked');
        sel.checked = false;
    }
    else
    {

       
        currentQuestion = 0;
        questionCount.textContent =0;
       
        let scoreContainer = document.createElement("div");

   scoreContainer.id = "scoreContainer";
    document.body.appendChild(scoreContainer);
    
     let replayButton = document.createElement("button");
     replayButton.textContent = "start again";
     replayButton.addEventListener('click', function() {
        window.location.reload();
     });
     let exitButton = document.createElement("button");
     exitButton.textContent = "exit";
     exitButton.addEventListener('click', function() {
        window.close();
     });
     let prs= document.createElement("p");
     prs.textContent =  "Final Score: " + newScore;
     prs.id="finalScore";

     let greet= document.createElement("p");
     greet.textContent =  "Congratulations! You've completed all the questions.";
     greet.id="greeting";
     clearInterval(interval);
     let time = document.createElement('span');
     time.textContent = "time taken"+" "+ hour.textContent+"hour" +" "+ minute.textContent+"minutes"+" "+second.textContent+" seconds ";
     time.id="time3";
     scoreContainer.appendChild(time);
     scoreContainer.appendChild(greet);
     scoreContainer.appendChild(prs);
     scoreContainer.appendChild(replayButton);
     scoreContainer.appendChild(exitButton);
     score.textContent = 0;

       
        
    }

});

}
)


let submitButton = document.getElementById("Submit");

let updateScore = 0;
let newScore = 0;
const answer = ["paris", "William Shakespeare", "Jupiter", "Pacific Ocean", "h2o", "Dr. Rajendra Prasad", "ganga", "mahatama gandhi", "sugrewa", "56"];

submitButton.addEventListener('click', function() {
   let audio = new Audio('click.mp3');
   audio.play();

    if (updateScore < answer.length) {
        // Get the selected radio button dynamically
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');

        

        // Check if an answer is selected
        if (selectedAnswer) {
             
            let firstAnswer = answer[updateScore]; // Get the correct answer from the array

            // Compare the selected answer with the correct answer
            if (selectedAnswer.value === firstAnswer) {
                //score.textContent = (parseInt(score.textContent) + 1).toString();
                newScore++;
               
               
            }
           
        } else{
            
            alert("Please select an answer.");
            
        }

        // Increment to move to the next question
        updateScore++;
    } else {
        alert("All questions have been answered.");
        score.textContent =0;
    }

   
    
});


let timeContainer = document.getElementById('time');
console.log("time", timeContainer.textContent);
 let second= document.createElement('p');
 let minute= document.createElement('p');
 let hour= document.createElement('p');
 second.textContent = "";
 minute.textContent = "";
 hour.textContent = "";
 timeContainer.appendChild(hour);
 timeContainer.appendChild(minute);
 timeContainer.appendChild(second);
 
 let st=0;
 let mt=0;
 let ht=0;
 let interval = setInterval(function() {
    st++;
    if(st>=60){
        st=0;
        mt++;
        if(mt>=60){
            mt=0;
            ht++;
        }
    }
    //second.textContent = st<10?"0"+st:st;
    if(st<10){
        second.textContent = "0"+st;
    }
    else
  {
    second.textContent = st;
  }
  if(mt<10){
    minute.textContent = "0"+mt+":";

  }
  else{
    minute.textContent = mt+":";
  }
  
    hour.textContent = +ht+":";
  
   
}, 1000);





