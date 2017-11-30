#pragma strict

var nextWall : GameObject;

private var portalSprite : Sprite;
var portalSpriteLeft : Sprite;
var portalSpriteRight : Sprite;
var wallSprite : Sprite;
var wallLeft : boolean;


var platvelo : float = 1;
var tempPlatvelo : float;


function pauseGame () {
	tempPlatvelo = platvelo;
	platvelo = 0;
}


function resumeGame () {
	platvelo = tempPlatvelo;

}


function Start () {
	if (wallLeft) {
		portalSprite = portalSpriteLeft;
	}
	else portalSprite = portalSpriteRight;

}

function Update () {
	if (wallLeft) {
		transform.position.x = -6.6;
	}
	else transform.position.x = 6.6;
	if (transform.position.y > 15) {
		transform.position.y -= 35.64;//35.64
	}
	GetComponent.<Rigidbody2D>().velocity = Vector2(0,platvelo);

}

function portal () {
	//portalWall.SetActive(true);
	//gameObject.SetActive(false);
	if (GetComponent(SpriteRenderer).sprite == portalSprite) GetComponent(SpriteRenderer).sprite = wallSprite;
	else GetComponent(SpriteRenderer).sprite = portalSprite;
}


function speedUp (x : float) {
	platvelo = x;
}