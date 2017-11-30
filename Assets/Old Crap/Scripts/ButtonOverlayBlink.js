#pragma strict

function Start () {

}
var counter : int = 0;

function Update () {
	if (blink) {
		if (counter > 10) {
			GetComponent.<Renderer>().enabled = !GetComponent.<Renderer>().enabled;
			counter = 0;
		}
		counter++;
	}

}
var blink : boolean = false;
function blinking (x : boolean) {
	blink = x;
	if (!blink) GetComponent.<Renderer>().enabled = false;
}