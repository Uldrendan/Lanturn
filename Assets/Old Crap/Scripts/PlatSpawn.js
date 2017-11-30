#pragma strict

//platformSpawn y position in landscape: -5.68648

function startGame () {
	play = true;

}
function resumeGame () {
	play = true;

}
function pauseGame () {
	play = false;
}

var timer : float = 0;
var spawnDelay : int = 90;
var newPlatform : Transform;
var newPlatform2 : Transform;
private var speedTimer : int = 0;
var speedUpDelay : int = 10;
var speed : float = 1;
var play : boolean = false;
var ranNum : int = 100;
var magnetBool : boolean = false;

var bootRarity : float = 0.5;
var magnetRarity : float = 0.5;
var fuelRarity : float = 0.5;


var frameCounter : int = 0;
var frameTotal : int = 0;
var DebugInfo : GameObject;
/*
function Start () {
	fc();
}

function fc () {
	while (true) {
	yield WaitForSeconds(1);
	frameTotal = frameCounter;
	frameCounter = 0;
	}
}
*/
function Update () {
	
	//frameCounter++;
	//if (Time.deltaTime > 0.025)
	//DebugInfo.GetComponent(TextMesh).text = "" + frameTotal;
	
	if (play){
	timer += Time.deltaTime * 59;//.361;
	//timer += 1;
	if (timer >= spawnDelay) {
		ranNum = Random.Range(0,100);
		if (ranNum < 30)//30
			Instantiate(newPlatform2, transform.position, transform.rotation);
		else Instantiate(newPlatform, transform.position, transform.rotation);
		speedTimer += 1;
		timer = 0;
		sendSpeeds();
	}
	if (speedTimer == speedUpDelay) {
		speed = speed + 0.2;//was 0.5
		speedTimer = 0;
		spawnDelay -= (spawnDelay* 2)/17; //was /6
		speedUpDelay += speedUpDelay/2;
		
	}
	}
}

function sendSpeeds () {
	for each (t in GameObject.FindGameObjectsWithTag("Platform")){
		t.SendMessage("speedUp", speed);
	}
	for each (t in GameObject.FindGameObjectsWithTag("wall")){
		t.SendMessage("speedUp", speed);
	}
	for each (t in GameObject.FindGameObjectsWithTag("gold")){
		t.SendMessage("magnetSwitch", magnetBool);
	}
	
		
}

function magnetSwitch (x : boolean) {
	magnetBool = x;
	for each (t in GameObject.FindGameObjectsWithTag("gold")){
		t.SendMessage("magnetSwitch", magnetBool);
	}
}
