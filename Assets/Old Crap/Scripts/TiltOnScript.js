#pragma strict

function Start () {
}

function Update () {

}


var tilt : Transform;
var t : Transform;
var offTilt : GameObject;

function OnMouseUp() {
	Instantiate(tilt, transform.position, transform.rotation);
	Destroy(gameObject);
	GameObject.Find("Main Camera").SendMessage("toggleTilt");

}
function SwitchTilt() {
	t = Instantiate(tilt, transform.position, transform.rotation) as Transform;
	offTilt = t.gameObject;
	offTilt.GetComponent.<Renderer>().enabled = false;
	offTilt.GetComponent.<Collider2D>().enabled = false;
	
	Destroy(gameObject);
}