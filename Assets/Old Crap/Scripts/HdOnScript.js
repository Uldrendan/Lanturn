#pragma strict

function Start () {

}

function Update () {

}

var hdOff : Transform;

function OnMouseUp() {
	Instantiate(hdOff, transform.position, transform.rotation);
	Destroy(gameObject);

}