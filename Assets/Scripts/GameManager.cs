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
        // Main Walls
        _blockSpawner.SpawnWorldWalls();
        for (int y = 0; y >= -5000; y-=5)
        {
            _blockSpawner.SpawnLevel(y, y-1);
        }
    }
}
