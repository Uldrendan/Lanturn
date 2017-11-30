#pragma strict

function Start () {

}

var play : boolean = false;
var counter : int = 0;

function Update () {
	if (play) counter++;
	if (counter == 30) Destroy(gameObject);

}

function startGame() {
	gameObject.GetComponent.<Renderer>().enabled = true;
	play = true;
}