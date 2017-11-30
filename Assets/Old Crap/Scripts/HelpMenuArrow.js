#pragma strict

function Start () {

}

function Update () {

}


var stage : int = 0;

function SetStage(x:int) {
	stage = x;
	if (stage == 1) {
		gameObject.transform.position.x = 0;
		gameObject.transform.position.y = 0;
		gameObject.transform.localScale.x = 2;
		gameObject.transform.localScale.y = -2;
	}
	else if (stage == 2) {
		gameObject.transform.position.x = -4.8;
		gameObject.transform.position.y = 0.8;
		gameObject.transform.localScale.x = 1;
		gameObject.transform.localScale.y = -1;
	}
	else if (stage == 3) {
		gameObject.transform.position.x = 4.8;
		gameObject.transform.position.y = 0.8;
		gameObject.transform.localScale.x = 1;
		gameObject.transform.localScale.y = -1;
	}
	else if (stage == 4) {
		gameObject.transform.position.x = -4;
		gameObject.transform.position.y = 6.5;
		gameObject.transform.localScale.x = 1;
		gameObject.transform.localScale.y = 1;
	}
	else if (stage == 5) {
		gameObject.transform.position.x = 4;
		gameObject.transform.position.y = 6.5;
		gameObject.transform.localScale.x = 1;
		gameObject.transform.localScale.y = 1;
	}
	else if (stage == 6) {
		gameObject.transform.position.x = 5.48;
		gameObject.transform.position.y = -6.5;
		gameObject.transform.localScale.x = 1;
		gameObject.transform.localScale.y = -1;
	}
}