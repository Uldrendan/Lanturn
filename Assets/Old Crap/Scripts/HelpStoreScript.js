#pragma strict

function Start () {

}

function Update () {

}

var back : GameObject;
var next : GameObject;
var text : GameObject;
var text2 : GameObject;
var arrow : GameObject;

function OnMouseUp () {
	for each (t in GameObject.FindGameObjectsWithTag("helpstore")){
		if (t.name != "HelpMenuBack") {
			t.GetComponent.<Renderer>().enabled = true;
			t.GetComponent.<Collider2D>().enabled = true;
		}
	}
	back.SendMessage("SetStage", 1);
	next.SendMessage("SetStage", 1);
	text.SendMessage("SetStage", 1);
	text2.SendMessage("SetStage", 1);
	arrow.SendMessage("SetStage", 1);
	
	GameObject.Find("MenuSwipe").SendMessage("help", true);
}