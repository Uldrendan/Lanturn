using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Block : MonoBehaviour {

    const float MinimumWidth = 1;
    const float MinimumHeight = 1;
    const float SideThickness = 0.25f; // how thicc

    private Transform _leftSideTransform;
    private Transform _rightSideTransform;
    private Transform _topSideTransform;
    private Transform _bottomSideTransform;
    private Transform _spriteTransform;

    private Sprite _leftSideSprite;
    private Sprite _rightSideSprite;
    private Sprite _topSideSprite;
    private Sprite _bottomSideSprite;
    private Sprite _sprite;

    private Vector2 _dimensions;
    public Vector2 Dimensions
    {
        get { return _dimensions; }
        set { SetDimensions(value); }
    }

    public float Left
    {
        get { return transform.position.x - (Dimensions.x / 2); }
    }
    public float Right
    {
        get { return transform.position.x + (Dimensions.x / 2); }
    }
    public float Top
    {
        get { return transform.position.y + (Dimensions.y / 2); }
    }
    public float Bottom
    {
        get { return transform.position.y - (Dimensions.y / 2); }
    }

    public void Initialize()
    {
        _leftSideTransform = transform.Find("LeftSide");
        _rightSideTransform = transform.Find("RightSide");
        _topSideTransform = transform.Find("TopSide");
        _bottomSideTransform = transform.Find("BottomSide");
        _spriteTransform = transform.Find("Sprite");
        _dimensions = new Vector2(MinimumWidth, MinimumHeight);
    }

    public void SetDimensions(int x, int y)
    {
        SetDimensions(new Vector2(x, y));
    }
    public void SetDimensions(Vector2 dimensions)
    {
        _dimensions = dimensions;
        if (dimensions.x < MinimumWidth)
        {
            Debug.Log("Block cannot be less than " + MinimumWidth + "units wide.");
            _dimensions.x = MinimumWidth;
        }
        if (dimensions.y < MinimumHeight)
        {
            Debug.Log("Block cannot be less than " + MinimumHeight + "units tall.");
            _dimensions.y = MinimumHeight;
        }

        _spriteTransform.localScale = dimensions;
        _leftSideTransform.localScale = new Vector3(SideThickness, dimensions.y);
        _leftSideTransform.localPosition = new Vector3((SideThickness / 2) - (dimensions.x / 2), 0, 1);

        _rightSideTransform.localScale = new Vector3(SideThickness, dimensions.y);
        _rightSideTransform.localPosition = new Vector3((dimensions.x / 2) - (SideThickness / 2), 0, 1);

        _topSideTransform.localScale = new Vector3(dimensions.x, SideThickness);
        _topSideTransform.localPosition = new Vector3(0, (dimensions.y / 2) - (SideThickness / 2), 0);

        _bottomSideTransform.localScale = new Vector3(dimensions.x, SideThickness,2);
        _bottomSideTransform.localPosition = new Vector3(0, (SideThickness / 2) - (dimensions.y / 2), 0);
    }

    public void Update()
    {
        
    }
}
