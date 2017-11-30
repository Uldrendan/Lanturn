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
		message = "Tools: Buy/Upgrade";
	}
	else if (stage == 2) {
		message = "Boosts: Buy/Upgade";
	}
	else if (stage == 3) {
		message = "Question Mark";
	}
	else if (stage == 4) {
		message = "Selector";
	}
	else if (stage == 5) {
		message = "Tier";
	}
	else if (stage == 6) {
		message = "Help";
	}
}