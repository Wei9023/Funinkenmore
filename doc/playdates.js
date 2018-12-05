function Kid(name, gender, food, chara, picture, quizResults, bio) {
  this.name = name;
  this.gender = gender;
  this.food = food;
  this.chara = chara;
  this.picture = picture;
  this.quizResults = quizResults;
  this.bio = bio;
  this.kidScore = 0;
  if (this.name != localStorage.kidName) {
    builtInKids.push(this);
  }
};

var builtInKids = [];
var myKidScores = [];

var radioAnswerArray = JSON.parse(localStorage.answersData);
var formAnswerArray = JSON.parse(localStorage.formData);
var momName = localStorage.momName;
var kidName = localStorage.kidName;
var myKid = new Kid(kidName, formAnswerArray[2], formAnswerArray[0], formAnswerArray[1], 'My House', radioAnswerArray, 'bio-placeholder');

var Eva = new Kid('Eva', 'Girl', 'Strawberry', 'Snow White', '../images/child1.jpg', [3, 4, 4, 4, 3, 3], 
	'Eva is a German girl whose dream is to become a princess.');

var Daisy = new Kid('Daisy', 'Girl', 'Corn', 'Princess Anna', 'child2.jpg', [2, 2, 2, 4, 3, 4], 
	'Daisy is a girl who grow up in a farm. She likes to play outside with friends.');

var James = new Kid('James', 'Boy', 'Pizza', 'King Lion', 'child3.jpg', [2, 3, 2, 2, 1, 4], 
	'little boy who likes running on the beach.');

var Dominic = new Kid('Dominic', 'Boy', 'Icecream', 'Blaze', 'child4.jpg', [3, 4, 3, 4, 4, 2], 
'Dominic likes skating');

var Mia = new Kid('Mia', 'Girl', 'Pizza', 'Elsa', 'child5.jpg', [1, 4, 4, 3, 2, 3], 
'Mia just learned how to crawl, she likes chasing her friend.');

var Zack = new Kid('Zack', 'Boy', 'Milk', 'Lightening Macqueen', 'child12.jpg', [2, 1, 4, 2, 3, 4], 
'Zack likes cars the most, welcome to our home and play togather. ');

var Lily = new Kid('Lily', 'Girl', 'Milk', 'Mickey', 'child7.jpg', [1, 3, 2, 1, 3, 3], 
'Lily is a cute little baby who is 4months wanting a friend to spend tummy time together.');

var David = new Kid('David', 'Boy', 'Lolipop', 'Blaze', 'child8.jpg', [3, 4, 3, 1, 2, 1], 
'David is a Brazil boy who is good at dancing.');


var Olivia = new Kid('Olivia', 'Girl', 'strawberry', 'Elsa', 'child9.jpg', [4, 2, 4, 1, 1, 1], 
	'Olivia is good at dancing.');

var Chuck = new Kid('Chuck', 'Boy', 'Icecream', 'Lightening Macqueen', 'child10.jpg', [1, 1, 2, 3, 4, 2], 
	'Chuck eats icecream everyday so he need some outdoor activities to lose some weight.');

var Tony = new Kid('Tony', 'Boy', 'Cheese', 'King Lion', 'child13.jpg', [3, 4, 1, 1, 4, 3], 
	'Tony is now in a elementory school, so he can just playdate at weekends.');




var makeScores = function() {
  for (var i = 0; i < builtInKids.length; i++) {
    compareKids(myKid, builtInKids[i]);
    myKidScores.push(builtInKids[i]);
  }
};


var compareKids = function(kid1, kid2) {
  for (var j = 0; j < 5; j++) {
    kid2.kidScore += Math.abs(kid1.quizResults[j] - kid2.quizResults[j]);
    if(kid1.gender === kid2.gender){
      kid2.kidScore --;
    }
    if(kid1.food === kid2.food){
      kid2.kidScore --;
    }
    if(kid1.chara === kid2.chara){
      kid2.kidScore --;
    }
  }
  return kid2.kidScore;
};

var whichKid = function() {
  myKidScores.sort(function(a, b) {
    return (a.kidScore - b.kidScore);
  });
  appendToResults();
};


var appendToResults = function(){
  var targetLabel = document.getElementById('topMatchLabel');
  targetLabel.innerHTML = momName + ' and ' + kidName + '\'s playdates:';

  

  var firstH3 = document.getElementById('firstH3');
  firstH3.innerHTML = 'Friend1: ' + myKidScores[0].name;
  var secondH3 = document.getElementById('secondH3');
  secondH3.innerHTML = 'Friend2: ' + myKidScores[1].name;
  var thirdH3 = document.getElementById('thirdH3');
  thirdH3.innerHTML = 'Friend3: ' + myKidScores[2].name;

  var firstpic = document.getElementById('firstPic');
  firstPic.setAttribute('src', myKidScores[0].picture);
  var secondpic = document.getElementById('secondPic');
  secondPic.setAttribute('src', myKidScores[1].picture);
  var thirdpic = document.getElementById('thirdPic');
  thirdPic.setAttribute('src', myKidScores[2].picture);

  var target1 = document.getElementById('firstBio');
  target1.innerHTML = myKidScores[0].bio;
  var target2 = document.getElementById('secondBio');
  target2.innerHTML = myKidScores[1].bio;
  var target3 = document.getElementById('thirdBio');
  target3.innerHTML = myKidScores[2].bio;

};

var resetArray = function(){
  myKidScores = [];
};



makeScores();
whichKid();