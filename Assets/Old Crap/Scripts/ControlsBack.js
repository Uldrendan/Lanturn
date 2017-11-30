#pragma strict

function Start () {

}

function Update () {

}



function OnMouseUp() {
	for each (t in GameObject.FindGameObjectsWithTag("controls")){
		t.GetComponent.<Renderer>().enabled = false;
		t.GetComponent.<Collider2D>().enabled = false;
	}
	
	for each (t in GameObject.FindGameObjectsWithTag("instructions")){
		t.GetComponent.<Renderer>().enabled = true;
		t.GetComponent.<Collider2D>().enabled = true;
	}
	
}



