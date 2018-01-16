using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainCamera : MonoBehaviour {

    private Transform _playerTransform;
    private Transform _sawTransform;

	// Use this for initialization
	void Start () {
        _playerTransform = GameObject.Find("Player").transform;
        _sawTransform = GameObject.Find("Saw").transform;
    }

    private int _cameraLeashLength = 20; //number is temporary, will be replaced with calculation based off of "world height"
    private int _sawDistance = 35; //number is temporary, will be replaced with calculation based off of "world height" (should be half-ish world height)
    private bool sawTakeOver = false; //if camera starts following the saw, the camera jitters without this when the player is too close to the top of the screen
    private int sawSize = 3; //the amount of the saw image we want to show up on the screen before the camera starts moving
    private float _cameraSmoothing = 2; //higher values = snappier camera movements

    // Update is called once per frame
    void Update () {
        Vector2 playerPosition = _playerTransform.position;
        Vector2 sawPosition = _sawTransform.position;
        Vector2 cameraPosition = transform.position;
        
        
        
        if (playerPosition.y - cameraPosition.y < -_cameraLeashLength) // player approaches bottom of screen
        {
            cameraPosition.y = playerPosition.y + _cameraLeashLength - 1; // the negative value is to deal with lerp never "quite" reaching the target location 
            sawTakeOver = false; //starts following player when they outrun the saw enough
            transform.position = Vector3.Lerp(transform.position, new Vector3(cameraPosition.x, cameraPosition.y, -10), Time.deltaTime * _cameraSmoothing);
        }
        else if ((playerPosition.y - cameraPosition.y > _cameraLeashLength) && !sawTakeOver) // player approaches top of screen (extra check prevents camera jitter)
        {
            cameraPosition.y = playerPosition.y - _cameraLeashLength;
            transform.position = Vector3.Lerp(transform.position, new Vector3(cameraPosition.x, cameraPosition.y, -10), Time.deltaTime * _cameraSmoothing);
        }
        else if (sawPosition.y + sawSize - cameraPosition.y < _sawDistance) //saw reaches edge of screen
        {
            cameraPosition.y = sawPosition.y + sawSize - _sawDistance;
            sawTakeOver = true;
            transform.position = new Vector3(cameraPosition.x, cameraPosition.y, -10);
        }
        //to be removed eventually:
        if (sawPosition.y < playerPosition.y) print("dead");
    }
}
