#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp() {
	GameObject.Find("Local Scores").SendMessage("SaveScores2");
	gameObject.GetComponent.<Renderer>().enabled = false;
	gameObject.GetComponent.<Collider2D>().enabled = false;

}