#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp () {
	gameObject.SendMessage("blinking", false);
	for each (t in GameObject.FindGameObjectsWithTag("helpstore")){
		t.GetComponent.<Renderer>().enabled = false;
		t.GetComponent.<Collider2D>().enabled = false;
	}
	GameObject.Find("MenuSwipe").SendMessage("help", false);
}