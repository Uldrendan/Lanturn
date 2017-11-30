#pragma strict

function Start () {

}

var blinkingBool : boolean = false;
var blinkingSwitch : boolean = false;
var blinkingCounter : int = 0;
var buttonBackground : GameObject;
var norm : Sprite;
var blink : Sprite;


function Update () {
	if (blinkingBool) {
		if (blinkingCounter < 30) {
			blinkingCounter++;
		}
		else {
			blinkingCounter = 0;
			blinkingSwitch = !blinkingSwitch;
			if (blinkingSwitch) {
				GetComponent(TextMesh).color = Color.green;
				buttonBackground.GetComponent(SpriteRenderer).sprite = blink;
			}
			else {
				GetComponent(TextMesh).color = Color.white;
				buttonBackground.GetComponent(SpriteRenderer).sprite = norm;
			}
		}
		
		
	}
	
}

var isRed : boolean = false;
function Red(x : boolean) {
	isRed = x;
}

function blinking (x : boolean) {
	blinkingBool = x;
	if (!blinkingBool && !isRed) {
		blinkingSwitch = false;
		GetComponent(TextMesh).color = Color.white;
		buttonBackground.GetComponent(SpriteRenderer).sprite = norm;
		blinkingCounter = 0;
	}
}
