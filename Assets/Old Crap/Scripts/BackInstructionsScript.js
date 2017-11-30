#pragma strict

function Start () {

}

function Update () {

}

var play : boolean = false;


function OnMouseUp() {
	for each (t in GameObject.FindGameObjectsWithTag("instructions")){
		t.GetComponent.<Renderer>().enabled = false;
		t.GetComponent.<Collider2D>().enabled = false;
	}
	
	GameObject.Find("Options").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("Options").GetComponent.<Collider2D>().enabled = true;
	GameObject.Find("Instructions").GetComponent.<Renderer>().enabled = true;
	GameObject.Find("Instructions").GetComponent.<Collider2D>().enabled = true;
	if (!play) {
		GameObject.Find("MainMenuScores").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("MainMenuScores").GetComponent.<Collider2D>().enabled = true;
	}
	
	GameObject.Find("MenuSwipe").SendMessage("help", false);
	
	if (play) {
		GameObject.Find("PausePlay").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("PausePlay").GetComponent.<Collider2D>().enabled = true;
	}
	
}




function startGame () {
	play = true;
}