#pragma strict

function Start () {

}

function Update () {

}
var tutBool : boolean = false;
var blockBoost : GameObject;
var tutorialPlay : GameObject;

function OnMouseUp () {
	if (tutBool) {
		
		var script : TutorialPlay;
		script = tutorialPlay.GetComponent(TutorialPlay);
		script.textCounter = 0;
		script.stage++;
		tutBool = false;
	}
}

function tutorial () {
	tutBool = true;
	blockBoost.GetComponent.<Renderer>().enabled = false;
	blockBoost.GetComponent.<Collider2D>().enabled = false;
}

function deactivate () {
	blockBoost.GetComponent.<Renderer>().enabled = true;
	blockBoost.GetComponent.<Collider2D>().enabled = true;
}