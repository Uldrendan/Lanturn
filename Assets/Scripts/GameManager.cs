using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour {

    private BlockSpawner _blockSpawner;
    private Elevator _elevator;
    //private ObjectPool _objectPool;

	void Start ()
    {
        _blockSpawner = new BlockSpawner();
        // Main Floor
        _blockSpawner.SpawnFloor(0, -1);
        _blockSpawner.SpawnFloor(-5, -6);
        _blockSpawner.SpawnFloor(-10, -11);
        _blockSpawner.SpawnFloor(-15, -16);
        // Main Walls
        _blockSpawner.SpawnWorldWalls();
    }
}
