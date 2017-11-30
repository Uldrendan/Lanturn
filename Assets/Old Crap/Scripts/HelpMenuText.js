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
		message = "Play";
	}
	else if (stage == 2) {
		message = "High Scores";
	}
	else if (stage == 3) {
		message = "Store";
	}
	else if (stage == 4) {
		message = "Instructions";
	}
	else if (stage == 5) {
		message = "Options";
	}
	else if (stage == 6) {
		message = "Help";
	}
}