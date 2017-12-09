using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour {

    private BlockBuilder _blockBuilder;

	void Start () {
        _blockBuilder = new BlockBuilder();
        // Main Floor
        _blockBuilder.BuildBlock(new Vector2(0,-9), new Vector2(20, 1));
        // Main Walls
        _blockBuilder.BuildBlock(new Vector2(10, 0), new Vector2(1, 100));
        _blockBuilder.BuildBlock(new Vector2(-10, 0), new Vector2(1, 100));
        //Secondary Floors
        _blockBuilder.BuildBlock(new Vector2(-6, -5), new Vector2(8, 1));
        _blockBuilder.BuildBlock(new Vector2(6, -5), new Vector2(8, 1));
        // Secondary Walls
        _blockBuilder.BuildBlock(new Vector2(-3, 4), new Vector2(1, 5));
        _blockBuilder.BuildBlock(new Vector2(3, 4), new Vector2(1, 5));
    }

    void Update () {
		
	}
}
