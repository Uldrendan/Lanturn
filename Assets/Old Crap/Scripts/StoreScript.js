#pragma strict

function Start () {

}

function Update () {

}


var tutBool : boolean = false;
var tutorialPlay : GameObject;

function OnMouseUp() {
	GameObject.Find("Main Camera").SendMessage("storeA");
	if (tutBool) {
		gameObject.GetComponent.<Collider2D>().enabled = false;
		
		var script : TutorialPlay;
		script = tutorialPlay.GetComponent(TutorialPlay);
		script.textCounter = 0;
		script.stage++;
	}
	

}

function tutorial () {
	tutBool = true;
}