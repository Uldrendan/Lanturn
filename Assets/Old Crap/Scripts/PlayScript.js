#pragma strict

function Start () {

}

var Soundrumble : AudioClip;

function OnMouseUp() {
	for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
		Destroy(t);
	}
	startingSequence = true;
	GameObject.Find("Main Camera").SendMessage("startingSequence",true);
	GameObject.Find("Main Camera").SendMessage("gameA");
	for each (t in GameObject.FindGameObjectsWithTag("menu")){
		t.GetComponent.<Collider2D>().enabled=false;
	}
	
	GetComponent.<AudioSource>().clip = Soundrumble;
	GetComponent.<AudioSource>().loop = false;
	GetComponent.<AudioSource>().Play();

}

var startingSequence : boolean = false;
var ballLight : Transform;
var ball : GameObject;
var ambientColor : Color;
var menuLight : GameObject;
var gameMusic : AudioClip;

var mainCamera : GameObject;
var mainCameraMovementStage : int = 0;

function Update () {
	if (startingSequence) {
		GameObject.Find("MainMenuScores").GetComponent.<Renderer>().enabled = false;
		GameObject.Find("MainMenuScores").GetComponent.<Collider2D>().enabled = false;
		if (ballLight.position.z > -2){
			mainCamera.GetComponent(AudioSource).volume -= 0.01;
			ballLight.position.z -= 0.02;
			ambientColor = RenderSettings.ambientLight;
			ambientColor.r -= 0.003;
			ambientColor.g -= 0.003;
			ambientColor.b -= 0.003;
			RenderSettings.ambientLight = ambientColor;
			menuLight.GetComponent.<Light>().intensity -= 0.09;
			
			if (mainCameraMovementStage == 0){
				mainCameraMovementStage = 1;
				mainCamera.transform.position.x = 0;
				mainCamera.transform.position.y = 0.0625;
			}
			else if (mainCameraMovementStage == 1){
				mainCameraMovementStage = 2;
				mainCamera.transform.position.x = 0.0625;
				mainCamera.transform.position.y = 0;
			}
			else if (mainCameraMovementStage == 2){
				mainCameraMovementStage = 3;
				mainCamera.transform.position.x = 0;
				mainCamera.transform.position.y = -0.0625;
			}
			else if (mainCameraMovementStage == 3){
				mainCameraMovementStage = 0;
				mainCamera.transform.position.x = -0.0625;
				mainCamera.transform.position.y = 0;
			}
		}
		else {
			ball.GetComponent(Animator).enabled = false;
			//audio.Stop();
			for each (t in GameObject.FindGameObjectsWithTag("floor")){
				t.SendMessage("startGame");
			}
			GameObject.Find("Ball").SendMessage("startGame");
			GameObject.Find("Main Camera").SendMessage("startGame");
			GameObject.Find("PlatformSpawn").SendMessage("startGame");
			GameObject.Find("Save").SendMessage("startGame");
			GameObject.Find("OptionsBack").SendMessage("startGame");
			GameObject.Find("InstructionsBack").SendMessage("startGame");
			GameObject.Find("Go").SendMessage("startGame");
			for each (t in GameObject.FindGameObjectsWithTag("menu")){
				t.GetComponent.<Renderer>().enabled = false;
			}
			for each (t in GameObject.FindGameObjectsWithTag("gameItem")){
				t.GetComponent.<Renderer>().enabled = true;
				t.GetComponent.<Collider2D>().enabled = true;
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("resumeGame");
			}
			GameObject.Find("Lanturn").GetComponent.<Renderer>().enabled = false;
			GameObject.Find("Lanturn").GetComponent.<Collider2D>().enabled = false;
			startingSequence = false;
			GameObject.Find("Main Camera").SendMessage("startingSequence",false);
			
			
			mainCamera.transform.position.x = 0;
			mainCamera.transform.position.y = 0;
		}
		
	}
}