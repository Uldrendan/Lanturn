#pragma strict

function Start () {

}

function Update () {
	
}


var TutorialPlay : GameObject;
var fuelBlocker : GameObject;
var pickaxeBlocker : GameObject;

function OnMouseUp () {
//rewriting gold and tiers of boost1
	var gw = new StreamWriter(Application.persistentDataPath + "/NewGold.txt");
	gw.Write(0);
	gw.Close();
	GameObject.Find("Gold").SendMessage("Start");
	GameObject.Find("BuyBoost1").SendMessage("tutorialButton");
	GameObject.Find("BoostSelector").SendMessage("tutorialButton");
	GameObject.Find("Boost1").SendMessage("tutorialButton");
	GameObject.Find("BoostButton").SendMessage("tutorialButton");
	GameObject.Find("BuyBoost6").SendMessage("tutorialButton");
	GameObject.Find("Boost6").SendMessage("tutorialButton");
	GameObject.Find("MenuSwipe").SendMessage("help", true);


	Debug.Log("Starting Tutorial");
	GameObject.Find("Lanturn").transform.position.y = 8;
	for each (t in GameObject.FindGameObjectsWithTag("menu")){
		t.GetComponent.<Renderer>().enabled = false;
		t.GetComponent.<Collider2D>().enabled = false;
	}
	TutorialPlay.GetComponent.<Renderer>().enabled = true;
	TutorialPlay.GetComponent.<Collider2D>().enabled = true;
	fuelBlocker.GetComponent.<Renderer>().enabled = true;
	fuelBlocker.GetComponent.<Collider2D>().enabled = true;
	pickaxeBlocker.GetComponent.<Renderer>().enabled = true;
	pickaxeBlocker.GetComponent.<Collider2D>().enabled = true;
}