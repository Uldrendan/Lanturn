#pragma strict

function Start () {

}

function Update () {

}
var boostInfo : GameObject;


function OnMouseUp() {
	boostInfo.GetComponent.<Renderer>().enabled = false;
	boostInfo.GetComponent.<Collider2D>().enabled = false;
	gameObject.GetComponent.<Renderer>().enabled = false;
	gameObject.GetComponent.<Collider2D>().enabled = false;

}