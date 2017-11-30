#pragma strict

function Start () {

}

function Update () {

}



var tutBool : boolean = false;
var tutorialPlay : GameObject;

function OnMouseUp() {
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
}