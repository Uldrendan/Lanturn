using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Utility;

public class Level
{
    public List<Block> Floors;
    public List<Block> Walls;
    public List<Block> OtherBlocks;
    public float Y;

    public Level(List<Block> floors, List<Block> walls)
    {
        Floors = floors;
        Walls = walls;
        OtherBlocks = new List<Block>();
    }

    public Level(List<Block> floors, List<Block> walls, List<Block> otherBlocks)
    {
        Floors = floors;
        Walls = walls;
        OtherBlocks = otherBlocks;
    }
}

public class BlockSpawner
{ 
    //TODO: difficulty scaling;
    private GameObject _blockPrefab;
    private Queue<Level> _levelQueue;

    const float SpawnHeight = -20;
    const float DespawnHeight = 20;
    const float WorldWidth = 40;
    const float MinGapWidth = 4;
    const float MaxGapWidth = 8;
    const float MinGapSpace = 2;

    public BlockSpawner()
    {
        _blockPrefab = GetBlockPrefab();
        _levelQueue = new Queue<Level>();
    }
    private GameObject GetBlockPrefab()
    {
        return (GameObject) Resources.Load("Prefabs/Block");
    }

    public void SpawnWorldWalls()
    {
        SpawnBlock(WorldWidth / 2, WorldWidth / 2 + 1, 50, -5000);
        SpawnBlock(-WorldWidth / 2, -WorldWidth / 2 - 1, 50, -5000);
    }

    public Block SpawnBlock(Vector2 centrePosition, Vector2 dimensions)
    {
        GameObject block_GO = GameObject.Instantiate(_blockPrefab, centrePosition,Quaternion.identity);
        Block block = block_GO.GetComponent<Block>();
        block.Initialize();
        block.SetDimensions(dimensions);
        return block;
    }

    public Block SpawnBlock(float x1, float x2, float y1, float y2)
    {
        float top = Mathf.Max(y1, y2);
        float bottom = Mathf.Min(y1, y2);
        float left = Mathf.Min(x1, x2);
        float right = Mathf.Max(x1, x2);
        return SpawnBlock(new Vector2((left + right) / 2, (top + bottom) / 2), new Vector2(right - left, top - bottom));
    }

    public List<Block> SpawnLevelFloors(float y1, float y2, int numGaps)
    {
        List<Block> blocks = new List<Block>();
        if (numGaps == 0)
        {
            Block singleFloor = SpawnBlock(-WorldWidth / 2, WorldWidth / 2, y1, y2);
            blocks.Add(singleFloor);
            return blocks;
        }

        float leftBound = -WorldWidth / 2;
        float rightBound = -WorldWidth / 2 + (WorldWidth / numGaps);
        float gapLeft;
        float gapRight;
        while (rightBound <= WorldWidth / 2)
        {
            gapLeft = Random.Range(leftBound + MinGapSpace / 2, rightBound - MinGapWidth - MinGapSpace / 2);
            gapRight = Random.Range(gapLeft + MinGapWidth, Mathf.Min(rightBound - MinGapSpace / 2, gapLeft + MaxGapWidth));
            Block blockLeft = SpawnBlock(leftBound, gapLeft, y1, y2);
            Block blockRight = SpawnBlock(gapRight, rightBound, y1, y2);

            blocks.Add(blockLeft);
            blocks.Add(blockRight);

            leftBound += WorldWidth / numGaps;
            rightBound += WorldWidth / numGaps;
        }
        return blocks;
    }
    public List<Block> SpawnLevelWalls(float y1, float y2, int numWalls)
    {
        List<Block> blocks = new List<Block>();



        return blocks;
    }

    public void SpawnLevel(float y1, float y2,int numGaps, int numWalls)
    {
        List<Block> floors = SpawnLevelFloors(y1,y2,numGaps);
    }
    public void SpawnLevel(float y1, float y2)
    {
        int numGaps = Random.Range(1, 5);
        int numWalls = Random.Range(0, 3);
        SpawnLevel(y1, y2, numGaps, numWalls);
    }

    public void SpawnLevel(float y)
    {
        SpawnLevel(y, y - 1);
    }
}
