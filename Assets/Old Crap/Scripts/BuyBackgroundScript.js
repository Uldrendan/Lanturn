#pragma strict

function Start () {

}

function Update () {

}

var buttonPair : GameObject;
var buttonBack : GameObject;


function OnMouseUp() {
	buttonPair.SendMessage("Clicked");
	buttonBack.SendMessage("OnMouseUp");
}

function OnMouseDown() {
	buttonBack.SendMessage("OnMouseDown");
}