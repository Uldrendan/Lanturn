#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp () {
	GameObject.Find("SaveName").transform.position.z = -15;
	for each (t in GameObject.FindGameObjectsWithTag("menu")){
		t.GetComponent.<Renderer>().enabled = false;
		t.GetComponent.<Collider2D>().enabled = false;
	}
	GameObject.Find("Resume").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("Resume").GetComponent.<Collider2D>().enabled = false;
	GameObject.Find("PausePlay").GetComponent.<Renderer>().enabled = false;
	GameObject.Find("PausePlay").GetComponent.<Collider2D>().enabled = false;
}