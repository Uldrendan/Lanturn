#pragma strict

function Start () {

}

var norm : Sprite;
var blink : Sprite;

var blinkingBool : boolean = false;
var blinkingSwitch : boolean = false;
var blinkingCounter : int = 0;

function Update () {
	if (blinkingBool) {
		if (blinkingCounter < 30) {
			blinkingCounter++;
		}
		else {
			blinkingCounter = 0;
			blinkingSwitch = !blinkingSwitch;
			if (blinkingSwitch) GetComponent(SpriteRenderer).sprite = blink;
			else GetComponent(SpriteRenderer).sprite = norm;
		}
		
		
	}
	
}

function blinking (x : boolean) {
	blinkingBool = x;
	if (!blinkingBool) {
		blinkingSwitch = false;
		GetComponent(SpriteRenderer).sprite = norm;
		blinkingCounter = 0;
	}
}
