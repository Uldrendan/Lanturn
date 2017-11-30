#pragma strict

function Start () {

}

function Update () {

}


var store : Transform;

function OnMouseUp() {
	Instantiate(store, transform.position, transform.rotation);
	Destroy(gameObject);

}