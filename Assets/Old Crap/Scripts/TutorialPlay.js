#pragma strict

var Soundrumble : AudioClip;
var Soundlamp : AudioClip;
var Soundradio1 : AudioClip;
var Soundradio2 : AudioClip;
var clipPlayed : boolean = false;

function Start () {

}

var stage : int = 0;

var rumbleCounter : float = 0;

var ballLight : Transform;
var ambientColor : Color;
var menuLight : GameObject;
var gameMusic : AudioClip;

var mainCamera : GameObject;
var mainCameraMovementStage : int = 0;

var currentText : String[];
var tutorialText : GameObject;
var textCounter : int = 0;
var textTimer : int = 0;
var text1 : String[];
var text2 : String[];
var text3 : String[];
var text4 : String[];
var text5 : String[];
var textSpeedSlow : int = 5;
var textSpeedFast : int = 2;

var waitingTime : int = 0;

var tutorialNext : GameObject;

var arrow : GameObject;
var storeBack : GameObject;

var playerObject : GameObject;

var playButton : GameObject;

var pauseAll : boolean = false;
var playAll : boolean = true;

function Update () {
	if (!pauseAll && playerObject != null && playerObject.gameObject.transform.position.y > 6) {
		for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
			t.SendMessage("speedUp", 0);
		}
		for each (t in GameObject.FindGameObjectsWithTag("wall")){
			t.SendMessage("speedUp", 0);
		}
		pauseAll = true;
		playAll = false;
	}
	if (!playAll && playerObject != null && playerObject.gameObject.transform.position.y < -4) {
		for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
			t.SendMessage("speedUp", 0.5);
		}
		for each (t in GameObject.FindGameObjectsWithTag("wall")){
			t.SendMessage("speedUp", 0.5);
		}
		playAll = true;
		pauseAll = false;
	}



	if (stage == 1) {
		if (!clipPlayed) {
			playButton.GetComponent.<AudioSource>().clip = Soundrumble;
			playButton.GetComponent.<AudioSource>().loop = false;
			playButton.GetComponent.<AudioSource>().Play();
			clipPlayed = true;
		}
		tutorialText.GetComponent(TextMesh).text = "*RUMBLE*";
		GameObject.Find("TutorialPlay").GetComponent.<Collider2D>().enabled = false;
		if (rumbleCounter > -2){
			mainCamera.GetComponent(AudioSource).volume -= 0.01;
			rumbleCounter -= 0.02;
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
			playerObject.GetComponent(Animator).enabled = false;
			//audio.Stop();
			mainCamera.transform.position.x = 0;
			mainCamera.transform.position.y = 0;
			GameObject.Find("Lanturn").GetComponent.<Renderer>().enabled = false;
			GameObject.Find("Lanturn").GetComponent.<Collider2D>().enabled = false;
			GameObject.Find("TutorialPlay").GetComponent.<Renderer>().enabled = false;
			stage = 2;
			tutorialText.GetComponent(TextMesh).text = "";
		}
	}
	if (stage == 2) {
		currentText = text1;
		if (waitingTime < 30) {
			waitingTime++;
		}
		else if (currentText[textCounter] != "null") {
			if (textTimer < textSpeedSlow) textTimer++;
			else {
				tutorialText.GetComponent(TextMesh).text += currentText[textCounter];
				textTimer = 0;
				textCounter++;
			}
		}
		else {
			//stage = 3;
			tutorialNext.GetComponent.<Renderer>().enabled = true;
			tutorialNext.GetComponent.<Collider2D>().enabled = true;
		}
		
	}
	if (stage == 3) {
		if (!clipPlayed) {
			GetComponent.<AudioSource>().clip = Soundlamp;
			GetComponent.<AudioSource>().loop = false;
			GetComponent.<AudioSource>().Play();
			clipPlayed = true;
		}
		if (ballLight.position.z > -2) {
			tutorialText.GetComponent(TextMesh).text = "*click*";
			ballLight.position.z -= 0.02;
		}
		else {
			tutorialNext.GetComponent.<Renderer>().enabled = true;
			tutorialNext.GetComponent.<Collider2D>().enabled = true;
		}
	}
	if (stage == 4) {
		if (!clipPlayed) {
			GetComponent.<AudioSource>().clip = Soundradio1;
			GetComponent.<AudioSource>().loop = false;
			GetComponent.<AudioSource>().Play();
			clipPlayed = true;
		}
		currentText = text2;
		if (currentText[textCounter] != "null") {
			if (textTimer < textSpeedFast) textTimer++;
			else {
				tutorialText.GetComponent(TextMesh).text += currentText[textCounter];
				textTimer = 0;
				textCounter++;
			}
		}
		else {
			//stage = 3;
			tutorialNext.GetComponent.<Renderer>().enabled = true;
			tutorialNext.GetComponent.<Collider2D>().enabled = true;
		}
		
	}
	if (stage == 5) {
		if (!clipPlayed) {
			GetComponent.<AudioSource>().clip = Soundradio2;
			GetComponent.<AudioSource>().loop = true;
			GetComponent.<AudioSource>().Play();
			clipPlayed = true;
		}
		currentText = text3;
		if (currentText[textCounter] != "null") {
			if (textTimer < textSpeedFast) textTimer++;
			else {
				tutorialText.GetComponent(TextMesh).text += currentText[textCounter];
				textTimer = 0;
				textCounter++;
			}
		}
		else {
			//stage = 3;
			tutorialNext.GetComponent.<Renderer>().enabled = true;
			tutorialNext.GetComponent.<Collider2D>().enabled = true;
		}
		
	}
	if (stage == 6) {
		currentText = text4;
		if (currentText[textCounter] != "null") {
			if (textTimer < textSpeedFast) textTimer++;
			else {
				tutorialText.GetComponent(TextMesh).text += currentText[textCounter];
				textTimer = 0;
				textCounter++;
			}
		}
		else {
			//stage = 3;
			tutorialNext.GetComponent.<Renderer>().enabled = true;
			tutorialNext.GetComponent.<Collider2D>().enabled = true;
		}
		
	}
	if (stage == 7) {
		tutorialText.GetComponent(TextMesh).characterSize = 0.15;
		tutorialText.GetComponent(TextMesh).text = "(Once the platforms start to lift,\ntilt the device left and right to guide\nthe miner to the bottom. If he touches\nthe top of the screen, he will die.)";
		tutorialNext.SendMessage("startTimer", 150);
		rumbleCounter = 0;
	}
	if (stage == 8) {
		if (!clipPlayed) {
			playButton.GetComponent.<AudioSource>().clip = Soundrumble;
			playButton.GetComponent.<AudioSource>().loop = false;
			playButton.GetComponent.<AudioSource>().Play();
			clipPlayed = true;
		}
		tutorialText.GetComponent(TextMesh).characterSize = 0.225;
		tutorialText.GetComponent(TextMesh).text = "*RUMBLE*";
		if (rumbleCounter > -2){
			rumbleCounter -= 0.02;
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
			mainCamera.transform.position.x = 0;
			mainCamera.transform.position.y = 0;
			tutorialNext.GetComponent.<Renderer>().enabled = true;
			tutorialNext.GetComponent.<Collider2D>().enabled = true;
		}
	}
	if (stage == 9) {
		currentText = text5;
		if (currentText[textCounter] != "null") {
			if (textTimer < textSpeedFast) textTimer++;
			else {
				tutorialText.GetComponent(TextMesh).text += currentText[textCounter];
				textTimer = 0;
				textCounter++;
			}
		}
		else {
			//stage = 3;
			tutorialNext.GetComponent.<Renderer>().enabled = true;
			tutorialNext.GetComponent.<Collider2D>().enabled = true;
			waitingTime = 0;
		}
	}
	if (stage == 10) {
		for each (t in GameObject.FindGameObjectsWithTag("floor")){
			t.SendMessage("tutorial");
		}
		for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
			t.SendMessage("speedUp", 0.5);
		}
		for each (t in GameObject.FindGameObjectsWithTag("wall")){
			t.SendMessage("resumeGame");
			t.SendMessage("speedUp", 0.5);
		}
		for each (t in GameObject.FindGameObjectsWithTag("gameItem")){
			if (t.name != "BoostQuantity" && t.name != "Pause" && t.name != "BoostButton" ) {
				t.GetComponent.<Renderer>().enabled = true;
				t.GetComponent.<Collider2D>().enabled = true;
			}
		}
		GameObject.Find("Ball").SendMessage("startGame");
		GameObject.Find("Ball").SendMessage("tutorial");
		GameObject.Find("Main Camera").SendMessage("startGame");
		GameObject.Find("BoostSelector").GetComponent.<Renderer>().enabled = false;
		GameObject.Find("Ball").SendMessage("FuelOff");
		GameObject.Find("Main Camera").SendMessage("FuelOff");
		GameObject.Find("FuelAmount").GetComponent.<Renderer>().enabled = false;
		stage = 11;
	}
	//stage 11 represents gameplay
	if (stage == 12) {
		arrow.SendMessage("blinking", true);
		arrow.GetComponent.<Renderer>().enabled = true;
		arrow.transform.position.y = -7;
		arrow.transform.position.x = 5.5;
		arrow.transform.localScale.y = -1;
		arrow.transform.localScale.x = 1;
		tutorialNext.SendMessage("startTimer", 150);
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).characterSize = 0.15;
		tutorialText.GetComponent(TextMesh).text = "(You have collected 10 pieces of gold.\nYour multiplier is now 2, meaning each\npiece of gold is now worth 2. Also,\nyour headlamp is now brighter.)";
		
	}
	if (stage == 13) {
		arrow.SendMessage("blinking", false);
		GameObject.Find("Pause").SendMessage("blinking", true);
		tutorialText.GetComponent(TextMesh).text = "(Press the pause button to spend\nyour gold in the store.)";
		arrow.GetComponent.<Renderer>().enabled = true;
		arrow.transform.position.y = 8;
		arrow.transform.position.x = 6;
		arrow.transform.localScale.y = 1;
		GameObject.Find("Pause").SendMessage("tutorial");
		GameObject.Find("Pause").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("Pause").GetComponent.<Collider2D>().enabled = true;
		
	}
	if (stage == 14) {
		GameObject.Find("Pause").SendMessage("blinking", false);
		GameObject.Find("Store").SendMessage("blinking", true);
		tutorialText.GetComponent(TextMesh).characterSize = 0.225;
		arrow.transform.position.y = 0.8;
		arrow.transform.position.x = 4.8;
		arrow.transform.localScale.y = -1;
		tutorialText.transform.position.y = 6;
		tutorialText.GetComponent(TextMesh).text = "(Open the store.)";
		GameObject.Find("Store").SendMessage("tutorial");
	}
	if (stage == 15) {
		GameObject.Find("Store").SendMessage("blinking", false);
		GameObject.Find("BuyBoost1").SendMessage("blinking", true);
		storeBack.GetComponent.<Collider2D>().enabled = false;
		GameObject.Find("HelpStore").GetComponent.<Collider2D>().enabled = false;
		GameObject.Find("BuyBoost1").SendMessage("tutorial");
		GameObject.Find("StoreTitle").GetComponent.<Renderer>().enabled = false;
		tutorialText.transform.position.x = 14;
		tutorialText.transform.position.y = 8;
		tutorialText.GetComponent(TextMesh).characterSize = 0.15;
		tutorialText.GetComponent(TextMesh).text = "(Buy the Pickaxe.)";
		arrow.transform.position.y = 5.1;
		arrow.transform.position.x = 15.2;
	}
	if (stage == 16) {
		GameObject.Find("BuyBoost1").SendMessage("blinking", false);
		GameObject.Find("Boost1Question").SendMessage("blinking", true);
		GameObject.Find("Boost1Back").SendMessage("tutorial");
		tutorialText.GetComponent(TextMesh).text = "(Read its description.)";
		arrow.transform.position.x = 9.5;
	}
	if (stage == 17) {
		GameObject.Find("Boost1Question").SendMessage("blinking", false);
		GameObject.Find("PickAxe").SendMessage("blinking", true);
		GameObject.Find("PickAxe").SendMessage("tutorial");
		tutorialText.GetComponent(TextMesh).text = "(Equip it. Note: changing tools mid-level\n is only permitted on tutorial level.)";
		arrow.transform.position.x = 8.55;
	}
	if (stage == 18) {
		GameObject.Find("PickAxe").SendMessage("blinking", false);
		storeBack.SendMessage("blinking", true);
		GameObject.Find("BoostButton").GetComponent.<Renderer>().enabled = false;
		GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = false;
		storeBack.SendMessage("tutorial");
		storeBack.GetComponent.<Collider2D>().enabled = true;
		tutorialText.GetComponent(TextMesh).text = "(Close the store.)";
		arrow.transform.position.y = -7.5;
	}
	if (stage == 19) {
		GameObject.Find("PickAxe").SendMessage("deactivate");
		storeBack.SendMessage("blinking", false);
		GameObject.Find("Resume").SendMessage("blinking", true);
		GameObject.Find("BoostButton").SendMessage("blinking", true);
		GameObject.Find("Resume").SendMessage("tutorial");
		tutorialText.transform.position.x = 0;
		tutorialText.transform.position.y = 6;
		tutorialText.GetComponent(TextMesh).text = "(Resume the game.)";
		GameObject.Find("Resume").GetComponent.<Collider2D>().enabled = true;
		arrow.transform.position.x = 0;
		arrow.transform.position.y = -1;
		GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = true;
		GameObject.Find("BoostButton").SendMessage("tutorial");
	}
	if (stage == 20) {//game is live then paused
		arrow.GetComponent.<Renderer>().enabled = false;
		for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("pauseGame");
			}
		GameObject.Find("Ball").SendMessage("pauseGame");
		GameObject.Find("Main Camera").SendMessage("pauseGame");
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).text = "(To use the pickaxe, walk up to the\nwall, and while you are touching it,\n press the pickaxe button.)";
		tutorialNext.SendMessage("startTimer", 150);
		
	}
	if (stage == 21) {
		tutorialText.GetComponent(TextMesh).text = "(To use the pickaxe, walk up to the\nwall, and while you are touching it,\n press the pickaxe button.)";
		if (playAll) {
			for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("speedUp", 0.5);
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("resumeGame");
				t.SendMessage("speedUp", 0.5);
			}
		}
		GameObject.Find("Ball").SendMessage("resumeGame");
		GameObject.Find("Main Camera").SendMessage("resumeGame");
		//tutorialText.GetComponent(TextMesh).text = "";
		stage = 22;
	}
	
	
			
	if (stage == 22) {//game is live
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).text = "(To use the pickaxe, walk up to the\nwall, and while you are touching it,\n press the pickaxe button.)";
		arrow.GetComponent.<Renderer>().enabled = true;		
		GameObject.Find("Resume").SendMessage("blinking", false);
		GameObject.Find("Ball").SendMessage("tutorial2");
		GameObject.Find("BoostButton").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("BoostQuantity").GetComponent.<Renderer>().enabled = true;
		arrow.transform.position.y = -7.5;
	}
	if (stage == 23) {
		arrow.SendMessage("blinking", false);
		if (waitingTime < 15) {
			waitingTime++;
		}
		else {
			arrow.GetComponent.<Renderer>().enabled = false;
			for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("pauseGame");
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("pauseGame");
			}
			GameObject.Find("Ball").SendMessage("pauseGame");
			GameObject.Find("Main Camera").SendMessage("pauseGame");
			stage = 24;
		}
	
	}
	if (stage == 24) {
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).text = "(You just hit a spike! Spikes don't\nkill you, but they ruin your multiplier\nand dim your headlamp back to normal.\nSome store items can help against\nspikes, such as the boots and fuel.)";
		tutorialNext.SendMessage("startTimer", 150);
	}
//	if (stage == 25) {
		//tutorialText.transform.position.y = 10;
//		tutorialText.GetComponent(TextMesh).text = "(The tutorial is over, you will now\nbe sent to the end-game screen.)";
//		var gw = new StreamWriter(Application.persistentDataPath + "/Tutorialnewtest.txt");
//		gw.Write("false");
//		gw.Close();
//		tutorialNext.SendMessage("startTimer", 90);
//		stage = 26;
//		stage = 27;
//	}
	
	if (stage == 25) {
		//GameObject.Find("Main Camera").SendMessage("resumeGame");
		//tutorialText.GetComponent(TextMesh).text = "";
		//Destroy(GameObject.Find("Ball"));
		if (playAll) {
			for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("speedUp", 0.5);
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("resumeGame");
				t.SendMessage("speedUp", 0.5);
			}
		}
		GameObject.Find("Ball").SendMessage("resumeGame");
		GameObject.Find("Ball").SendMessage("tutorial3");
		GameObject.Find("Main Camera").SendMessage("resumeGame");
		stage = 26;
	}
	if (stage == 27) {
		for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
			t.SendMessage("pauseGame");
		}
		GameObject.Find("Ball").SendMessage("pauseGame");
		GameObject.Find("Main Camera").SendMessage("pauseGame");
		bugWall.GetComponent.<Collider2D>().enabled = false;
		bugFloor.GetComponent.<Collider2D>().enabled = true;
		stage = 28;
	}
	if (stage == 28) {
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).text = "(Oh no! You're stuck, and you're\npickaxe is broken. You're going to\nneed something else to help you.)";
		tutorialNext.SendMessage("startTimer", 90);
	}
	if (stage == 29) {
		GameObject.Find("Pause").SendMessage("blinking", true);
		tutorialText.GetComponent(TextMesh).text = "(Press the pause button to spend\nyour gold in the store.)";
		arrow.GetComponent.<Renderer>().enabled = true;
		arrow.transform.position.y = 8;
		arrow.transform.position.x = 6;
		arrow.transform.localScale.y = 1;
		GameObject.Find("Pause").SendMessage("tutorial");
		GameObject.Find("Pause").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("Pause").GetComponent.<Collider2D>().enabled = true;
		GameObject.Find("Resume").GetComponent.<Collider2D>().enabled = false;
		
	}
	if (stage == 30) {
		GameObject.Find("Pause").SendMessage("blinking", false);
		GameObject.Find("Store").SendMessage("blinking", true);
		tutorialText.GetComponent(TextMesh).characterSize = 0.225;
		arrow.transform.position.y = 0.8;
		arrow.transform.position.x = 4.8;
		arrow.transform.localScale.y = -1;
		tutorialText.transform.position.y = 6;
		tutorialText.GetComponent(TextMesh).text = "(Open the store.)";
		GameObject.Find("Store").SendMessage("tutorial");
	}
	if (stage == 31) {
		GameObject.Find("Store").SendMessage("blinking", false);
		GameObject.Find("BuyBoost6").SendMessage("blinking", true);
		storeBack.GetComponent.<Collider2D>().enabled = false;
		GameObject.Find("HelpStore").GetComponent.<Collider2D>().enabled = false;
		GameObject.Find("BuyBoost6").SendMessage("tutorial");
		GameObject.Find("StoreTitle").GetComponent.<Renderer>().enabled = false;
		tutorialText.transform.position.x = 13;
		tutorialText.transform.position.y = 8;
		tutorialText.GetComponent(TextMesh).characterSize = 0.15;
		tutorialText.GetComponent(TextMesh).text = "(Buy the Fuel.)";
		arrow.transform.position.y = -6.15;
		arrow.transform.position.x = 15.2;
	}
	if (stage == 32) {
		GameObject.Find("BuyBoost6").SendMessage("blinking", false);
		GameObject.Find("Boost6Question").SendMessage("blinking", true);
		GameObject.Find("Boost6Back").SendMessage("tutorial");
		tutorialText.GetComponent(TextMesh).text = "(Read its description.)";
		arrow.transform.position.x = 9.5;
	}
	if (stage == 33) {
		GameObject.Find("Boost6Question").SendMessage("blinking", false);
		storeBack.SendMessage("blinking", true);
		storeBack.SendMessage("tutorial");
		storeBack.GetComponent.<Collider2D>().enabled = true;
		tutorialText.GetComponent(TextMesh).text = "(Close the store. Note: No need\nto equip boosts)";
		arrow.transform.position.x = 8.55;
		arrow.transform.position.y = -7.5;
	}
	if (stage == 34) {
		storeBack.SendMessage("blinking", false);
		GameObject.Find("Resume").SendMessage("blinking", true);
		GameObject.Find("Resume").SendMessage("tutorial");
		tutorialText.transform.position.x = 0;
		tutorialText.transform.position.y = 6;
		tutorialText.GetComponent(TextMesh).text = "(Resume the game.)";
		GameObject.Find("Resume").GetComponent.<Collider2D>().enabled = true;
		arrow.transform.position.x = 0;
		arrow.transform.position.y = -1;
	}
	if (stage == 35) {//game is live then paused
		arrow.GetComponent.<Renderer>().enabled = false;
		for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("pauseGame");
			}
		GameObject.Find("Ball").SendMessage("pauseGame");
		GameObject.Find("Main Camera").SendMessage("pauseGame");
		GameObject.Find("ButtonOverlay1").SendMessage("blinking", true);
		GameObject.Find("ButtonOverlay2").SendMessage("blinking", true);
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).text = "(To use the jetpack, press and\nhold on the left or right side\nof the screen. If you run out\nof fuel, walk to the gas\ncan to pick up more.)";
		GameObject.Find("Ball").SendMessage("tutorial4");
		tutorialNext.SendMessage("startTimer", 150);
		
	}
	if (stage == 36) {
		tutorialText.GetComponent(TextMesh).text = "(To use the jetpack, press and\nhold on the left or right side\nof the screen. If you run out\nof fuel, walk to the gas\ncan to pick up more.)";
		if (playAll) {
			for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("speedUp", 0.5);
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("resumeGame");
				t.SendMessage("speedUp", 0.5);
			}
		}
		GameObject.Find("Ball").SendMessage("resumeGame");
		GameObject.Find("Main Camera").SendMessage("resumeGame");
		fuelPickup.GetComponent.<Renderer>().enabled = true;
		fuelPickup.GetComponent.<Collider2D>().enabled = true;
		GameObject.Find("ButtonOverlay1").SendMessage("blinking", false);
		GameObject.Find("ButtonOverlay2").SendMessage("blinking", false);
		stage = 37;
	}
	if (stage == 37) {
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).text = "(To use the jetpack, press and\nhold on the left or right side\nof the screen. If you run out\nof fuel, walk to the gas\ncan to pick up more.)";
	}
	if (stage == 38) {
		if (playerObject.gameObject.transform.position.y > 1.5) tutorialText.transform.position.y = 0.5;
		tutorialText.GetComponent(TextMesh).text = "(Good Job! The tutorial is over,\nyou will now be sent to the\nend-game screen.)";
		var gw = new StreamWriter(Application.persistentDataPath + "/NewTutorial.txt");
		gw.Write("false");
		gw.Close();
		tutorialNext.SendMessage("startTimer", 90);
		stage = 39;
	}
	if (stage == 40) {
		GameObject.Find("Main Camera").SendMessage("resumeGame");
		tutorialText.GetComponent(TextMesh).text = "";
		Destroy(GameObject.Find("Ball"));
	}
}

var fuelPickup : GameObject;
var bugWall : GameObject;
var bugFloor : GameObject;

















function OnMouseUp () {
	stage = 1;
	
}