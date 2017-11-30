#pragma strict

function Start () {

}

var score : int = 0;

function Update () {
	GetComponent(TextMesh).text = "Score: " + score;

}
function AddScore(x: int) {
	score += x;
}

function SaveScores(){
	var scoresScript : LocalScoresScript;
	scoresScript = GameObject.Find("Local Scores").GetComponent(LocalScoresScript);
	scoresScript.SaveScores(score);
}