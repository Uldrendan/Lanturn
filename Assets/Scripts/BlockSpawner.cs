using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Utility;

public class BlockSpawner
{ 
    private GameObject _blockPrefab;
    private List<GameObject> _floorQueue;

    const float SpawnHeight = -20;
    const float DespawnHeight = 20;
    const float WorldWidth = 40;
    const float MinGapWidth = 2;
    const float MaxGapWidth = 6;
    const float MinGapSpace = 2;

    public BlockSpawner()
    {
        _blockPrefab = GetBlockPrefab();
    }
    private GameObject GetBlockPrefab()
    {
        return (GameObject) Resources.Load("Prefabs/Block");
    }

    public void SpawnWorldWalls()
    {
        SpawnBlock(WorldWidth / 2, WorldWidth / 2 + 1, 50, -50);
        SpawnBlock(-WorldWidth / 2, -WorldWidth / 2 - 1, 50, -50);
    }

    public void SpawnBlock(Vector2 centrePosition, Vector2 dimensions)
    {
        GameObject block_GO = GameObject.Instantiate(_blockPrefab, centrePosition,Quaternion.identity);
        Block block = block_GO.GetComponent<Block>();
        block.Initialize();
        block.SetDimensions(dimensions);
    }

    public void SpawnBlock(float x1, float x2, float y1, float y2)
    {
        float top = Mathf.Max(y1, y2);
        float bottom = Mathf.Min(y1, y2);
        float left = Mathf.Min(x1, x2);
        float right = Mathf.Max(x1, x2);
        SpawnBlock(new Vector2((left + right) / 2, (top + bottom) / 2), new Vector2(right - left, top - bottom));
    }

    public void SpawnFloor(float y1, float y2,int numGaps)
    {
        if (numGaps == 0)
        {
            SpawnBlock(-WorldWidth / 2, WorldWidth / 2, y1, y2);
            return;
        }

        float leftBound = -WorldWidth / 2;
        float rightBound = -WorldWidth / 2 + (WorldWidth / numGaps);
        float gapLeft;
        float gapRight;
        while (rightBound <= WorldWidth / 2)
        {
            gapLeft = Random.Range(leftBound + MinGapSpace / 2, rightBound - MinGapWidth - MinGapSpace / 2);
            gapRight = Random.Range(gapLeft + MinGapWidth, Mathf.Min(rightBound - MinGapSpace / 2,gapLeft+MaxGapWidth));
            SpawnBlock(leftBound, gapLeft, y1, y2);
            SpawnBlock(gapRight, rightBound, y1, y2);

            leftBound += WorldWidth / numGaps;
            rightBound += WorldWidth / numGaps;
        }
    }
    public void SpawnFloor(float y1, float y2)
    {
        int numGaps = Random.Range(1, 4);
        SpawnFloor(y1, y2, numGaps);
    }
}
