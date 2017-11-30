#pragma strict

function Start () {

}

private var direction : float = 0.01;
private var counter : int = 0;
function Update () {
	counter++;
	if (counter == 15) {
		direction *= -1;
		counter = 0;
	}
	gameObject.transform.position.y += direction;

}