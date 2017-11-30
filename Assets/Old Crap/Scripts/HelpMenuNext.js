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
	if (stage == 1) {
		back.GetComponent.<Renderer>().enabled = true;
		back.GetComponent.<Collider2D>().enabled = true;
	}
	if (stage == 5) {
		exit.SendMessage("blinking", true);
		gameObject.GetComponent.<Renderer>().enabled = false;
		gameObject.GetComponent.<Collider2D>().enabled = false;
	}
	back.SendMessage("SetStage", stage + 1);
	text.SendMessage("SetStage", stage + 1);
	text2.SendMessage("SetStage", stage + 1);
	arrow.SendMessage("SetStage", stage + 1);
	
	stage++;
}