function populate() {
	if (quiz.isEnded()){
		showScores();
	} 
	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		showProgress();
	}
};


function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}


function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores (){
	var gameOverHtml = "<br><br><h1> Result </h1><br><br>";
	gameOverHtml += "<h2 id='score'> Your Score: " + quiz.score + "/11 </h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
};


var questions = [
	new Question("Who guards the entrance of Gryffindor’s Common room?", ["The Fat Lady","Madame Maxine","Rowena Ravenclaw","Luna Lovegood"], "The Fat Lady"),
	
	new Question("What destroyed the first Horcrux?", ["The Sword of Grodric Gryffindor","The Elder Wand ","Basilisk Venom","A Patronus"], "Basilisk Venom"),
	
	new Question("Each Christmas Mrs. Weasley gives Harry a gift. What is it?", ["School Books","A broom","A Sweater","Butter Beer"], "A Sweater"),
	
	new Question("What's the name of the newspaper often mentioned in the Harry Potter series?", ["The Wizard's Magazine","Witches Digest","The London Times","The Daily Prophet"], "The Daily Prophet"),
	
	new Question("What species is Nobert, the dragon?", ["Hungarian Horntail","Norwegian Ridgeback","Swedish Short-Snout Dragon","Romanian Longhorn Dragon"], "Norwegian Ridgeback"),
	
	new Question("Which Hogwarts teacher is an animagus?", ["Hagrid","Minerva McGonagall","Severus Snape","Remus Lupin"], "Minerva McGonagall"),
	
	new Question("Which character in Harry Potter always carries a camera with him at Hogwarts?", ["Colin Creevey","Luna Lovegood","Fred Wesley","Cedric Diggory"], "Colin Creevey"),
	
	new Question("Which House did the Sorting Hat originally want to put Harry in?", ["Slytherin","Hufflepuff","Gryffindor","Ravenclaw"], "Slytherin"),
	
	new Question("What's the name of Snape's mother?", ["Helga","Melinda","Eileen","Lily"], "Eileen"),
	
	new Question("Where was Harry born?", ["London","Godric's Hollow","Hogwarts","Dublin"], "Godric's Hollow"),
	
	new Question("What did Harry Potter want to be when he grew up?", ["Proffesor","Minister of Magic","Auror","Pilot"], "Auror")
];

var quiz = new Quiz(questions);

populate();

