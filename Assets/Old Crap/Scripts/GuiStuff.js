#pragma strict


function Start () {
	//fc();

	Screen.fullScreen = true;

	#if UNITY_STANDALONE_WIN
	tiltOn = false;
	if (GameObject.Find("Tilt on(Clone)") != null){
		GameObject.Find("Tilt on(Clone)").SendMessage("SwitchTilt");
	}
	#else
	try {
			var gr = new StreamReader(Application.persistentDataPath + "/NewTilt.txt");
			var line = gr.ReadLine();
			if (line == "true") {
				tiltOn = true;
				if (GameObject.Find("Tilt off(Clone)") != null){
					GameObject.Find("Tilt off(Clone)").SendMessage("SwitchTilt");
				}
			}
			else {
				tiltOn = false;
				if (GameObject.Find("Tilt on(Clone)") != null){
					GameObject.Find("Tilt on(Clone)").SendMessage("SwitchTilt");
				}
			}
			gr.Close();
		}
		catch (e) {
			tiltOn = true;
			if (GameObject.Find("Tilt off(Clone)") != null){
				GameObject.Find("Tilt off(Clone)").SendMessage("SwitchTilt");
			}
			Debug.Log("Tilt not found");
		}
	#endif
		
	try {
			var gr2 = new StreamReader(Application.persistentDataPath + "/NewVibrate.txt");
			var line2 = gr2.ReadLine();
			if (line2 == "true") {
				gameObject.Find("Ball").SendMessage("VibrateSet", true);
				if (GameObject.Find("Vibrate off(Clone)") != null){
					GameObject.Find("Vibrate off(Clone)").SendMessage("SwitchVibrate");
				}
			}
			else {
				gameObject.Find("Ball").SendMessage("VibrateSet", false);
				if (GameObject.Find("Vibrate on(Clone)") != null){
					GameObject.Find("Vibrate on(Clone)").SendMessage("SwitchVibrate");
				}
			}
			gr2.Close();
		}
		catch (e) {
			gameObject.Find("Ball").SendMessage("VibrateSet", false);
			if (GameObject.Find("Vibrate on(Clone)") != null){
				GameObject.Find("Vibrate on(Clone)").SendMessage("SwitchVibrate");
			}
			Debug.Log("Vibrate not found");
		}
		
	try {
			var gr3 = new StreamReader(Application.persistentDataPath + "/NewMusic.txt");
			var line3 = gr3.ReadLine();
			if (line3 == "true") {
				musicOn = true;
				gameObject.GetComponent(AudioSource).volume = 1;
				if (GameObject.Find("Music off(Clone)") != null){
					GameObject.Find("Music off(Clone)").SendMessage("SwitchMusic");
				}
			}
			else {
				musicOn = false;
				gameObject.GetComponent(AudioSource).volume = 0;
				if (GameObject.Find("Music on(Clone)") != null){
					GameObject.Find("Music on(Clone)").SendMessage("SwitchMusic");
				}
			}
			gr3.Close();
		}
		catch (e) {
			musicOn = true;
			gameObject.GetComponent(AudioSource).volume = 1;
			if (GameObject.Find("Music off(Clone)") != null){
				GameObject.Find("Music off(Clone)").SendMessage("SwitchMusic");
			}
			Debug.Log("Tilt not found");
		}
		
	try {
			var gr4 = new StreamReader(Application.persistentDataPath + "/NewSound.txt");
			var line4 = gr4.ReadLine();
			if (line4 == "true") {
				soundOn = true;
				player.gameObject.GetComponent.<AudioSource>().volume = 1;
				JetpackSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0.25;
				FootSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0.5;
				GruntSoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
				MenuSoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
				PlaySoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
				if (GameObject.Find("Sound off(Clone)") != null){
					GameObject.Find("Sound off(Clone)").SendMessage("SwitchSound");
				}
			}
			else {
				soundOn = false;
				player.gameObject.GetComponent.<AudioSource>().volume = 0;
				JetpackSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
				FootSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
				GruntSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
				MenuSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
				PlaySoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
				if (GameObject.Find("Sound on(Clone)") != null){
					GameObject.Find("Sound on(Clone)").SendMessage("SwitchSound");
				}
			}
			player.SendMessage("soundToggle", soundOn);
			gr4.Close();
		}
		catch (e) {
			soundOn = true;
			player.gameObject.GetComponent.<AudioSource>().volume = 1;
			JetpackSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0.25;
			FootSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0.5;
			GruntSoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
			MenuSoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
			PlaySoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
			if (GameObject.Find("Sound off(Clone)") != null){
				GameObject.Find("Sound off(Clone)").SendMessage("SwitchSound");
			}
			//Debug.LogError("Sound not found");
		}

	}
	
var starting : boolean = false;
		
function startingSequence (x : boolean) {
	starting = x;
	
}
	
function SwipeLeft () {
//Debug.LogError("left");
	if (!starting && !play) {
		if (transform.position.x > -10) storeA();
		else gameA();
	}
}
function SwipeRight() {
//Debug.LogError("right");
	if (!starting && !play) {
		if (transform.position.x < 10) highScoresA();
		else gameA();
	}
}
	
	
	

var fuelCapacityText : GameObject;
var fuelOn : boolean = false;

function fuelToggle (x : boolean) {
	fuelOn = x;
}

function startGame(){
	if (fuelOn) {
		fuelCapacityText.GetComponent.<Renderer>().enabled = true;
	}
	play = true;
	fuelAmount = fuelCapacity;
	GetComponent.<AudioSource>().clip = gameMusic;
	if (musicOn) {
		GetComponent.<AudioSource>().volume = 1;
	
	}
	GetComponent.<AudioSource>().Play();
}
function pauseGame(){
	
	play = false;
	dPressed = false;
	jPressed = false;
	tjPressed = false;
	JetpackSoundObject.GetComponent.<AudioSource>().Stop();
	
}

function resumeGame(){
	play = true;
	if (fuelOn) {
		fuelCapacityText.GetComponent.<Renderer>().enabled = true;
	}
	//yield WaitForSeconds(1);
	//player.rigidbody2D.velocity.x = 0;//hak to prevent possible movement freezing after unpausing on some devices
}



var target = Vector3(0,0,-20);
var smooth = 5.0;

function storeA () {
	target = Vector3(13.8,0,-20);
}

function storeB () {
	target = Vector3(17,0,-20);
}

function gameA () {
	target = Vector3(0,0,-20);
}

function instructionsA(){
	target = Vector3(-4,0,-20);
}
function highScoresA () {
	target = Vector3(-13.8,0,-20);
}


var tiltOn : boolean = true;

function toggleTilt () {
	if (tiltOn) tiltOn = false;
	else tiltOn = true;
}

var musicOn : boolean = false;

function toggleMusic () {
	if (musicOn) {
		musicOn = false;
		gameObject.GetComponent(AudioSource).volume = 0;
	}
	else {
		musicOn = true;
		gameObject.GetComponent(AudioSource).volume = 1;
	}
}

var soundOn : boolean = true;

function toggleSound () {
	if (soundOn) {
		soundOn = false;
		player.gameObject.GetComponent.<AudioSource>().volume = 0;
		JetpackSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
		FootSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
		GruntSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
		MenuSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
		PlaySoundObject.gameObject.GetComponent.<AudioSource>().volume = 0;
	}
	else {
		soundOn = true;
		player.gameObject.GetComponent.<AudioSource>().volume = 1;
		JetpackSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0.25;
		FootSoundObject.gameObject.GetComponent.<AudioSource>().volume = 0.5;
		GruntSoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
		MenuSoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
		PlaySoundObject.gameObject.GetComponent.<AudioSource>().volume = 1;
	}
	player.SendMessage("soundToggle", soundOn);
	//if (gameObject.GetComponent(AudioSource).volume == 1) gameObject.GetComponent(AudioSource).volume = 0;
	//else gameObject.GetComponent(AudioSource).volume = 1;
}

function SaveTilt() {
	var gw = new StreamWriter(Application.persistentDataPath + "/NewTilt.txt");
	if (tiltOn == true) {
		gw.Write("true");
	}
	else {
		gw.Write("false");
	}
	gw.Close();
}

function SaveMusic() {
	var gw = new StreamWriter(Application.persistentDataPath + "/NewMusic.txt");
	if (gameObject.GetComponent(AudioSource).volume == 1) {
		gw.Write("true");
	}
	else {
		gw.Write("false");
	}
	gw.Close();
}

function SaveSound() {
	var gw = new StreamWriter(Application.persistentDataPath + "/NewSound.txt");
	if (soundOn) {
		gw.Write("true");
	}
	else {
		gw.Write("false");
	}
	gw.Close();
}

function SaveVibrate() {
	var gw = new StreamWriter(Application.persistentDataPath + "/NewVibrate.txt");
	if (GameObject.Find("Vibrate on(Clone)") != null){
		gw.Write("true");
	}
	else {
		gw.Write("false");
	}
	gw.Close();
}



var gameMusic : AudioClip;


var JetpackSoundObject : GameObject;
var Soundjetpack1 : AudioClip;
var Soundjetpack2 : AudioClip;
var Soundwalkingboots : AudioClip;
var Soundwalking : AudioClip;
var coughed : boolean = true;
var FootSoundObject : GameObject;
var footTimerCounter : int = 0;
var footTimerLimit : int = 0;
var GruntSoundObject : GameObject;
var MenuSoundObject : GameObject;
var PlaySoundObject : GameObject;


var jPressed : boolean = false;
var dPressed : boolean = false;
var tjPressed : boolean = false;
var tjsPressed : boolean = false;
var player : Transform;
var message : int = 0;
var posx : int = 0;
var posy : int = 0;
var play : boolean = false;

var speed : float = 5;
var moveThreshold : float = 0.2;
var movex : float;
private var iPx : float;
var velo : Vector2;

//private var score : int = 0;

var GameOver : int = 0;
var endLight : Transform;
var jetpackStrength : float = 20;


var jTemp : Touch;
var dTemp : Touch;
var tjTemp : Touch;

var endGameMusic : AudioClip;
var fuelCapacity : float = 2;
var fuelAmount : float = 2;

var dButtonPressed : boolean = false;
var jButtonPressed : boolean = false;

var DebugInfo : GameObject;
/*
var frameCounter : int = 0;
var frameTotal : int = 0;

function fc () {
	while (true) {
	yield WaitForSeconds(1);
	frameTotal = frameCounter;
	frameCounter = 0;
	}
}*/

function Update () {
	//frameCounter++;
	//if (Time.deltaTime > 0.025)
	//DebugInfo.GetComponent(TextMesh).text = "" + frameTotal;
	
	
	if (fuelAmount > 0) {
		fuelCapacityText.GetComponent(TextMesh).color = Color.white;
		fuelCapacityText.GetComponent(TextMesh).text = "Fuel: " + fuelAmount.ToString("F2") + "L";
	}
	else {
		fuelCapacityText.GetComponent(TextMesh).color = Color.red;
		fuelCapacityText.GetComponent(TextMesh).text = "No Fuel";
	}


	if (player == null && GameOver == 0){
		
		GameOver = 1;
		
	}

    transform.position = Vector3.Lerp (
    transform.position, target,
    Time.deltaTime * smooth);



	if (play) {
	
	if (player != null){
		
		posx = 0;
		posy = 0;
		
		if (tiltOn) {
			//movex = 0;
			iPx = Input.acceleration.x;
			velo = player.GetComponent.<Rigidbody2D>().velocity;
			if (Mathf.Abs(iPx) > 0) {
			
				if (iPx > 0.5) {
					movex = 0.5 * speed * 1.5; //0.5*1.5 = 0.75 to match non-tilt speed
					velo.x = movex;
				}
				else if (iPx < -0.5) {
					movex = -0.5 * speed * 1.5;
					velo.x = movex;
				}
				else {
				///END OF EXP.///
					movex = iPx * speed * 1.5; 
					velo.x = movex;
				}
			}
			
			////////////////////////////////////
			//Consider using Vector2.lerp for acceleration of movement,
			//combined with shifting the speed within the lerp function
			////////////////////////////////////
			
			//else velo.x = 0;
			//else
				//velo.x = 0;
			
			
			
			
			/////WALKING SOUND LOOP/////
			if (player.GetComponent.<Rigidbody2D>().velocity.x != 0) {
				if (iPx != 0) {
					footTimerLimit = 2/Mathf.Min(Mathf.Abs(iPx), 0.5);
				}
				if (footTimerCounter > footTimerLimit) {
					footTimerCounter = 0;
					if (bootsBool) {
						FootSoundObject.GetComponent.<AudioSource>().clip = Soundwalkingboots;
					}
					else FootSoundObject.GetComponent.<AudioSource>().clip = Soundwalking;
					FootSoundObject.GetComponent.<AudioSource>().Play();
					player.SendMessage("NextWalk");
				}
				else {
					footTimerCounter++;
				}
			}
			
			
			player.GetComponent.<Rigidbody2D>().velocity = velo;
			
		}
		else {
			if (player.GetComponent.<Rigidbody2D>().velocity.x != 0) {
				if (footTimerCounter > 4) {
					footTimerCounter = 0;
					if (bootsBool) {
						FootSoundObject.GetComponent.<AudioSource>().clip = Soundwalkingboots;
					}
					else FootSoundObject.GetComponent.<AudioSource>().clip = Soundwalking;
					FootSoundObject.GetComponent.<AudioSource>().Play();
					player.SendMessage("NextWalk");
				}
				else {
					footTimerCounter++;
				}
			}
		}




		var jRect = Rect(0, 				0, 					Screen.width/4, Screen.height);
		var dRect = Rect(Screen.width*3/4, 	0, 					Screen.width/4, Screen.height*7/8);
		var mRect = Rect(Screen.width/4, 	Screen.height/8, 	Screen.width/2, Screen.height*7/8);
		
		
		
		for(var t : Touch in Input.touches ) {
		posx = t.position.x;
		posy = t.position.y;
			if (tiltOn){
				if (jRect.Contains (t.position)) {
					if (t.phase == TouchPhase.Began) {// remembers the id of the press
						jTemp = t;
						if (!dButtonPressed) tjsPressed = true;
						jButtonPressed = true;
					}
					//if (t.phase == TouchPhase.Began)
					else if (t.phase != TouchPhase.Ended) {//jetpack
						jPressed = true;
						tjsPressed = false;
					}
					else {
						jButtonPressed = false;
						//jPressed = false;
						//tjsPressed = false;
						//if (JetpackSoundObject.audio.clip == Soundjetpack1) JetpackSoundObject.audio.Stop();
						//GameObject.Find("Ball").SendMessage("flyingToggle", false);
					}
				}
				
				///////////////
				////////////////
				//////////////
				else if (dRect.Contains (t.position)) {
					if (t.phase == TouchPhase.Began) {// remembers the id of the press
						jTemp = t;
						if (!jButtonPressed) tjsPressed = true;
						dButtonPressed = true;
					}
					//if (t.phase == TouchPhase.Began)
					else if (t.phase != TouchPhase.Ended) {//jetpack
						jPressed = true;
						tjsPressed = false;
					}
					else {
						dButtonPressed = false;
						//jPressed = false;
						//tjsPressed = false;
						//if (JetpackSoundObject.audio.clip == Soundjetpack1) JetpackSoundObject.audio.Stop();
						//GameObject.Find("Ball").SendMessage("flyingToggle", false);
					}
				}
				if ((jRect.Contains (t.position) || dRect.Contains (t.position)) && (!dButtonPressed && !jButtonPressed)) {
		Debug.LogError("Stop");
					jPressed = false;
					tjsPressed = false;
					if (JetpackSoundObject.GetComponent.<AudioSource>().clip == Soundjetpack1) JetpackSoundObject.GetComponent.<AudioSource>().Stop();
					GameObject.Find("Ball").SendMessage("flyingToggle", false);
				}
				/////////////
				////////////////
				//////////////
				
				if (t.fingerId == jTemp.fingerId) {// constantly updates the position of the press
						jTemp = t;
					}
				
				/*if (dRect.Contains (t.position)) {
					if (t.phase == TouchPhase.Began) {// remembers the id of the press
						dTemp = t;
					}
					else if (t.phase != TouchPhase.Ended)
						dPressed = true;
					else dPressed = false;
				}*///Eliminating drop button, replacing it with jetpack button
				
				
				if (t.fingerId == dTemp.fingerId) {// constantly updates the position of the press
						dTemp = t;
					}
				
				
				if (!jRect.Contains (jTemp.position) && !dRect.Contains (jTemp.position)){// cancels the button being pressed if the finger leaves the button
					jPressed = false;
					if (JetpackSoundObject.GetComponent.<AudioSource>().clip == Soundjetpack1) JetpackSoundObject.GetComponent.<AudioSource>().Stop();
					GameObject.Find("Ball").SendMessage("flyingToggle", false);
				}
				//if (!dRect.Contains (dTemp.position)){// cancels the button being pressed if the finger leaves the button
				//	dPressed = false;
				//}Eliminating down button, intergrated this line into line above
					
			}
			else {
				//TiltOff Controlls
				if (jRect.Contains (t.position)) {
					if (t.phase == TouchPhase.Began) {// remembers the id of the press
						jTemp = t;
					}
					else if (t.phase != TouchPhase.Ended)
						jPressed = true;
					else jPressed = false;
				}
				if (t.fingerId == jTemp.fingerId) {// constantly updates the position of the press
						jTemp = t;
					}
				
				if (dRect.Contains (t.position)) {
					if (t.phase == TouchPhase.Began) {// remembers the id of the press
						dTemp = t;
					}
					else if (t.phase != TouchPhase.Ended)
						dPressed = true;
					else dPressed = false;
				}
				if (t.fingerId == dTemp.fingerId) {// constantly updates the position of the press
						dTemp = t;
					}
				
				if (mRect.Contains (t.position)) {
					if (t.phase == TouchPhase.Began) {// remembers the id of the press
						tjTemp = t;
						tjsPressed = true;
					}
					//if (t.phase == TouchPhase.Began)
					else if (t.phase != TouchPhase.Ended) { //jetpack
						tjPressed = true;
						tjsPressed = false;
					}
					else {
						tjPressed = false;
						tjsPressed = false;
						if (JetpackSoundObject.GetComponent.<AudioSource>().clip == Soundjetpack1) JetpackSoundObject.GetComponent.<AudioSource>().Stop();
						GameObject.Find("Ball").SendMessage("flyingToggle", false);
					}
				}
				if (t.fingerId == tjTemp.fingerId) {// constantly updates the position of the press
						tjTemp = t;
					}
					
				
				if (!jRect.Contains (jTemp.position)){// cancels the button being pressed if the finger leaves the button
					jPressed = false;
				}
				if (!dRect.Contains (dTemp.position)){// cancels the button being pressed if the finger leaves the button
					dPressed = false;
				}
				if (!mRect.Contains (tjTemp.position)){// cancels the button being pressed if the finger leaves the button
					tjPressed = false;
					if (JetpackSoundObject.GetComponent.<AudioSource>().clip == Soundjetpack1) JetpackSoundObject.GetComponent.<AudioSource>().Stop();
					GameObject.Find("Ball").SendMessage("flyingToggle", false);
				}
				
			}
		}
		
		Debug.Log(jTemp);
		
		if (tiltOn) {
			if (jPressed == true) {
				if (fuelAmount > 0 && fuelOn) {
					player.GetComponent.<Rigidbody2D>().AddForce(Vector2(0,jetpackStrength * (Time.deltaTime * 59))); //jetpack
					fuelAmount -= 0.02;
				}
				else if (!coughed) {
					if (soundOn) {
						JetpackSoundObject.GetComponent.<AudioSource>().clip = Soundjetpack2;
						JetpackSoundObject.GetComponent.<AudioSource>().volume = 1;
						JetpackSoundObject.GetComponent.<AudioSource>().Play();
					}
					coughed = true;
					GameObject.Find("Ball").SendMessage("flyingToggle", false);
				}
				//player.rigidbody2D.velocity.y += 1;
				//player.rigidbody2D.velocity.y *= 2;
			}
			if (dPressed == true) {
				player.GetComponent.<Rigidbody2D>().velocity.x = 0;
			}
			if (tjsPressed == true) {
			//	if (fuelAmount > 0 && fuelOn) {
					player.GetComponent.<Rigidbody2D>().AddForce(Vector2(0,jetpackStrength*5)); //jetpack
			//		fuelAmount -= 0.02;
					if (soundOn) {
						JetpackSoundObject.GetComponent.<AudioSource>().clip = Soundjetpack1;
						JetpackSoundObject.GetComponent.<AudioSource>().volume = 0.25;
						JetpackSoundObject.GetComponent.<AudioSource>().Play();
					}
					GameObject.Find("Ball").SendMessage("flyingToggle", true);
					coughed = false;
			//	}
			//	else {
			//		if (soundOn) {
			//			JetpackSoundObject.audio.clip = Soundjetpack2;
			//			JetpackSoundObject.audio.volume = 1;
			//			JetpackSoundObject.audio.Play();
			//		}
			//	}
			}
		}
		else {
			if (tjPressed == true) {
				if (fuelAmount > 0 && fuelOn) {
					player.GetComponent.<Rigidbody2D>().AddForce(Vector2(0,jetpackStrength * (Time.deltaTime * 59))); //jetpack
					fuelAmount -= 0.02;
				}
				else if (!coughed) {
					if (soundOn) {
						JetpackSoundObject.GetComponent.<AudioSource>().clip = Soundjetpack2;
						JetpackSoundObject.GetComponent.<AudioSource>().volume = 1;
						JetpackSoundObject.GetComponent.<AudioSource>().Play();
					}
					coughed = true;
					GameObject.Find("Ball").SendMessage("flyingToggle", false);
				}
				//player.rigidbody2D.velocity.y += 1;
				//player.rigidbody2D.velocity.y *= 2;
				
			}
			if (tjsPressed == true) {
			//	if (fuelAmount > 0 && fuelOn) {
					player.GetComponent.<Rigidbody2D>().AddForce(Vector2(0,jetpackStrength*5)); //jetpack
			//		fuelAmount -= 0.02;
					if (soundOn) {
						JetpackSoundObject.GetComponent.<AudioSource>().clip = Soundjetpack1;
						JetpackSoundObject.GetComponent.<AudioSource>().volume = 0.25;
						JetpackSoundObject.GetComponent.<AudioSource>().Play();
					}
					GameObject.Find("Ball").SendMessage("flyingToggle", true);
					coughed = false;
			//	}
			//	else {
			//		if (soundOn) {
			//			JetpackSoundObject.audio.clip = Soundjetpack2;
			//			JetpackSoundObject.audio.volume = 1;
			//			JetpackSoundObject.audio.Play();
			//		}
			//	}
			}
			if (jPressed == true && dPressed == false) {
				player.GetComponent.<Rigidbody2D>().velocity.x = -speed*0.75;
			}
			if (dPressed == true && jPressed == false) {
				player.GetComponent.<Rigidbody2D>().velocity.x = speed*0.75;
			}
			if (jPressed == false && dPressed == false) {
				player.GetComponent.<Rigidbody2D>().velocity.x = 0;
			}
			///////////////////////////////////////////////////
			//////////////COMPUTER DEBUGGING///////////////////
			///////////////////////////////////////////////////
			
			/*
			if (Input.GetKeyDown("space")) {
				player.rigidbody2D.velocity.y += 1;
				player.rigidbody2D.velocity.y *= 2;
			}
			*/
			if (Input.GetKeyDown("space")) {
				
				//testing jump without jetpack
				
				//if (fuelAmount > 0 && fuelOn) {
//Debug.LogError("jetpack Down");
					player.GetComponent.<Rigidbody2D>().AddForce(Vector2(0,jetpackStrength*5)); //jetpack
					//fuelAmount -= 0.02;
					if (soundOn) {
						JetpackSoundObject.GetComponent.<AudioSource>().clip = Soundjetpack1;
						JetpackSoundObject.GetComponent.<AudioSource>().volume = 0.25;
						JetpackSoundObject.GetComponent.<AudioSource>().Play();
					}
					GameObject.Find("Ball").SendMessage("flyingToggle", true);
					coughed = false;
				/*}
				else {
					if (soundOn) {
						JetpackSoundObject.audio.clip = Soundjetpack2;
						JetpackSoundObject.audio.volume = 1;
						JetpackSoundObject.audio.Play();
					}
				}*/}
			if (Input.GetKey("space")) {
//Debug.LogError("jetpack");
				if (fuelAmount > 0 && fuelOn) {
					player.GetComponent.<Rigidbody2D>().AddForce(Vector2(0,jetpackStrength * (Time.deltaTime * 59))); //jetpack
					fuelAmount -= 0.02;
//Debug.LogError("Fuel Left: " + fuelAmount.ToString("F2") + "L.");
				}
				else if (!coughed) {
					if (soundOn) {
						JetpackSoundObject.GetComponent.<AudioSource>().clip = Soundjetpack2;
						JetpackSoundObject.GetComponent.<AudioSource>().volume = 1;
						JetpackSoundObject.GetComponent.<AudioSource>().Play();
					}
					coughed = true;
					GameObject.Find("Ball").SendMessage("flyingToggle", false);
				}
			}
			if (Input.GetKeyUp("space")) {
//Debug.LogError("jetpack Up");
				if (JetpackSoundObject.GetComponent.<AudioSource>().clip == Soundjetpack1) JetpackSoundObject.GetComponent.<AudioSource>().Stop();
				GameObject.Find("Ball").SendMessage("flyingToggle", false);
			}
			
			if (Input.GetKey("left")) player.GetComponent.<Rigidbody2D>().velocity.x = -speed*0.75;
			if (Input.GetKey("right")) player.GetComponent.<Rigidbody2D>().velocity.x = speed*0.75;
			//if (!Input.GetKey("left") && !Input.GetKey("right")) player.rigidbody2D.velocity.x = 0;	
			
		}
		
		
		
		
		
		
		
		
		
		
	}
	if (GameOver == 1) {
	GameObject.Find("FuelAmount").GetComponent.<Renderer>().enabled = false;
	GetComponent(AudioSource).GetComponent.<AudioSource>().clip = endGameMusic;
	GetComponent(AudioSource).GetComponent.<AudioSource>().Play();
		GameObject.Find("Pause").GetComponent.<Renderer>().enabled = false;
		GameObject.Find("Pause").GetComponent.<Collider2D>().enabled = false;
		GameObject.Find("Main Menu").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("Main Menu").GetComponent.<Collider2D>().enabled = true;
		GameObject.Find("GameOver").GetComponent.<Renderer>().enabled = true;
		GameObject.Find("GameOver").GetComponent.<Collider2D>().enabled = true;
		
		Instantiate(endLight,Vector3(0,0,-9),transform.rotation);
		GameOver = 2;
		
		GameObject.Find("BoostButton").GetComponent.<Collider2D>().enabled = false;
	}
	}
}

var bootsBool : boolean = false;

function bootsOn () {
	bootsBool = true;
	jetpackStrength = 32.5;
}
function bootsOff () {
	bootsBool = false;
	jetpackStrength = 23.3;
}



function ChangeFuel (x : int) {
	if (x != 0) {
		fuelOn = true;
		coughed = false;
		GameObject.Find("Ball").SendMessage("ChangeFuel", x);
	}
	if (x == 2) {
		fuelCapacity = 4;
	}
	else if (x == 3) {
		fuelCapacity = 8;
	}
	else if (x == 4) {
		fuelCapacity = 8;
		GameObject.Find("Ball").SendMessage("ChangeFuel", x);
	}
}

function FuelOff () {
	fuelOn = false;
}

function fillFuel () {
	fuelAmount = fuelCapacity;
	coughed = false;
}
