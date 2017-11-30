#pragma strict

function Start () {

}

function Update () {

}


var vibrate : Transform;
var t : Transform;
var offVibrate : GameObject;

var vibrateSetBoolean : boolean;

function OnMouseUp() {
	Instantiate(vibrate, transform.position, transform.rotation);
	Destroy(gameObject);
	GameObject.Find("Ball").SendMessage("VibrateSet", vibrateSetBoolean);

}

function SwitchVibrate() {
	t = Instantiate(vibrate, transform.position, transform.rotation) as Transform;
	offVibrate = t.gameObject;
	offVibrate.GetComponent.<Renderer>().enabled = false;
	offVibrate.GetComponent.<Collider2D>().enabled = false;
	
	Destroy(gameObject);
}