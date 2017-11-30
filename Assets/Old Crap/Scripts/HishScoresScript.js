#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp() {
	GameObject.Find("Main Camera").SendMessage("highScoresA");

}