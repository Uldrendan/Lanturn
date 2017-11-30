#pragma strict

var fileName : String;
private var boostStatValue : int = 0;
private var filePath : String;

function Start () {
filePath = Application.persistentDataPath + "/" + fileName;
	try {
			var bsr = new StreamReader(filePath);
			var line = bsr.ReadLine();
			boostStatValue = parseInt(line);
			bsr.Close();
		}
		catch (e) {
			Debug.Log("file not found");
		}

	}

function Update () {
	GetComponent(TextMesh).text = "* " + boostStatValue;

}

function SaveBoostStat() {
	var bsw = new StreamWriter(filePath);
	bsw.Write(boostStatValue);
	bsw.Close();

}

function Change() {
	boostStatValue += 1;
}