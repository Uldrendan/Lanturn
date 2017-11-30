#pragma strict

var ballObject : GameObject;
var cameraObject : GameObject;

function Start () {


}

function Update () {

GetComponent(TextMesh).text = "tempVeloy: " + ballObject.GetComponent(BallBounds).tempVeloy + "\nmovex: " + cameraObject.GetComponent(GuiStuff).movex + "\nvelo: " + cameraObject.GetComponent(GuiStuff).velo + "\nRV: " + ballObject.GetComponent.<Rigidbody2D>().velocity.x;

}