#pragma strict

function Start () {

}

function Update () {

}

var sound : Transform;
var t : Transform;
var offSound : GameObject;

function OnMouseUp() {
	Instantiate(sound, transform.position, transform.rotation);
	Destroy(gameObject);
	GameObject.Find("Main Camera").SendMessage("toggleSound");

}


function SwitchSound() {
	t = Instantiate(sound, transform.position, transform.rotation) as Transform;
	offSound = t.gameObject;
	offSound.GetComponent.<Renderer>().enabled = false;
	offSound.GetComponent.<Collider2D>().enabled = false;
	
	Destroy(gameObject);
}