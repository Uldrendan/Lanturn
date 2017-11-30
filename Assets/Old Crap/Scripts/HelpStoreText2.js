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
		message = "Buy a tool to unlock the ability to equip it.";
	}
	else if (stage == 2) {
		message = "Buy a boost to unlock the ability to find it in-game.";
	}
	else if (stage == 3) {
		message = "Press this button to read the description of the tool/boost.";
	}
	else if (stage == 4) {
		message = "Press on a purchased boost to equip it before you start.";
	}
	else if (stage == 5) {
		message = "This icon indicates what tier the tool/boost is at.";
	}
	else if (stage == 6) {
		message = "Press this button to see these messages again.";
	}
}