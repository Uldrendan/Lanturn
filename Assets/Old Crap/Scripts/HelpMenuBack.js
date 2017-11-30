#pragma strict

function Start () {

}

function Update () {

}

var stage : int = 0;

function SetStage(x:int) {
	stage = x;
}

var back : GameObject;
var next : GameObject;
var text : GameObject;
var text2 : GameObject;
var arrow : GameObject;
var exit : GameObject;

function OnMouseUp () {
	if (stage == 6) {
		exit.SendMessage("blinking", false);
		next.GetComponent.<Renderer>().enabled = true;
		next.GetComponent.<Collider2D>().enabled = true;
	}
	if (stage == 2) {
		gameObject.GetComponent.<Renderer>().enabled = false;
		gameObject.GetComponent.<Collider2D>().enabled = false;
	}
	next.SendMessage("SetStage", stage - 1);
	text.SendMessage("SetStage", stage - 1);
	text2.SendMessage("SetStage", stage - 1);
	arrow.SendMessage("SetStage", stage - 1);
	
	stage--;
}