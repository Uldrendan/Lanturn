#pragma strict

var platforms : Transform;

function startGame () {
	Instantiate(platforms, transform.position, transform.rotation);
	Destroy(gameObject);

}

function Update () {

}

function tutorial () {
	Destroy(gameObject);
}