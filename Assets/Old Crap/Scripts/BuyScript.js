#pragma strict

var price : int;
var price1 : int;
var price2 : int;
var price3 : int;
var price4 : int;
var buttonWord : String = "Buy";
var buttonString : String;
var buttonCollider : GameObject;
var buttonBackground : GameObject;

var boostStatObject : GameObject;

var goldObject : GameObject;
var redCounter : int = 0;
var goldLabel : GameObject;
var goldNumber : int;



function Start () {
	buttonString = buttonWord + " (" + price + ")";

}

function Update () {
	GetComponent(TextMesh).text = buttonString;
	if (redCounter > 0) redCounter++;
	if (redCounter == 30) {
		redCounter = 0;
		goldLabel.GetComponent(TextMesh).color = Color.white;
		GetComponent(TextMesh).color = Color.white;
		if (GetComponent(BlinkingText) != null) gameObject.SendMessage("Red", false);
	}

}


var tutBool : boolean = false;
var tutorialPlay : GameObject;
var boostIcon : GameObject;
var isTool : boolean = false;

function Clicked () {
	var script : GoldCounter = goldObject.GetComponent(GoldCounter);
	goldNumber = script.gold;
	if (price <= goldNumber) {
		boostStatObject.GetComponent(TierSwitcher).Change();
		boostStatObject.GetComponent(TierSwitcher).SaveBoostStat();
		GameObject.Find("Gold").SendMessage("AddGold", -price);
		GameObject.Find("Gold").SendMessage("SaveGold", "buy");
		if (buttonWord == "Buy" && !tutBool && isTool) {
			boostIcon.SendMessage("FirstTime");
		}
		buttonWord = "Upgrade";
		if (price == price3) price = price4;
		if (price == price2) price = price3;
		if (price == price1) price = price2;
		UpdateString();
		
		if (tutBool) {
			
			var script2 : TutorialPlay;
			script2 = tutorialPlay.GetComponent(TutorialPlay);
			script2.textCounter = 0;
			script2.stage++;
			tutBool = false;
		}
	}
	else {
		if (GetComponent(BlinkingText) != null) gameObject.SendMessage("Red", true);
		goldLabel.GetComponent(TextMesh).color = Color.red;
		GetComponent(TextMesh).color = Color.red;
		redCounter = 1;
	}
}
function Deactivate () {
	GetComponent.<Renderer>().enabled = false;
	buttonCollider.GetComponent.<Collider2D>().enabled = false;
	buttonBackground.GetComponent.<Renderer>().enabled = false;
}
function ChangePrice(x : int) {
	buttonWord = "Upgrade";
	if (x == 4) price = price4;
	if (x == 3) price = price3;
	if (x == 2) price = price2;
	UpdateString();
}
function UpdateString () {
	buttonString = buttonWord + " (" + price + ")";

}


function tutorial () {
	tutBool = true;
}

function tutorialButton () {
	price = price1;
	buttonWord = "Buy";
	UpdateString();
	GetComponent.<Renderer>().enabled = true;
	buttonCollider.GetComponent.<Collider2D>().enabled = true;
}