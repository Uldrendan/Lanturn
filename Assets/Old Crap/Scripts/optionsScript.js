#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp() {
	GameObject.Find("Main Camera").SendMessage("gameA");
	for each (t in GameObject.FindGameObjectsWithTag("options")){
			t.GetComponent.<Renderer>().enabled = true;
			t.GetComponent.<Collider2D>().enabled = true;
		}
	for each (t in GameObject.FindGameObjectsWithTag("menu")){
			t.GetComponent.<Renderer>().enabled = false;
			t.GetComponent.<Collider2D>().enabled = false;
		}
	GameObject.Find("Resume").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("Resume").GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("Return Menu").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("Return Menu").GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("PausePlay").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("PausePlay").GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("Lanturn").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("Lanturn").GetComponent.<Collider2D>().enabled = false;
	
	
	GameObject.Find("MenuSwipe").SendMessage("help", true);

}
