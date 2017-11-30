#pragma strict

function Start () {

	try {
			var gr = new StreamReader(Application.persistentDataPath + "/NewTutorial.txt");
			var line = gr.ReadLine();
			if (line == "false") {
				GameObject.Find("HelpMenu").SendMessage("OnMouseUp");
			}
			gr.Close();
			var gw = new StreamWriter(Application.persistentDataPath + "/NewTutorial.txt");
			gw.Write("true");
			gw.Close();
		}
		catch (e) {
			Debug.Log("Tutorial not found");
			tutorial();
		}
	//var gw = new StreamWriter(Application.persistentDataPath + "/TutorialTest1.txt");
	//gw.Write("true");
	//gw.Close();
	
	//tutorial();//testing

}

var TutorialPlay : GameObject;


function tutorial () {
	Debug.Log("Starting Tutorial");
	GameObject.Find("MenuSwipe").SendMessage("help", true);
	GameObject.Find("Lanturn").transform.position.y = 8;
	for each (t in GameObject.FindGameObjectsWithTag("menu")){
		t.GetComponent.<Renderer>().enabled = false;
		t.GetComponent.<Collider2D>().enabled = false;
	}
	TutorialPlay.GetComponent.<Renderer>().enabled = true;
	TutorialPlay.GetComponent.<Collider2D>().enabled = true;
	
}