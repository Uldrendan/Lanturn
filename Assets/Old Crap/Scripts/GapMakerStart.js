#pragma strict

var left : Transform;
var right : Transform;
var platvelo : float = 1;
var play : boolean = false;

function Start () {
	var ranNum : float = Random.Range(0,0.9);
	left.transform.localScale.x = ranNum;
	right.transform.localScale.x = 0.9 - ranNum;
	var diff = 0.45 - ranNum;
	var shift = diff * 6.3;
	left.transform.position.x -= shift;
	right.transform.position.x -= shift;
	play = true;
	
}

function Update () {
	if (play){
	if (transform.position.y > 6){
		Destroy(gameObject);
		GameObject.Find("Main Camera").SendMessage("score1");
	}
	GetComponent.<Rigidbody2D>().velocity = Vector2(0,platvelo);
	}
}

function speedUp (x : float) {
	platvelo = x;
}