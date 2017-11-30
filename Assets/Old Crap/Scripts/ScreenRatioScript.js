#pragma strict

	//private var difference : float = 490 - Screen.width;

function Start () {
	var screenRatio : float = 1.0*Screen.height/Screen.width;
	if (screenRatio > 1.5)	gameObject.GetComponent.<Camera>().orthographicSize = screenRatio * 6.83;
	//Debug.Log(screenRatio * 6.83);
	
	//47.85

}

function Update () {
	
	//gameObject.camera.orthographicSize += -difference/47.85;

}