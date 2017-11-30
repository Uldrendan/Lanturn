#pragma strict

//var pickaxeAnimation : AnimatorController;

var gameStarted : boolean = false;

function startGame () {
	gameStarted = true;
	GetComponent.<Rigidbody2D>().gravityScale = 1.75;
	play = true;
	GetComponent(Animator).SetInteger("Stage", 1);
	
}

//animations
var idle : Sprite;
var bootsidle : Sprite;
var walking1 : Sprite;
var walking2 : Sprite;
var walking3 : Sprite;
var walking4 : Sprite;
var bootswalking1 : Sprite;
var bootswalking2 : Sprite;
var bootswalking3 : Sprite;
var bootswalking4 : Sprite;
var jetpack : Sprite;
var bootsjetpack : Sprite;
var flying : boolean = false;
var walkingStage : int = 1;

var jackhammerSprite : Sprite;

var soundOn : boolean = true;

function soundToggle (x : boolean) {
	soundOn = x;
}


function flyingToggle (x : boolean) {
	flying = x;
	if (flying) {
		if (!bootsBool)	GetComponent(SpriteRenderer).sprite = jetpack;
		else GetComponent(SpriteRenderer).sprite = bootsjetpack;
	}
	if (!flying) {
		if (!bootsBool)	GetComponent(SpriteRenderer).sprite = idle;
		else GetComponent(SpriteRenderer).sprite = bootsidle;
	}
}

function NextWalk () {
	if (!flying && floorTouching != null && !pickaxeOn && !jackhammerOn) {
		walkingStage++;
		if (!bootsBool) {
			if (walkingStage == 5) {
				walkingStage = 1;
				GetComponent(SpriteRenderer).sprite = walking1;
			}
			else if (walkingStage == 2) {
				GetComponent(SpriteRenderer).sprite = walking2;
			}
			else if (walkingStage == 3) {
				GetComponent(SpriteRenderer).sprite = walking3;
			}
			else if (walkingStage == 4) {
				GetComponent(SpriteRenderer).sprite = walking4;
			}
		}
		else {
			if (walkingStage == 5) {
				walkingStage = 1;
				GetComponent(SpriteRenderer).sprite = bootswalking1;
			}
			else if (walkingStage == 2) {
				GetComponent(SpriteRenderer).sprite = bootswalking2;
			}
			else if (walkingStage == 3) {
				GetComponent(SpriteRenderer).sprite = bootswalking3;
			}
			else if (walkingStage == 4) {
				GetComponent(SpriteRenderer).sprite = bootswalking4;
			}
		}
	}
	
}

//sounds

var Soundgrunt : AudioClip;
var GruntSoundObject : GameObject;
var Soundfootstep : AudioClip;
var Soundfootstepboots : AudioClip;
var Soundgold : AudioClip;
var Soundpickaxe : AudioClip;
var Soundjackhammer : AudioClip;
var Soundportal1 : AudioClip;
var Soundportal2 : AudioClip;

var ballLight : Transform;

var tempVelo : Vector2;

var multiplier : int = 1;
var multiCounter : int = 0;
var WallLeft : Transform;
var WallRight : Transform;
var LightLeft : Transform;
var LightRight : Transform;

var portalOn : boolean = false;
var pickaxeOn : boolean = false;
var jackhammerOn : boolean = false;

var boostTimer : float = 0;
//var boostTimerLimit : int;
var TimerOn : boolean;
var boostNumber : int;
var boostQuantity : int = 1;

var wallTouching : GameObject;
var floorTouching : GameObject;
var boostXPosition : float;
var lockX : boolean = false;

var wallTouchTimer : int = 0;
var floorTouchTimer : int = 0;


var BoostQuantityText : GameObject;
var MultiplierText : GameObject;


var VibrateBoolean : boolean = true;
var tempVeloy : float;
var tempGravity : float;

var tutBool : boolean = false;
var tutBool2 : boolean = false;
var tutorialPlay : GameObject;

var boostButtonActive : GameObject;

var bootsOdds : float = 0;
var magnetOdds : float = 0;
var fuelOdds : float = 0;

var play : boolean = false;
var bootsBool : boolean = false;
var magnetBool : boolean = false;

var bootsLimit : int = 5;
var magnetLimit : int = 5;

var portalTimerStart : float = 0;
var pickaxeTimerStart : float = 0;
var jackhammerTimerStart : float = 0;
var boostBool : boolean = false;

var bootTimerStart : float = 0; // in case you get more boots before the old ones die out, they dont cancel at the end of the first timer.
var magnetTimerStart : float = 0;

function boostButtonOn () {
	if (boostQuantity > 0) GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = true;
}

function BoostNumber (x : int) {
	if (!gameStarted) boostQuantity = x;
}


function pauseGame () {
	//tempVelo = rigidbody2D.velocity;
	tempVeloy = GetComponent.<Rigidbody2D>().velocity.y;
	//tempGravity = rigidbody2D.gravityScale;
	GetComponent.<Rigidbody2D>().velocity = Vector2(0,0);
	GetComponent.<Rigidbody2D>().gravityScale = 0;
	GetComponent.<Rigidbody2D>().isKinematic = true;
	play = false;
	if (GetComponent(AudioSource).isPlaying == true) {
		wasPlaying = true;
		GetComponent.<AudioSource>().Pause();
	}
	
}

var wasPlaying : boolean = false;

function resumeGame () {
	GetComponent.<Rigidbody2D>().isKinematic = false;
	GetComponent.<Rigidbody2D>().velocity.y = tempVeloy;
	if (bootsBool) GetComponent.<Rigidbody2D>().gravityScale = 3.5;
	else GetComponent.<Rigidbody2D>().gravityScale = 1.75;
	play = true;
	if (wasPlaying)	{
		GetComponent.<AudioSource>().Play();
		wasPlaying = false;
	}
}

function bootsOn () {
	bootTimerStart = Time.time;
	bootsBool = true;
	GetComponent.<Rigidbody2D>().gravityScale = 3.5;
	GameObject.Find("Main Camera").SendMessage("bootsOn");
	GameObject.Find("VisualBoots").GetComponent.<Renderer>().enabled = true;
	
}
function bootsOff () {
	GetComponent.<Rigidbody2D>().gravityScale = 1.75;
	GameObject.Find("Main Camera").SendMessage("bootsOff");
	GameObject.Find("VisualBoots").GetComponent.<Renderer>().enabled = false;
	bootsBool = false;
}
function magnetOn () {
	magnetTimerStart = Time.time;
	magnetBool = true;
	GameObject.Find("PlatformSpawn").SendMessage("magnetSwitch", true);
	GameObject.Find("VisualMagnet").GetComponent.<Renderer>().enabled = true;
}
function magnetOff() {
	GameObject.Find("PlatformSpawn").SendMessage("magnetSwitch", false);
	GameObject.Find("VisualMagnet").GetComponent.<Renderer>().enabled = false;
	magnetBool = false;
}

function ChangeBoots (x : int) {
	if (x != 0) bootsOdds = 0.5;
	if (x == 2) {
		bootsLimit = 10;
	}
	else if (x == 3) {
		bootsLimit = 15;
	}
	else if (x == 4) {
		bootsLimit = 15;
		bootsOdds = 1;
	}
	if (x == 0) bootsOdds = 0;
}
function ChangeMagnet (x : int) {
	if (x != 0) magnetOdds = 0.5;
	
	if (x == 2) {
		magnetLimit = 10;
	}
	else if (x == 3) {
		magnetLimit = 15;
	}
	else if (x == 4) {
		magnetLimit = 15;
		magnetOdds = 1;
	}
	if (x == 0) magnetOdds = 0;
}

var fuelOn : boolean = false;

function ChangeFuel (x : int) {
	if (x != 0) fuelOn = true;
	if (x == 4) fuelOdds = 1;
	else fuelOdds = 0.5;
	if (x == 0) fuelOdds = 0;
}

function FuelOff () {
	fuelOn = false;
}


function Update () {
	if (!pickaxeOn) {
		if (gameObject.GetComponent.<Rigidbody2D>().velocity.x < -0.5 && gameObject.transform.localScale.x == 0.38) gameObject.transform.localScale.x = -0.38;
		if (gameObject.GetComponent.<Rigidbody2D>().velocity.x > 0.5 && gameObject.transform.localScale.x == -0.38) gameObject.transform.localScale.x = 0.38;
	}
	if (bootsBool && !play) bootTimerStart += Time.deltaTime;//prevents time in pause screen from counting agains boost time
	if (bootsBool && bootTimerStart + bootsLimit < Time.time) bootsOff();
	if (magnetBool && !play) magnetTimerStart += Time.deltaTime;
	if (magnetBool && magnetTimerStart + magnetLimit < Time.time) magnetOff();
	if (portalOn && !play) portalTimerStart += Time.deltaTime;
	if (portalOn && portalTimerStart + boostTimer < Time.time) portalOff();
	if (pickaxeOn && !play) pickaxeTimerStart += Time.deltaTime;
	if (pickaxeOn && pickaxeTimerStart + boostTimer < Time.time) pickaxeOff();
	if (jackhammerOn && !play) jackhammerTimerStart += Time.deltaTime;
	if (jackhammerOn && jackhammerTimerStart + boostTimer < Time.time) jackhammerOff();
	
	//Debug.Log(boostQuantity);
	
	
	if (boostQuantity != 0) {
		//Debug.Log(boostNumber);
		//Debug.Log(wallTouching);
		if (boostNumber == 1 && wallTouching != null && floorTouching != null && !pickaxeOn) {
			boostButtonActive.GetComponent.<Renderer>().enabled = true;
		}
		else if (boostNumber == 2 && floorTouching != null && !jackhammerOn) {
			boostButtonActive.GetComponent.<Renderer>().enabled = true;
		}
		else if (boostNumber == 3 && portalOn) {
			boostButtonActive.GetComponent.<Renderer>().enabled = true;
		}
		else boostButtonActive.GetComponent.<Renderer>().enabled = false;
	}
	else boostButtonActive.GetComponent.<Renderer>().enabled = false;
	
	
	if (wallTouchTimer < 5) {
		wallTouchTimer++;
	}
	else wallTouching = null;
	if (floorTouchTimer < 5) {
		floorTouchTimer++;
	}
	else {
		floorTouching = null;
		if (!flying) {
			if (!bootsBool)	GetComponent(SpriteRenderer).sprite = idle;
			else GetComponent(SpriteRenderer).sprite = bootsidle;
		}
	}
	/*
	if (TimerOn) {
		if (boostTimer < boostTimerLimit) {
			boostTimer++;
		}
		else {
			boostTimer = 0;
			TimerOn = false;
			if (boostNumber == 1) {
				pickaxeOff();
			}
			else if (boostNumber == 2) {
				jackhammerOff();
			}
			else if (boostNumber == 3) {
				portalOff();
			}
		}
	}
	*/
	
	if (lockX) {
		transform.position.x = boostXPosition;
	}
	
	BoostQuantityText.GetComponent(TextMesh).text = ": " + boostQuantity;
	MultiplierText.GetComponent(TextMesh).text = "Multiplier : " + multiplier;
	
	
	
	


	if (transform.position.y < -7.9) {//-3.75 landscape
		transform.position.y = -7.9;
	}
	if (transform.position.y > 10.25) //4 landscape
		Destroy(gameObject);
}

function OnTriggerEnter2D(other : Collider2D) {
	if (other.name == "Gold Nugget") {
		GameObject.Find("Gold").SendMessage("AddGold", multiplier);
		GameObject.Find("Score").SendMessage("AddScore", multiplier);
		if (soundOn) {
			GetComponent.<AudioSource>().clip = Soundgold;
			GetComponent.<AudioSource>().volume = 1;
			GetComponent.<AudioSource>().loop = false;
			GetComponent.<AudioSource>().Play();
		}
		if (multiplier < 3) {
			multiCounter++;
			if (multiCounter == 10) {
				multiplier++;
				ballLight.position.z -= 2;
				ballLight.gameObject.GetComponent.<Light>().range += 2;
				ballLight.gameObject.GetComponent.<Light>().intensity += 1;
				multiCounter = 0;
				/*if (multiplier == 2) {
					ballLight.gameObject.light.color = Color(0.5,0.5,1,1);
				}
				else if (multiplier == 3) {
					ballLight.gameObject.light.color = Color.green;
				}*/
			}
		}
		Destroy(other.gameObject);
		if (tutBool && multiplier == 2) {
			for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("pauseGame");
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("pauseGame");
			}
			GameObject.Find("Ball").SendMessage("pauseGame");
			GameObject.Find("Main Camera").SendMessage("pauseGame");
			var script : TutorialPlay;
			script = tutorialPlay.GetComponent(TutorialPlay);
			script.textCounter = 0;
			script.stage++;
			tutBool = false;
		}
		else if (tutBool3 && multiplier == 3) {
			for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("pauseGame");
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("pauseGame");
			}
			GameObject.Find("Ball").SendMessage("pauseGame");
			GameObject.Find("Main Camera").SendMessage("pauseGame");
			var script3 : TutorialPlay;
			script3 = tutorialPlay.GetComponent(TutorialPlay);
			script3.textCounter = 0;
			script3.stage++;
			tutBool3 = false;
		}
		else if (tutBool4) {
			for each (t in GameObject.FindGameObjectsWithTag("tutorialfloor")){
				t.SendMessage("pauseGame");
			}
			for each (t in GameObject.FindGameObjectsWithTag("wall")){
				t.SendMessage("pauseGame");
			}
			GameObject.Find("Ball").SendMessage("pauseGame");
			GameObject.Find("Main Camera").SendMessage("pauseGame");
			var script4 : TutorialPlay;
			script4 = tutorialPlay.GetComponent(TutorialPlay);
			script4.textCounter = 0;
			script4.stage++;
			tutBool4 = false;
		}
	}
	else if (other.tag == "spike") {
		if (!bootsBool) {
			#if !UNITY_STANDALONE_WIN
			if (VibrateBoolean) Handheld.Vibrate();
 			#endif
			//if (VibrateBoolean) Handheld.Vibrate(); // comment out for .exe
			multiplier = 1;
			multiCounter = 0;
			ballLight.position.z = -2;
			ballLight.gameObject.GetComponent.<Light>().range = 4;
			ballLight.gameObject.GetComponent.<Light>().intensity = 6;
			if (soundOn) {
				GruntSoundObject.GetComponent.<AudioSource>().clip = Soundgrunt;
				GruntSoundObject.GetComponent.<AudioSource>().volume = 0.25;
				GruntSoundObject.GetComponent.<AudioSource>().loop = false;
				GruntSoundObject.GetComponent.<AudioSource>().Play();
			}
			
			//ballLight.gameObject.light.color = Color.white;
			if (tutBool2) {
				var script2 : TutorialPlay;
				script2 = tutorialPlay.GetComponent(TutorialPlay);
				script2.textCounter = 0;
				script2.stage++;
				tutBool2 = false;
			}
		}
	}
	else if (other.tag == "boots") {
		bootsOn();
		Destroy(other.gameObject);
	}
	else if (other.tag == "magnet") {
		magnetOn();
		Destroy(other.gameObject);
	}
	else if (other.tag == "fuel") {
		GameObject.Find("Main Camera").SendMessage("fillFuel");
		if (!tutBool4) Destroy(other.gameObject);
	}
}

function OnCollisionStay2D(other : Collision2D) {
	if (portalOn) {
		if (other.gameObject.name == "WallLeft") {
			gameObject.transform.position.x = 6;
		}
		else if (other.gameObject.name == "WallRight") {
			gameObject.transform.position.x = -6;
		}
	}
	if (other.collider.gameObject.name == "floor") {
		floorTouchTimer = 0;
		floorTouching = other.collider.gameObject;
	}
	//else floorTouching = null;
	if (other.collider.gameObject.name == "wall") {
		wallTouchTimer = 0;
		wallTouching = other.collider.gameObject;
	}
	//else wallTouching = null;
	
}

function ChangeBoost(x : int) {
	if (x != 0) {
		Debug.Log("got message" + x);
		boostNumber = x;
	}
}

function portal (x : int) {
	if (boostQuantity > 0) {
		boostQuantity--;
		
		GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = false;
		
		if (soundOn) {
			GetComponent.<AudioSource>().clip = Soundportal1;
			GetComponent.<AudioSource>().volume = 1;
			GetComponent.<AudioSource>().Play();
		}	
		if (x == 1) {
			boostTimer = 2;
			//boostTimerLimit = 60;
		}
		else if (x == 2) {
			boostTimer = 10;
			//boostTimerLimit = 150;
		}
		else if (x == 3) {
			boostTimer = 20;
			//boostTimerLimit = 300;
		}
		else if (x == 4) {
			boostTimer = 2;
			//boostTimerLimit = 300;
		}
		//TimerOn = true;

		portalOn = true;
		LightLeft.gameObject.GetComponent.<Light>().enabled = !LightLeft.gameObject.GetComponent.<Light>().enabled;
		LightRight.gameObject.GetComponent.<Light>().enabled = !LightRight.gameObject.GetComponent.<Light>().enabled;
		
		for each (t in GameObject.FindGameObjectsWithTag("wall")){
			t.SendMessage("portal");
		}
		portalTimerStart = Time.time;
	}
		
	
}

function portalOff () {	
	if (boostQuantity > 0) GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = true;
	if (soundOn) {
		GetComponent.<AudioSource>().clip = Soundportal1;
		GetComponent.<AudioSource>().volume = 1;
		GetComponent.<AudioSource>().Play();
	}
	portalOn = false;
	LightLeft.gameObject.GetComponent.<Light>().enabled = !LightLeft.gameObject.GetComponent.<Light>().enabled;
	LightRight.gameObject.GetComponent.<Light>().enabled = !LightRight.gameObject.GetComponent.<Light>().enabled;
	
	for each (t in GameObject.FindGameObjectsWithTag("wall")){
		t.SendMessage("portal");
	}
}

function pickaxe (x : int) {
	if (wallTouching != null && floorTouching != null) {
		if (boostQuantity > 0) {
			boostQuantity--;
			
			GetComponent(Animator).enabled = true;
		
			GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = false;
			if (fuelOn) GameObject.Find("Main Camera").SendMessage("fuelToggle", false);
			
			
			if (soundOn) {
				GetComponent.<AudioSource>().clip = Soundpickaxe;
				GetComponent.<AudioSource>().volume = 1;
				GetComponent.<AudioSource>().loop = true;
				GetComponent.<AudioSource>().Play();
			}
			
			if (x == 1) {
			boostTimer = 1;
				//boostTimerLimit = 30;
			}
			else if (x == 2) {
			boostTimer = 0.5;
				//boostTimerLimit = 15;
			}
			else if (x == 3) {
			boostTimer = 0.25;
				//boostTimerLimit = 80;
			}
			else if (x == 4) {
			boostTimer = 0.25;
				//boostTimerLimit = 8;
			}
			//TimerOn = true;
			
			boostXPosition = transform.position.x;
			lockX = true;
			
			pickaxeOn = true;
			pickaxeTimerStart = Time.time;
		}
	}

}

function pickaxeOff () {
	GetComponent(Animator).enabled = false;
	if (!bootsBool)	GetComponent(SpriteRenderer).sprite = idle;
	else GetComponent(SpriteRenderer).sprite = bootsidle;
	if (boostQuantity > 0) GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = true;
	if (fuelOn) GameObject.Find("Main Camera").SendMessage("fuelToggle", true);
	GetComponent.<AudioSource>().Stop();
	GetComponent.<AudioSource>().loop = false;
	pickaxeOn = false;
	wallTouching.SendMessage("pickaxe");
	lockX = false;
}

function jackhammer (x : int) {

	if (floorTouching != null) {
		if (boostQuantity > 0) {
			boostQuantity--;
			
			GetComponent(SpriteRenderer).sprite = jackhammerSprite;
			
			GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = false;
			if (fuelOn) GameObject.Find("Main Camera").SendMessage("fuelToggle", false);
			
			if (soundOn) {
				GetComponent.<AudioSource>().clip = Soundjackhammer;
				GetComponent.<AudioSource>().volume = 1;
				GetComponent.<AudioSource>().loop = true;
				GetComponent.<AudioSource>().Play();
			}
			
			if (x == 1) {
			boostTimer = 1;
				//boostTimerLimit = 30;
			}
			else if (x == 2) {
			boostTimer = 0.5;
				//boostTimerLimit = 15;
			}
			else if (x == 3) {
			boostTimer = 0.25;
				//boostTimerLimit = 80;
			}
			else if (x == 4) {
			boostTimer = 0.25;
				//boostTimerLimit = 8;
			}
			//TimerOn = true;
			
			boostXPosition = transform.position.x;
			lockX = true;
			
			jackhammerOn = true;
			jackhammerTimerStart = Time.time;
			
		}
	}

}

function jackhammerOff () {	
	if (!bootsBool)	GetComponent(SpriteRenderer).sprite = idle;
	else GetComponent(SpriteRenderer).sprite = bootsidle;
	if (boostQuantity > 0) GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = true;
	if (fuelOn) GameObject.Find("Main Camera").SendMessage("fuelToggle", true);
	GetComponent.<AudioSource>().Stop();
	GetComponent.<AudioSource>().loop = false;
	jackhammerOn = false;
	floorTouching.SendMessage("jackhammer");
	lockX = false;
}


function VibrateSet (x : boolean) {
	VibrateBoolean = x;
}

function tutorial () {
	tutBool = true;
}
function tutorial2 () {
	tutBool2 = true;
}
var tutBool3 : boolean = false;
function tutorial3 () {
	tutBool3 = true;
}
var tutBool4 : boolean = false;
function tutorial4 () {
	tutBool4 = true;
}