#pragma strict

var buttonUp : Sprite;
var buttonDown : Sprite;
private var MenuClick : GameObject;
private var MenuSwipe : GameObject;

function Start () {
	MenuClick = GameObject.Find("MenuClick");
	MenuSwipe = GameObject.Find("MenuSwipe");

}

function Update () {

}

function OnMouseDown() {
	GetComponent(SpriteRenderer).sprite = buttonDown;
	MenuSwipe.SendMessage("toggleButtonDown", true);

}

function OnMouseUp() {
	GetComponent(SpriteRenderer).sprite = buttonUp;
	if (MenuClick == null || MenuSwipe == null) yield WaitForSeconds(0.1);
	MenuClick.GetComponent.<AudioSource>().Play();
	MenuSwipe.SendMessage("toggleButtonDown", false);
}