#pragma strict

var left : Transform;
var center : Transform;
var right : Transform;
var leftArt : Transform;
var centerArt : Transform;
var rightArt : Transform;
var wall : Transform;
var wallArt : Transform;
var Spike1 : Transform;
var Spike2 : Transform;
var Spike3 : Transform;
var Spike4 : Transform;
var goldNugget1 : Transform;
var goldNugget2 : Transform;
var goldNugget3 : Transform;
var goldNugget4 : Transform;
var platvelo : float = 1;
var tempPlatvelo : float;

var bootsPickup : Transform;
var magnetPickup : Transform;
var fuelPickup : Transform;
var bootsOdds : float = 0;
var magnetOdds : float = 0;
var fuelOdds : float = 0;
var pickup : boolean = true;
var ranPickup : float;

private var gapPosition1 : float = -2.34;
private var gapPosition2 : float = 2.34;

function pauseGame () {
	tempPlatvelo = platvelo;
	platvelo = 0;
}


function resumeGame () {
	platvelo = tempPlatvelo;

}

function Start () {
	if (GameObject.Find("Ball") != null) {
		var script : BallBounds = GameObject.Find("Ball").GetComponent(BallBounds);
		bootsOdds = script.bootsOdds;
		magnetOdds = script.magnetOdds;
		fuelOdds = script.fuelOdds;
	}
	
	var ranNum : float = Random.Range(0.05,0.68);
	//var ranNum : float = 0.2;
	left.transform.localScale.x = ranNum;
	leftArt.transform.localScale.x = left.transform.localScale.x * 1.35;
	var ranNum2 : float = Random.Range(0.1,0.73 - ranNum);
	//var ranNum2 : float = 0.3;
	center.transform.localScale.x = ranNum2;
	centerArt.transform.localScale.x = center.transform.localScale.x * 1.35;
	right.transform.localScale.x = 0.78 - ranNum2 - ranNum;
	rightArt.transform.localScale.x = right.transform.localScale.x * 1.35;
	var diff1 = 0.26 - ranNum;
	var shift1 = diff1 * 6.3;
	left.transform.position.x -= shift1;
	leftArt.transform.position.x = left.transform.position.x;
	var diff2 = 0.26 - ranNum2;
	var shift2 = diff2 * 6.3;
	center.transform.position.x -= shift1 * 2;
	center.transform.position.x -= shift2;
	centerArt.transform.position.x = center.transform.position.x;
	wall.transform.position.x = center.transform.position.x;
	wallArt.transform.position.x = wall.transform.position.x;
	right.transform.position.x -= shift1;
	right.transform.position.x -= shift2;
	rightArt.transform.position.x = right.transform.position.x;
	gapPosition1 -= shift1 * 2;
	gapPosition2 -= shift1 * 2;
	gapPosition2 -= shift2 * 2;
	Spike1.transform.position.x = gapPosition1 - 1;
	Spike2.transform.position.x = gapPosition1 + 1;
	Spike3.transform.position.x = gapPosition2 - 1;
	Spike4.transform.position.x = gapPosition2 + 1;
	var spikeNum = Random.Range(0.0,2.0);
	if (spikeNum < 1) {
	Spike1.gameObject.SetActive(true);
	}
	spikeNum = Random.Range(0.0,2.0);
	if (spikeNum < 1) {
	Spike2.gameObject.SetActive(true);
	}
	spikeNum = Random.Range(0.0,2.0);
	if (spikeNum < 1) {
	Spike3.gameObject.SetActive(true);
	}
	spikeNum = Random.Range(0.0,2.0);
	if (spikeNum < 1) {
	Spike4.gameObject.SetActive(true);
	}
	
	
	var ranGold : float = Random.Range(0.0,2.0);
	var ranPosition : float = Random.Range(0.0,2.0);
	if (ranGold < 1) {
		goldNugget1.gameObject.SetActive(true);
		goldNugget1.position.x += ranPosition;
		pickup = false;
	}
	ranGold = Random.Range(0.0,2.0);
	ranPosition = Random.Range(0.0,2.0);
	if (ranGold < 1) {
		goldNugget2.gameObject.SetActive(true);
		goldNugget2.position.x += ranPosition;
		pickup = false;
	}
	ranGold = Random.Range(0.0,2.0);
	ranPosition = Random.Range(0.0,2.0);
	if (ranGold < 1) {
		goldNugget3.gameObject.SetActive(true);
		goldNugget3.position.x += ranPosition;
		pickup = false;
	}
	ranGold = Random.Range(0.0,2.0);
	ranPosition = Random.Range(0.0,2.0);
	if (ranGold < 1) {
		goldNugget4.gameObject.SetActive(true);
		goldNugget4.position.x += ranPosition;
		pickup = false;
	}
	if (pickup) {
		ranPickup = Random.Range(0.0,3.0);
		if (ranPickup < bootsOdds) {
			bootsPickup.gameObject.SetActive(true);
		}
		else if (ranPickup >= 1 && ranPickup < magnetOdds + 1) {
			magnetPickup.gameObject.SetActive(true);
		}
		else if (ranPickup >= 2 && ranPickup < fuelOdds + 2) {
			fuelPickup.gameObject.SetActive(true);
		}
		
	}
	
}

function Update () {
	if (transform.position.y > 12){
		Destroy(gameObject);
	}
	GetComponent.<Rigidbody2D>().velocity = Vector2(0,platvelo);
	
}

function speedUp (x : float) {
	platvelo = x;
}