using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainCamera : MonoBehaviour {

    private Transform _playerTransform;

	// Use this for initialization
	void Start () {
        _playerTransform = GameObject.Find("Player").transform;
	}
	
	// Update is called once per frame
	void Update () {
        Vector2 posn = _playerTransform.position;
        transform.position = new Vector3(posn.x, posn.y, -10);
	}
}
