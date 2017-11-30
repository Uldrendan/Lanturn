#pragma strict

var boostNumber : int = 0;
var tierNumber : int = 0;
var boost1 : Sprite;
var boost1Down : Sprite;
var boost2 : Sprite;
var boost2Down : Sprite;
var boost3 : Sprite;
var boost3Down : Sprite;


function Start () {

}

function Update () {
	if (Input.GetKeyDown("b") && GetComponent.<Collider2D>().enabled == true) gameObject.SendMessage("OnMouseDown");
	if (Input.GetKeyUp("b") && GetComponent.<Collider2D>().enabled == true) gameObject.SendMessage("OnMouseUp");
}


function OnMouseUp() {
	if (boostNumber == 1) {
		GameObject.Find("Ball").SendMessage("pickaxe", tierNumber);
	}
	else if (boostNumber == 2) {
		GameObject.Find("Ball").SendMessage("jackhammer", tierNumber);
	}
	else if (boostNumber == 3) {
		GameObject.Find("Ball").SendMessage("portal", tierNumber);
	}
	
}

function ChangeBoost(x : int) {
	if (x != 0)	boostNumber = x;
	var buttonScript : ButtonClick = gameObject.GetComponent(ButtonClick);
	if (boostNumber == 1) {
		GetComponent(SpriteRenderer).sprite = boost1;
		buttonScript.buttonUp = boost1;
		buttonScript.buttonDown = boost1Down;
	}
	else if (boostNumber == 2) {
		GetComponent(SpriteRenderer).sprite = boost2;
		buttonScript.buttonUp = boost2;
		buttonScript.buttonDown = boost2Down;
	}
	else if (boostNumber == 3) {
		GetComponent(SpriteRenderer).sprite = boost3;
		buttonScript.buttonUp = boost3;
		buttonScript.buttonDown = boost3Down;
	}
}
function ChangeTier (x : int) {
	tierNumber = x;
	if (tierNumber == 4) {
		GameObject.Find("Ball").SendMessage("BoostNumber", 2);
	}
	else GameObject.Find("Ball").SendMessage("BoostNumber", 1);
}
function tutorialButton () {
	boostNumber = 0;
	tierNumber = 0;
}