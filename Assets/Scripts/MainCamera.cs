using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainCamera : MonoBehaviour {

    private Transform _playerTransform;

	// Use this for initialization
	void Start () {
        _playerTransform = GameObject.Find("Player").transform;
	}

    private int _cameraLeashLength = 20; //number is temporary, will be replaced with calculation based off of "world height"

    // Update is called once per frame
    void Update () {
        Vector2 playerPosition = _playerTransform.position;
        Vector2 cameraPosition = transform.position;
        
        if (playerPosition.y - cameraPosition.y < - _cameraLeashLength) 
        {
            cameraPosition.y = playerPosition.y + _cameraLeashLength;
        }
        else if (playerPosition.y - cameraPosition.y > _cameraLeashLength)
        {
            cameraPosition.y = playerPosition.y - _cameraLeashLength;
        }
        transform.position = new Vector3(cameraPosition.x, cameraPosition.y, -10);
    }
}
