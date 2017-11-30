#pragma strict

function Start () {

}

function Update () {

}


function OnMouseUp () {


	GameObject.Find("Gold").SendMessage("SaveGold", "main");
	GameObject.Find("Score").SendMessage("SaveScores");
	gameObject.GetComponent.<Renderer>().enabled = false;
	gameObject.GetComponent.<Collider2D>().enabled = false;
	
	
	
}

var savingProgress: int = 0;

function DoneSaving () {
	savingProgress += 1;
	if (savingProgress == 2)//# of saving step. Waits for all steps to be done before reloading level
		Application.LoadLevel(0);

}