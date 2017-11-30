#pragma strict
var N : String[];
var S : int[];
var MenuScores : GameObject;
var playerName : String = "";
var waitingForName : boolean = false;
private var SaveScoresFile : String = "/NewPlayerScores.txt";
private var SaveNamesFile : String = "/NewPlayerNames.txt";
var BiggerText : GUIStyle;

function Start () {

	#if UNITY_STANDALONE_WIN
	BiggerText.fontSize = 30;
	#endif


	try {
			var pnr = new StreamReader(Application.persistentDataPath + "PlayerName.txt");
			var line = pnr.ReadLine();
			playerName = line;
			pnr.Close();
		}
		catch (e) {
			Debug.Log("PlayerNameFile not found");
		}



	

	N = new String[10];
	S = new int[10];// high to low
	N[0] = "N/A";
	N[1] = "N/A";
	N[2] = "N/A";
	N[3] = "N/A";
	N[4] = "N/A";
	N[5] = "N/A";
	N[6] = "N/A";
	N[7] = "N/A";
	N[8] = "N/A";
	N[9] = "N/A";
	S[0] = 0;
	S[1] = 0;
	S[2] = 0;
	S[3] = 0;
	S[4] = 0;
	S[5] = 0;
	S[6] = 0;
	S[7] = 0;
	S[8] = 0;
	S[9] = 0;
	
	try {
			var lnr = new StreamReader(Application.persistentDataPath + SaveNamesFile);
			line = lnr.ReadLine();
			var x: int;
			for (x = 0; x < 10; x++){
				if (line != null) N[x] = line;
				line = lnr.ReadLine();
			}
			lnr.Close();
		}
		catch (e) {
			Debug.Log("SaveNamesFile not found");
		}

	
	
	
	try {
			var lsr = new StreamReader(Application.persistentDataPath + SaveScoresFile);
			line = lsr.ReadLine();
			for (x = 0; x < 10; x++){
				if (line != null) S[x] = parseInt(line);
				line = lsr.ReadLine();
			}
			lsr.Close();
		}
		catch (e) {
			Debug.Log("SaveScoresFile not found");
		}



}


function Update () {
	GetComponent(TextMesh).text = "01.    " + S[0] + " - " + N[0] + "\n02.    " + S[1] + " - " + N[1] + "\n03.    " + S[2] + " - " + N[2] + "\n04.    " + S[3] + " - " + N[3] + "\n05.    " + S[4] + " - " + N[4] + "\n06.    " + S[5] + " - " + N[5] + "\n07.    " + S[6] + " - " + N[6] + "\n08.    " + S[7] + " - " + N[7] + "\n09.    " + S[8] + " - " + N[8] + "\n10.    " + S[9] + " - " + N[9];
	MenuScores.GetComponent(TextMesh).text = "01.    " + S[0] + " - " + N[0] + "\n02.    " + S[1] + " - " + N[1] + "\n03.    " + S[2] + " - " + N[2];
}

function OnGUI () {
var textfieldStyle : GUIStyle = GUI.skin.textField;
#if UNITY_STANDALONE_WIN
textfieldStyle.fontSize = 30;//30 for .exe
#else
textfieldStyle.fontSize = 60;//30 for .exe
#endif
textfieldStyle.alignment = TextAnchor.MiddleCenter;
	if (waitingForName) { //-75,-0,150,40 for .exe and font size of 40
		#if UNITY_STANDALONE_WIN
		playerName = GUI.TextField(Rect(Screen.width/2 - 75,Screen.height/2,150,40), playerName, textfieldStyle);
		#else
		playerName = GUI.TextField(Rect(Screen.width/2 - 150,Screen.height/2 - 20,300,80), playerName, textfieldStyle);
		#endif
		
	}
	
}

private var newScoreIndex : int;

function SaveScores (newScore : int) {
	var tempName : String = null;
	var tempScore : int;
	var tempName2 : String = null;
	var tempScore2 : int;
	var x : int;
	for (x = 0; x < 10; x++){
		if (tempName == null) {
			if (newScore > S[x]) {
				newScoreIndex = x;
				waitingForName = true;
				GameObject.Find("SaveName").GetComponent.<Renderer>().enabled = true;
				GameObject.Find("SaveName").GetComponent.<Collider2D>().enabled = true;
				GameObject.Find("HighscoreMessage1").GetComponent.<Renderer>().enabled = true;
				GameObject.Find("HighscoreMessage1").GetComponent.<Collider2D>().enabled = true;
				GameObject.Find("HighscoreMessage2").GetComponent.<Renderer>().enabled = true;
				GameObject.Find("HighscoreMessage2").GetComponent.<Collider2D>().enabled = true;
				tempName = N[x];
				tempScore = S[x];
				N[x] = ""; //will be replaced by textbox name
				S[x] = newScore;
			}
		}
		else {
			tempName2 = N[x];
			tempScore2 = S[x];
			N[x] = tempName;
			S[x] = tempScore;
			tempName = tempName2;
			tempScore = tempScore2;
		}
	}
	
	if (!waitingForName) {
		SaveScores2();
	}
	
	
}


function SaveScores2 () {
	waitingForName = false;
	if (playerName.Length > 5) playerName = playerName.Substring(0, 5);
	N[newScoreIndex] =  playerName;
	var pnw = new StreamWriter(Application.persistentDataPath + "PlayerName.txt");
	pnw.WriteLine(playerName);
	pnw.Close();


	var lnw = new StreamWriter(Application.persistentDataPath + SaveNamesFile);
	var lsw = new StreamWriter(Application.persistentDataPath + SaveScoresFile);
	var x : int;
	for (x = 0; x < 10; x++){
		lnw.WriteLine(N[x]);
		lsw.WriteLine(S[x]);
	}
	lnw.Close();
	lsw.Close();
	GameObject.Find("Main Menu").SendMessage("DoneSaving");
}
