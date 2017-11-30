#pragma strict

function Start () {

}

function Update () {

}

var Button1 : Sprite;
var Button2 : Sprite;
var Button3 : Sprite;

var redButton1 : Sprite;
var redButton2 : Sprite;
var redButton3 : Sprite;

var tutBool : boolean = false;

function red () {
	if (tutBool) gameObject.SendMessage("blinking", false);
	if (GetComponent(SpriteRenderer).sprite == Button1)
		GetComponent(SpriteRenderer).sprite = redButton1;
	else if (GetComponent(SpriteRenderer).sprite == Button2)
		GetComponent(SpriteRenderer).sprite = redButton2;
	else if (GetComponent(SpriteRenderer).sprite == Button3)
		GetComponent(SpriteRenderer).sprite = redButton3;
	gameObject.GetComponent.<Collider2D>().enabled = false;
}

function tutorial () {
	tutBool = true;
}