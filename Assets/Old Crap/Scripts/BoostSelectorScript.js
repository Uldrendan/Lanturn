#pragma strict

var boostSelector : GameObject;
var boostNumber : int;
var boostButton : GameObject;
var boostLabel : GameObject;
var fileName : String;
var boostTiers : GameObject;
var characterObject : GameObject;
var playingBlocker : GameObject;

function Start () {

}

function Update () {

}

function OnMouseUp () {
	boostSelector.GetComponent.<Renderer>().enabled = true;
	boostSelector.transform.position.x = gameObject.transform.position.x;
	boostSelector.transform.position.y = gameObject.transform.position.y;
	boostButton.SendMessage("ChangeBoost", boostNumber);
	boostLabel.SendMessage("ChangeBoost", boostNumber);
	characterObject.SendMessage("ChangeBoost", boostNumber);
	boostTiers.SendMessage("ActivateBoost");
	
	
	var bsw = new StreamWriter(Application.persistentDataPath + "/" + fileName);
	bsw.Write(boostNumber);
	bsw.Close();

}

function ChangeTier(x : int) {
	var TierScript : TierSwitcher = boostTiers.GetComponent(TierSwitcher);
	boostButton.SendMessage("ChangeTier", TierScript.tierNumber);
}

function FirstTime () {
	if (playingBlocker.GetComponent.<Renderer>().enabled == false && playingBlocker.GetComponent.<Collider2D>().enabled == false) OnMouseUp();
}