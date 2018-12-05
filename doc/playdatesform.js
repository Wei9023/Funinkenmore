
'use strict';
var userChoice = [];
var num = 0;
var userInput = [];




function removeForm(event){
  event.preventDefault();

  var answerOne = document.getElementById('ques1').value;
  userInput.push(answerOne);
  var answerTwo = document.getElementById('ques2').value;
  userInput.push(answerTwo);
  var answerThree = document.getElementById('ques3').value;
  userInput.push(answerThree);
  var json = JSON.stringify(userInput);
  localStorage.setItem('formData', json);




document.getElementById(formIDs[num]).style.display = 'none';
if(num < 5){
    render(num, formIDs[num + 1], buttonLabels[num]);
    console.log(formIDs);
  }
  else{
    location.assign('babyplay.html');
  }
  num++;
}
var formIDs = ['form','form1','form2','form3','form4','form5'];
var buttonLabels = ['button1','button2','button3','button4','button5'];


function render(qnumber, formID, buttonLabels){
  var div = document.getElementById('multi');
  var formIn = document.createElement('form');
  formIn.setAttribute('id', formID);
  div.appendChild(formIn);
  var form = document.getElementById(formID);
  var question = kidQuestions[num].question;
   console.log(question);
  var label = document.createElement('label');
  label.innerHTML = question + '<br>';
  label.setAttribute('id', 'formLabel');
  form.appendChild(label);
  var answers = kidQuestions[qnumber].choices;


  for ( var j = 0; j < 4; j ++){
      // var inputForm = document.createElement('form');

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.setAttribute('name','answers');
    radio.setAttribute('class', buttonLabels);
    label.appendChild(radio);
    label.innerHTML += answers[j] + '<br>';
  }

  var subChoice = document.createElement('button');
  subChoice.type = 'button';
  subChoice.innerHTML = 'Submit';
  subChoice.style = 'display: block';
  label.appendChild(subChoice);
  subChoice.addEventListener('click', removeForm);
  subChoice.addEventListener('click', function (){
    for(var i = 0; i < 4; i ++){
      var currentButton = document.getElementsByClassName(buttonLabels)[i];
      if(currentButton.checked){
        userChoice.push(i + 1);
      }
    }
    var myJSON = JSON.stringify(userChoice);
    localStorage.setItem('answersData', myJSON);
  });
};

document.getElementById('form').addEventListener('submit',removeForm);

// var one = localStorage.getItem('answersData');
// var obj = JSON.parse(one);



//var kidQuestionsObj = JSON.parse(kidQuestions);

 var kidQuestions = [
{  
  question: 'How old is your kid?',
  choices: ['Baby', 'Toddler', 'Preschooler', 'School Children']
},

{
  question: 'Which of these activities does your kid like most?',
  choices: ['Reading', 'Painting', ' Play toy', 'Outdoor activities']
},
{
  question:'When is your kid\'s ideal playdate time?',
  choices: ['Morning ', 'Noon', 'Afternoon', 'Night ']
},
{
  question:'How long do you want to play together?',
  choices: ['5-10min ', '15-20min', 'Around half an hour', 'More than one hour']
},
{
  question:'Where do you want to do the playdate?',
  choices: ['Parks ', 'Malls', 'My home', 'Others']
},

];

var formIDs = ['form','form1','form2','form3','form4','form5'];
var buttonLabels = ['button1','button2','button3','button4','button5'];





/*var userInputArray = [];
var questionArray = [];

function Question () {
  this.question = '';
  this.name = '';
}

var genderQuestion = new Question ();
genderQuestion.question = 'Boy or Girl?';
genderQuestion.name = 'genderQuestion';
questionArray.push(genderQuestion);

var ageQuestion = new Question ();
ageQuestion.question = 'How old is your kid?';
ageQuestion.name = 'ageQuestion';
questionArray.push(ageQuestion);

var dateQuestion = new Question ();
dateQuestion.question = 'When is your kid\'s ideal playdate time?';
dateQuestion.name = 'dateQuestion';
questionArray.push(dateQuestion);

var timeQuestion = new Question ();
timeQuestion.question = 'How long do you want to play together?';
timeQuestion.name = 'timeQuestion';
questionArray.push(timeQuestion);

var placeQuestion = new Question ();
placeQuestion.question = 'Where do you want to do the playdate?';
placeQuestion.name = 'placeQuestion';
questionArray.push(placeQuestion);
*/



