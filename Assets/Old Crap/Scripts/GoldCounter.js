#pragma strict

function Start () {

	try {
			var gr = new StreamReader(Application.persistentDataPath + "/NewGold.txt");
			var line = gr.ReadLine();
			gold = parseInt(line);
			gr.Close();
		}
		catch (e) {
			Debug.Log("file not found");
		}

	}


var gold : int = 0;
var storeGold : GameObject;
function Update () {
	GetComponent(TextMesh).text = ": " + gold;
	storeGold.GetComponent(TextMesh).text = ": " + gold;
}
function AddGold(x: int) {
	gold += x;
}

function SaveGold(caller : String) {
	var gw = new StreamWriter(Application.persistentDataPath + "/NewGold.txt");
	gw.Write(gold);
	gw.Close();
	if (caller == "main") GameObject.Find("Main Menu").SendMessage("DoneSaving");
}