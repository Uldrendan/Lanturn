#pragma strict


var Tier0 : Sprite;
var Tier1 : Sprite;
var Tier2 : Sprite;
var Tier3 : Sprite;
var Tier4 : Sprite;
var tierNumber : int = 0;

var fileName : String;

var buyButton : GameObject;
private var filePath : String;

var BoostBlocker : GameObject;
var BoostButton : GameObject;
var ActiveBoost : boolean;
var OtherBoost1 : GameObject;
var OtherBoost2 : GameObject;

var boostNumber : int;

function Start () {

	filePath = Application.persistentDataPath + "/" + fileName;
	try {
			var bsr = new StreamReader(filePath);
			var line = bsr.ReadLine();
			tierNumber = parseInt(line);
			bsr.Close();
		}
		catch (e) {
			Debug.Log("file not found");
		}
		
	if (tierNumber == 0) GetComponent(SpriteRenderer).sprite = Tier0;
	else if (tierNumber == 1) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier1;
		buyButton.SendMessage("ChangePrice", 2);
	}
	else if (tierNumber == 2) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier2;
		buyButton.SendMessage("ChangePrice", 3);
	}
	else if (tierNumber == 3) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier3;
		buyButton.SendMessage("ChangePrice", 4);
	}
	else if (tierNumber == 4) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier4;
		buyButton.SendMessage("Deactivate");
	}
	if (boostNumber == 4) GameObject.Find("Ball").SendMessage("ChangeBoots", tierNumber);
	if (boostNumber == 5) GameObject.Find("Ball").SendMessage("ChangeMagnet", tierNumber);
	if (boostNumber == 6) GameObject.Find("Main Camera").SendMessage("ChangeFuel", tierNumber);
	

}

function Update () {

}





function SaveBoostStat() {
	var bsw = new StreamWriter(filePath);
	bsw.Write(tierNumber);
	bsw.Close();

}

function Change() {
	if (tierNumber < 4) tierNumber++;
	if (ActiveBoost) BoostButton.SendMessage("ChangeTier", tierNumber);
	if (tierNumber == 0) GetComponent(SpriteRenderer).sprite = Tier0;
	else if (tierNumber == 1) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier1;
	}
	else if (tierNumber == 2) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier2;
	}
	else if (tierNumber == 3) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier3;
	}
	else if (tierNumber == 4) {
		BoostBlocker.GetComponent.<Renderer>().enabled = false;
		BoostBlocker.GetComponent.<Collider2D>().enabled = false;
		GetComponent(SpriteRenderer).sprite = Tier4;
		buyButton.SendMessage("Deactivate");
	}
	if (boostNumber == 4) GameObject.Find("Ball").SendMessage("ChangeBoots", tierNumber);
	if (boostNumber == 5) GameObject.Find("Ball").SendMessage("ChangeMagnet", tierNumber);
	if (boostNumber == 6) GameObject.Find("Main Camera").SendMessage("ChangeFuel", tierNumber);
}

function ActivateBoost () {
	ActiveBoost = true;
	filePath = Application.persistentDataPath + "/" + fileName;
	try {
			var bsr = new StreamReader(filePath);
			var line = bsr.ReadLine();
			tierNumber = parseInt(line);
			bsr.Close();
		}
		catch (e) {
			Debug.Log("file not found");
		}
	BoostButton.SendMessage("ChangeTier", tierNumber);
	OtherBoost1.SendMessage("DeactivateBoost");
	OtherBoost2.SendMessage("DeactivateBoost");
}

function DeactivateBoost () {
	ActiveBoost = false;
}

function tutorialButton () {
	tierNumber = 0;
	GetComponent(SpriteRenderer).sprite = Tier0;
	var bsw = new StreamWriter(filePath);
	bsw.Write(tierNumber);
	bsw.Close();
	//Start();
}
