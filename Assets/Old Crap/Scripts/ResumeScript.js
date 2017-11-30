#pragma strict

function Start () {

}

function Update () {
	//if (gameObject.name == "PausePlay" && Input.GetKeyDown("p") && collider2D.enabled == true) gameObject.SendMessage("OnMouseDown");
	//if (gameObject.name == "PausePlay" && Input.GetKeyUp("p") && collider2D.enabled == true) gameObject.SendMessage("OnMouseUp");
}
var duplicate : GameObject;


var tutBool : boolean = false;
var tutorialPlay : GameObject;

function OnMouseUp() {

//Debug.LogError("up");
	if (!tutBool){
	
	GameObject.Find("Main Camera").SendMessage("gameA");
	for each (t in GameObject.FindGameObjectsWithTag("Platform")){
		t.SendMessage("resumeGame");
	}
	for each (t in GameObject.FindGameObjectsWithTag("gold")){
		t.SendMessage("resumeGame");
	}
	GameObject.Find("Ball").SendMessage("resumeGame");
	GameObject.Find("Main Camera").SendMessage("resumeGame");
	GameObject.Find("PlatformSpawn").SendMessage("resumeGame");
	for each (t in GameObject.FindGameObjectsWithTag("menu")){
		t.GetComponent.<Renderer>().enabled = false;
		t.GetComponent.<Collider2D>().enabled = false;
	}
	for each (t in GameObject.FindGameObjectsWithTag("gameItem")){
		if (t.name != "BoostButton") t.GetComponent.<Collider2D>().enabled = true;
		t.GetComponent.<Renderer>().enabled = true;
		
	}
	for each (t in GameObject.FindGameObjectsWithTag("wall")){
		t.SendMessage("resumeGame");
	}
	GameObject.Find("Return Menu").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("Return Menu").GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("Spotlight").GetComponent.<Light>().intensity = 0;
	gameObject.GetComponent.<Renderer>().enabled = false;
	gameObject.GetComponent.<Collider2D>().enabled = false;
	duplicate.GetComponent.<Renderer>().enabled = false;
	duplicate.GetComponent.<Collider2D>().enabled = false;
	//GameObject.Find("BoostButton").collider2D.enabled = true;
	GameObject.Find("Ball").gameObject.SendMessage("boostButtonOn");
	/*
	GameObject.Find("ButtonOverlay1").renderer.enabled = true;
	GameObject.Find("ButtonOverlay1").collider2D.enabled = true;
	GameObject.Find("ButtonOverlay2").renderer.enabled = true;
	GameObject.Find("ButtonOverlay2").collider2D.enabled = true;
	*/
	}
	
	else {
		var script : TutorialPlay;
		script = tutorialPlay.GetComponent(TutorialPlay);
		script.textCounter = 0;
		script.stage++;
		tutBool = false;
		
		GameObject.Find("Main Camera").SendMessage("gameA");
		for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
			t.SendMessage("resumeGame");
		}
		GameObject.Find("Ball").SendMessage("resumeGame");
		GameObject.Find("Main Camera").SendMessage("resumeGame");
		for each (t in GameObject.FindGameObjectsWithTag("menu")){
			t.GetComponent.<Renderer>().enabled = false;
			t.GetComponent.<Collider2D>().enabled = false;
		}
		GameObject.Find("Return Menu").GetComponent.<Renderer>().enabled = false;
		GameObject.Find("Return Menu").GetComponent.<Collider2D>().enabled = false;
		GameObject.Find("Spotlight").GetComponent.<Light>().intensity = 0;
		gameObject.GetComponent.<Renderer>().enabled = false;
		gameObject.GetComponent.<Collider2D>().enabled = false;
		duplicate.GetComponent.<Renderer>().enabled = false;
		duplicate.GetComponent.<Collider2D>().enabled = false;
	}
}



function tutorial () {
	tutBool = true;
}