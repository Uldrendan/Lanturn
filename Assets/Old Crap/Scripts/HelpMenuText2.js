#pragma strict

function Start () {

}

var message : String;

function Update () {
	GetComponent(TextMesh).text = message;

}


var stage : int = 0;

function SetStage(x:int) {
	stage = x;
	if (stage == 1) {
		message = "Press this button to begin the game.";
	}
	else if (stage == 2) {
		message = "Press this button to view the highscores.";
	}
	else if (stage == 3) {
		message = "Press this button to buy tools and boosts.";
	}
	else if (stage == 4) {
		message = "Press this button to read the instructions.";
	}
	else if (stage == 5) {
		message = "Press this button to change the game options.";
	}
	else if (stage == 6) {
		message = "Press this button to see these messages again.";
	}
}