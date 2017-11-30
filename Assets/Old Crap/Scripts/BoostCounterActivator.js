#pragma strict

function Start () {

}

var boostButton : GameObject;
var empty : boolean = false;
function Update () {
	if (!empty) {
		if (GetComponent(TextMesh).text == ": 0") {
			GetComponent(TextMesh).color = Color.red;
			boostButton.SendMessage("red");
			empty = true;
		}
	}
}

function ChangeBoost (x : int) {
	if (x != 0) gameObject.tag = "gameItem";
}