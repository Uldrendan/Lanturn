#pragma strict

var left : Transform;
var right : Transform;
var leftArt : Transform;
var rightArt : Transform;
var goldNugget1 : Transform;
var goldNugget2 : Transform;
var goldNugget3 : Transform;
var goldNugget4 : Transform;
var platvelo : float = 0;
var tempPlatvelo : float = 1;

var bootsPickup : Transform;
var magnetPickup : Transform;
var fuelPickup : Transform;
var bootsOdds : float = 0.5;
var magnetOdds : float = 0.5;
var fuelOdds : float = 0.5;
var pickup : boolean = true;
var ranPickup : float;


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
	
	var ranNum : float = Random.Range(0.05,0.85);
	left.transform.localScale.x = ranNum;
	right.transform.localScale.x = 0.9 - ranNum;
	leftArt.transform.localScale.x = left.transform.localScale.x * 1.35;
	rightArt.transform.localScale.x = right.transform.localScale.x * 1.35;
	var diff = 0.45 - ranNum;
	var shift = diff * 6.3;
	left.transform.position.x -= shift;
	right.transform.position.x -= shift;
	leftArt.transform.position.x -= shift;
	rightArt.transform.position.x -= shift;
	//goldNugget.transform.position.x = shift * -2;
	
	
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
	//fuelPickup.gameObject.SetActive(true);
	
	
}

function Update () {
	if (transform.position.y > 12){// 6 landscape
		Destroy(gameObject);
	}
	GetComponent.<Rigidbody2D>().velocity = Vector2(0,platvelo);
	
}

function speedUp (x : float) {
	platvelo = x;
}





function getStats() {
}