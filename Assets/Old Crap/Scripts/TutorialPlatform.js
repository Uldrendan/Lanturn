﻿#pragma strict

var left : Transform;
var right : Transform;
var leftArt : Transform;
var rightArt : Transform;
var goldNugget1 : Transform;
/*var goldNugget2 : Transform;
var goldNugget3 : Transform;
var goldNugget4 : Transform;*/
var platvelo : float = 1;
var tempPlatvelo : float;

function pauseGame () {
	tempPlatvelo = platvelo;
	platvelo = 0;
}


function resumeGame () {
	platvelo = tempPlatvelo;

}
/*
function Start () {
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
	
	
	var ranGold : float = Random.Range(0,2);
	var ranPosition : float = Random.Range(0,2);
	if (ranGold < 1) {
		goldNugget1.gameObject.SetActive(true);
		goldNugget1.position.x += ranPosition;
	}
	ranGold = Random.Range(0,2);
	ranPosition = Random.Range(0,2);
	if (ranGold < 1) {
		goldNugget2.gameObject.SetActive(true);
		goldNugget2.position.x += ranPosition;
	}
	ranGold = Random.Range(0,2);
	ranPosition = Random.Range(0,2);
	if (ranGold < 1) {
		goldNugget3.gameObject.SetActive(true);
		goldNugget3.position.x += ranPosition;
	}
	ranGold = Random.Range(0,2);
	ranPosition = Random.Range(0,2);
	if (ranGold < 1) {
		goldNugget4.gameObject.SetActive(true);
		goldNugget4.position.x += ranPosition;
	}
	
	
	
}*/

function Update () {
	if (transform.position.y > 12){// 6 landscape
		Destroy(gameObject);
	}
	GetComponent.<Rigidbody2D>().velocity = Vector2(0,platvelo);
	
}

function speedUp (x : float) {
	platvelo = x;
	left.GetComponent.<Collider2D>().enabled = true;
	right.GetComponent.<Collider2D>().enabled = true;
	leftArt.GetComponent.<Collider2D>().enabled = true;
	rightArt.GetComponent.<Collider2D>().enabled = true;
	leftArt.GetComponent.<Renderer>().enabled = true;
	rightArt.GetComponent.<Renderer>().enabled = true;
	if (goldNugget1 != null) {
		goldNugget1.GetComponent.<Collider2D>().enabled = true;
		goldNugget1.GetComponent.<Renderer>().enabled = true;
	}
}