#pragma strict

function Start () {

}

function Update () {

}


var stage : int = 0;

function SetStage(x:int) {
	stage = x;
	if (stage == 1) {
		gameObject.transform.position.x = 15;
		gameObject.transform.position.y = -1.3;
		gameObject.transform.localScale.y = 1;
	}
	else if (stage == 2) {
		gameObject.transform.position.x = 15;
		gameObject.transform.position.y = -3;
		gameObject.transform.localScale.y = -1;
	}
	else if (stage == 3) {
		gameObject.transform.position.x = 9.5;
		gameObject.transform.position.y = -1;
		gameObject.transform.localScale.y = 1;
	}
	else if (stage == 4) {
		gameObject.transform.position.x = 8.6;
		gameObject.transform.position.y = -1;
		gameObject.transform.localScale.y = 1;
	}
	else if (stage == 5) {
		gameObject.transform.position.x = 11.6;
		gameObject.transform.position.y = -1.2;
		gameObject.transform.localScale.y = 1;
	}
	else if (stage == 6) {
		gameObject.transform.position.x = 16.46;
		gameObject.transform.position.y = -7.6;
		gameObject.transform.localScale.y = -1;
	}
}