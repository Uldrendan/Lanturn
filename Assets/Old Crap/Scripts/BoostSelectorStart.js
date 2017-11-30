#pragma strict

var fileName : String;

var boost1 : Transform;
var boost2 : Transform;
var boost3 : Transform;
var boostNumber : int = 0;

var boostButton : GameObject;
var boostLabel : GameObject;

var boost1Tiers : GameObject;
var boost2Tiers : GameObject;
var boost3Tiers : GameObject;

var characterObject : GameObject;

function Start () {

	try {
			var bsr = new StreamReader(Application.persistentDataPath + "/" + fileName);
			var line = bsr.ReadLine();
			boostNumber = parseInt(line);
			bsr.Close();
		}
		catch (e) {
			Debug.Log("file not found");
		}
		
	if (boostNumber == 1) {
		gameObject.transform.position.x = boost1.position.x;
		gameObject.transform.position.y = boost1.position.y;
		gameObject.GetComponent.<Renderer>().enabled = true;
		boost1Tiers.SendMessage("ActivateBoost");
	}
	else if (boostNumber == 2) {
		gameObject.transform.position.x = boost2.position.x;
		gameObject.transform.position.y = boost2.position.y;
		gameObject.GetComponent.<Renderer>().enabled = true;
		boost2Tiers.SendMessage("ActivateBoost");
	}
	else if (boostNumber == 3) {
		gameObject.transform.position.x = boost3.position.x;
		gameObject.transform.position.y = boost3.position.y;
		gameObject.GetComponent.<Renderer>().enabled = true;
		boost3Tiers.SendMessage("ActivateBoost");
	}
	
	boostButton.SendMessage("ChangeBoost", boostNumber);
	boostLabel.SendMessage("ChangeBoost", boostNumber);
	Debug.Log("Sendingmessage" + boostNumber);
	characterObject.SendMessage("ChangeBoost", boostNumber);
}

function Update () {

}

function tutorialButton () {
	gameObject.GetComponent.<Renderer>().enabled = false;
	boostNumber = 0;
	var bsw = new StreamWriter(Application.persistentDataPath + "/" + fileName);
	bsw.Write(boostNumber);
	bsw.Close();
}