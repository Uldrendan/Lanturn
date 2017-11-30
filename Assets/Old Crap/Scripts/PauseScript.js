#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown("p") && GetComponent.<Collider2D>().enabled == true) gameObject.SendMessage("OnMouseDown");
	if (Input.GetKeyUp("p") && GetComponent.<Collider2D>().enabled == true) gameObject.SendMessage("OnMouseUp");
}

var tutBool : boolean = false;
var tutorialPlay : GameObject;

function OnMouseUp() {
	if (!tutBool) {

	for each (t in GameObject.FindGameObjectsWithTag("Platform")){
		t.SendMessage("pauseGame");
	}
	for each (t in GameObject.FindGameObjectsWithTag("wall")){
		t.SendMessage("pauseGame");
	}
	for each (t in GameObject.FindGameObjectsWithTag("gold")){
		t.SendMessage("pauseGame");
	}
	GameObject.Find("Ball").SendMessage("pauseGame");
	GameObject.Find("Main Camera").SendMessage("pauseGame");
	GameObject.Find("PlatformSpawn").SendMessage("pauseGame");
	
	
	GameObject.Find("Resume").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("Resume").GetComponent.<Collider2D>().enabled = true;
	GameObject.Find("Options").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("Options").GetComponent.<Collider2D>().enabled = true;
	GameObject.Find("Instructions").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("Instructions").GetComponent.<Collider2D>().enabled = true;
	GameObject.Find("Store").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("Store").GetComponent.<Collider2D>().enabled = true;
	GameObject.Find("Return Menu").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("Return Menu").GetComponent.<Collider2D>().enabled = true;
	GameObject.Find("High Scores").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("High Scores").GetComponent.<Collider2D>().enabled = true;
	GameObject.Find("Spotlight").GetComponent.<Light>().intensity = 5;
	GameObject.Find("PausePlay").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("PausePlay").GetComponent.<Collider2D>().enabled = true;
	gameObject.GetComponent.<Renderer>().enabled = false;
	gameObject.GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = false;
	}
	/*
	GameObject.Find("ButtonOverlay1").renderer.enabled = false;
	GameObject.Find("ButtonOverlay1").collider2D.enabled = false;
	GameObject.Find("ButtonOverlay2").renderer.enabled = false;
	GameObject.Find("ButtonOverlay2").collider2D.enabled = false;
	*/
	
	
	else {
		GameObject.Find("Resume").GetComponent.<Renderer>().enabled = true;
		//GameObject.Find("Resume").collider2D.enabled = true;
		GameObject.Find("Options").GetComponent.<Renderer>().enabled = true;
		//GameObject.Find("Options").collider2D.enabled = true;
		GameObject.Find("Instructions").GetComponent.<Renderer>().enabled = true;
		//GameObject.Find("Instructions").collider2D.enabled = true;
		GameObject.Find("Store").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("Store").GetComponent.<Collider2D>().enabled = true;
		GameObject.Find("Return Menu").GetComponent.<Renderer>().enabled = true;
		//GameObject.Find("Return Menu").collider2D.enabled = true;
		GameObject.Find("High Scores").GetComponent.<Renderer>().enabled = true;
		//GameObject.Find("High Scores").collider2D.enabled = true;
		GameObject.Find("Spotlight").GetComponent.<Light>().intensity = 5;
		GameObject.Find("PausePlay").GetComponent.<Renderer>().enabled = true;
		//GameObject.Find("PausePlay").collider2D.enabled = true;
		gameObject.GetComponent.<Renderer>().enabled = false;
		gameObject.GetComponent.<Collider2D>().enabled = false;
		
		var script : TutorialPlay;
		script = tutorialPlay.GetComponent(TutorialPlay);
		script.textCounter = 0;
		script.stage++;
	}


}

function tutorial () {
	tutBool = true;
}