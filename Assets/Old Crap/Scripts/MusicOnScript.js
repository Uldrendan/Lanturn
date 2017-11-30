#pragma strict

function Start () {

}

function Update () {

}

var music : Transform;
var t : Transform;
var offMusic : GameObject;

function OnMouseUp() {
	Instantiate(music, transform.position, transform.rotation);
	Destroy(gameObject);
	GameObject.Find("Main Camera").SendMessage("toggleMusic");

}


function SwitchMusic() {
	t = Instantiate(music, transform.position, transform.rotation) as Transform;
	offMusic = t.gameObject;
	offMusic.GetComponent.<Renderer>().enabled = false;
	offMusic.GetComponent.<Collider2D>().enabled = false;
	
	Destroy(gameObject);
}