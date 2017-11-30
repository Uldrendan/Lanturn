#pragma strict

function Start () {
	target.z = gameObject.transform.position.z;
	playerObject = GameObject.Find("Ball");

}

var magnetBool : boolean = false;
var target : Vector3;
var playerObject : GameObject;

var play : boolean = true;

function Update () {
	if (play) {
		if (magnetBool) {
			if (playerObject != null) {
				target.x = playerObject.transform.position.x;
				target.y = playerObject.transform.position.y;
				if (Vector3.Distance(gameObject.transform.position, target) < 5) {
					transform.position = Vector3.Lerp (
				    transform.position, target,
				    Time.deltaTime * 3 * 1/Mathf.Pow(Vector3.Distance(gameObject.transform.position, target),2));
			    }
		    }
		}
	}
}
function magnetSwitch (x : boolean) {
	magnetBool = x;
	
}

function pauseGame () {
	play = false;
}
function resumeGame () {
	play = true;
}