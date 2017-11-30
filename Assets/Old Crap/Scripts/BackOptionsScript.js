#pragma strict

function Start () {

}

function Update () {

}

var play : boolean = false;


function OnMouseUp() {
	for each (t in GameObject.FindGameObjectsWithTag("options")){
			t.GetComponent.<Renderer>().enabled = false;
			t.GetComponent.<Collider2D>().enabled = false;
		}
	for each (t in GameObject.FindGameObjectsWithTag("menu")){
		if (t.name != "Play"){
			if (t.name != "MainMenuScores" || !play) {
				t.GetComponent.<Renderer>().enabled = true;
				t.GetComponent.<Collider2D>().enabled = true;
			}
		}
		if (!play) {
			GameObject.Find("Play").GetComponent.<Renderer>().enabled = true;
			GameObject.Find("Play").GetComponent.<Collider2D>().enabled = true;
			GameObject.Find("Lanturn").GetComponent.<Renderer>().enabled = true;
			GameObject.Find("Lanturn").GetComponent.<Collider2D>().enabled = true;
		}
		else {
			GameObject.Find("Resume").GetComponent.<Renderer>().enabled = true;
			GameObject.Find("Resume").GetComponent.<Collider2D>().enabled = true;
			GameObject.Find("Return Menu").GetComponent.<Renderer>().enabled = true;
			GameObject.Find("Return Menu").GetComponent.<Collider2D>().enabled = true;
			GameObject.Find("PausePlay").GetComponent.<Renderer>().enabled = true;
			GameObject.Find("PausePlay").GetComponent.<Collider2D>().enabled = true;
		}
	}
	GameObject.Find("Main Camera").SendMessage("Start");
	
	
	GameObject.Find("MenuSwipe").SendMessage("help", false);

}


function startGame () {
	play = true;
}