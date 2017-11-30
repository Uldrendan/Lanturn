#pragma strict

function Start () {

}

function Update () {

}


var FloorArt : GameObject;
var Spike1 : GameObject;
var Spike2 : GameObject;

function jackhammer () {
	Destroy(FloorArt);
	Destroy(Spike1);
	Destroy(Spike2);
	Destroy(gameObject);

}