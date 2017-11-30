#pragma strict

function Start () {

}

function Update () {

}


var FloorArt : GameObject;
var Spike : GameObject;

function jackhammer () {
	Destroy(FloorArt);
	Destroy(Spike);
	Destroy(gameObject);

}