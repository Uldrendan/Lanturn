using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SawScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
    private float _sawSpeed = 2;

	// Update is called once per frame
	void Update () {
        Vector2 newPosition = transform.position;
        newPosition.y -= Time.deltaTime * _sawSpeed;
        transform.position = new Vector3(newPosition.x, newPosition.y, 0);
	}
}
