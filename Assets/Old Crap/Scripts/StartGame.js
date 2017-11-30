#pragma strict

function Start () {

}

var startingSequence : boolean = false;
var ballLight : Transform;
var ball : GameObject;
var ambientColor : Color;


function Update () {
	if (startingSequence) {
		if (ballLight.position.z > -2){
			ballLight.position.z -= 0.01;
			ambientColor = RenderSettings.ambientLight;
			ambientColor.r -= 0.001;
			ambientColor.g -= 0.001;
			ambientColor.b -= 0.001;
			RenderSettings.ambientLight = ambientColor;
		}
		else {
			for each (t in GameObject.FindGameObjectsWithTag("floor")){
				t.SendMessage("startGame");
			}
			GameObject.Find("Ball").SendMessage("startGame");
			GameObject.Find("Main Camera").SendMessage("startGame");
			GameObject.Find("PlatformSpawn").SendMessage("startGame");
			Destroy(GameObject.Find("Store"));
			startingSequence = false;
		}
		
	}
	if (Input.GetKey (KeyCode.Space)) {
		startingSequence = true;
		gameObject.SendMessage("gameA");
	}
	if (Input.acceleration.x > 0.9) {
		startingSequence = true;
	}
}