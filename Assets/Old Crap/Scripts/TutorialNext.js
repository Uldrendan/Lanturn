#pragma strict

function Start () {

}

var timerCounter : int = 0;
var timerLimit : int = 60;

function Update () {
	if (timerCounter >= timerLimit) {
		gameObject.GetComponent.<Renderer>().enabled = true;
		gameObject.GetComponent.<Collider2D>().enabled = true;
	}
	else if (timerCounter > 0) timerCounter++;
}

var tutorialPlay : GameObject;
var tutorialText : GameObject;

function OnMouseUp () {
	gameObject.GetComponent.<Collider2D>().enabled = false;
	gameObject.GetComponent.<Renderer>().enabled = false;
	tutorialText.GetComponent(TextMesh).text = "";
	var script : TutorialPlay;
	script = tutorialPlay.GetComponent(TutorialPlay);
	script.textCounter = 0;
	script.waitingTime = 0;
	script.stage++;
	script.clipPlayed = false;
	tutorialPlay.GetComponent.<AudioSource>().Stop();
	timerCounter = 0;
}

function startTimer (x : int) {
	if (timerCounter == 0) {
		timerLimit = x;
		timerCounter = 1;
	}
	//Just for Debugging:
	//	gameObject.renderer.enabled = true;
	//	gameObject.collider2D.enabled = true;
	
}