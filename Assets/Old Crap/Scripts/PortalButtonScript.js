#pragma strict

var boostNumber : int = 0;

function Start () {

}

function Update () {

}

function OnMouseUp() {
	if (boostNumber == 1) {
		GameObject.Find("Ball").SendMessage("pickaxe");
	}
	else if (boostNumber == 2) {
		GameObject.Find("Ball").SendMessage("jackhammer");
	}
	else if (boostNumber == 3) {
		GameObject.Find("Ball").SendMessage("portal");
	}
	
}