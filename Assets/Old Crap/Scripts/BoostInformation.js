#pragma strict

function Start () {

}

function Update () {

}
var boostInfo : GameObject;
var boostInfoBack : GameObject;


function OnMouseUp() {
	boostInfo.GetComponent.<Renderer>().enabled = true;
	boostInfo.GetComponent.<Collider2D>().enabled = true;
	boostInfoBack.GetComponent.<Renderer>().enabled = true;
	boostInfoBack.GetComponent.<Collider2D>().enabled = true;

}