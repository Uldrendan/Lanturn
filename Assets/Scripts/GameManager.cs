using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour {

    private BlockBuilder _blockBuilder;
    private Elevator _elevator;
    //private ObjectPool _objectPool;

	void Start ()
    {
        _blockBuilder = new BlockBuilder();
        // Main Floor
        _blockBuilder.BuildBlock(new Vector2(0,0), new Vector2(20, 1));
        // Main Walls
        _blockBuilder.BuildBlock(new Vector2(10, 0), new Vector2(1, 100));
        _blockBuilder.BuildBlock(new Vector2(-10, 0), new Vector2(1, 100));
        //Secondary Floors
        _blockBuilder.BuildBlock(new Vector2(-6, 4), new Vector2(8, 1));
        _blockBuilder.BuildBlock(new Vector2(6, 4), new Vector2(8, 1));
        // Secondary Walls
        _blockBuilder.BuildBlock(new Vector2(-3, 10), new Vector2(1, 5));
        _blockBuilder.BuildBlock(new Vector2(3, 10), new Vector2(1, 5));
        // Secondary Walls
        _blockBuilder.BuildBlock(new Vector2(-3, 13), new Vector2(3,3));
        _blockBuilder.BuildBlock(new Vector2(3, 13), new Vector2(3, 3));
    }
}
