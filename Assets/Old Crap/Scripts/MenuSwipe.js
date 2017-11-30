#pragma strict

function Start () {

}

var TouchTemp : Touch;
var TempLocation : float;
var buttonDown : boolean = false;
var DebugInfo : GameObject;
var DelayCounter : int = 0;

function Update () {
	if (DelayCounter == 10) {// prevents the message that the button isnt down from getting to the swipe object before it detects the finger was lifted.
		DelayCounter = 0;
		buttonDown = false;
	}
	else if (DelayCounter > 0) DelayCounter++;

	if (!buttonDown && !helpOn) {
		for(var t : Touch in Input.touches ) {
			if (t.phase == TouchPhase.Began) {
				//DebugInfo.GetComponent(TextMesh).text = "" + t.position.x;
				TouchTemp = t;
				TempLocation = t.position.x;
				//Debug.LogError(t.position.x);
			}
			if (t.fingerId == TouchTemp.fingerId && t.phase == TouchPhase.Ended) {
				//DebugInfo.GetComponent(TextMesh).text = t.position.x + " Delta: " + (TempLocation - t.position.x);
				if (TempLocation - t.position.x < -100) {
					GameObject.Find("Main Camera").SendMessage("SwipeRight");
				}
				else if (TempLocation - t.position.x > 100) {
					GameObject.Find("Main Camera").SendMessage("SwipeLeft");
				}
			}
		}
	}
}

function toggleButtonDown (x : boolean) {
		if (x == false) DelayCounter = 1;
		else buttonDown = true;
	
}

var helpOn : boolean = false;

function help (x : boolean) {
	helpOn = x;
	if (x == false) DelayCounter = 1;
}