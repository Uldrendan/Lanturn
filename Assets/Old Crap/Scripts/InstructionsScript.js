#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp() {
	for each (t in GameObject.FindGameObjectsWithTag("instructions")){
		t.GetComponent.<Renderer>().enabled = true;
		t.GetComponent.<Collider2D>().enabled = true;
	}
	GameObject.Find("Options").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("Options").GetComponent.<Collider2D>().enabled = false;
	gameObject.GetComponent.<Renderer>().enabled = false;
	gameObject.GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("MainMenuScores").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("MainMenuScores").GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("PausePlay").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("PausePlay").GetComponent.<Collider2D>().enabled = false;
	
	
	GameObject.Find("MenuSwipe").SendMessage("help", true);

}