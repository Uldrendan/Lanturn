using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Utility;

public class BlockBuilder
{ 
    private GameObject _blockPrefab;

    public BlockBuilder()
    {
        _blockPrefab = GetBlockPrefab();
    }
    private GameObject GetBlockPrefab()
    {
        return (GameObject) Resources.Load("Prefabs/Block");
    }

    public void BuildBlock(Vector2 centrePosition, Vector2 dimensions)
    {
        GameObject block_GO = GameObject.Instantiate(_blockPrefab, centrePosition,Quaternion.identity);
        Block block = block_GO.GetComponent<Block>();
        block.Initialize();
        block.SetDimensions(dimensions);
    }
}
