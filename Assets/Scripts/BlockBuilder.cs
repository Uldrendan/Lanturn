using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class BlockBuilder
{

    private GameObject BlockPrefab;


    public BlockBuilder()
    {
        BlockPrefab = GetBlockPrefab();
    }
    private GameObject GetBlockPrefab()
    {
        return (GameObject) Resources.Load("Prefabs/Block");
    }

    public void BuildBlock(Vector2 centrePosition, Vector2 dimensions)
    {
        GameObject block_GO = GameObject.Instantiate(BlockPrefab,centrePosition,Quaternion.identity);
        Block block = block_GO.GetComponent<Block>();
        block.Initialize();
        block.SetDimensions(dimensions);
    }

}
