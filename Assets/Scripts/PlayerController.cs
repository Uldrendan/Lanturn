using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Utility;

public class PlayerController : MonoBehaviour
{

    const float TopSpeed = 15;         // u/s
    const float JumpSpeed = 20;         // u/s

    const float TopAcceleration = 25;  // u/s^2
    const float DropAcceleration = 25; // u/s^2         

    //const float BrakeModifier = 0;


    private InputHandler _inputHandler;
    private Rigidbody2D _rigidbody2D;
    private Collider2D _collider2D;

    // Use this for initialization
    void Start()
    {
        _inputHandler = new InputHandler();
        _rigidbody2D = GetComponent<Rigidbody2D>();
        _collider2D = GetComponent<Collider2D>();
    }

    // Update is called once per frame
    void Update()
    {
        //Debug.Log("I am updating.");

        // RIGHT Input
        Vector2 currentVelocity = _rigidbody2D.velocity;
        float rightInput = _inputHandler.GetPlayerInputFloat(InputType.Right);
        Vector2 rightVector = new Vector2(rightInput * TopAcceleration * Time.deltaTime, 0);
        if (currentVelocity.x < TopSpeed)
        {
            _rigidbody2D.velocity = currentVelocity + rightVector;
        }

        // LEFT Input
        currentVelocity = _rigidbody2D.velocity;
        float leftInput = _inputHandler.GetPlayerInputFloat(InputType.Left);
        Vector2 leftVector = new Vector2(-leftInput * TopAcceleration * Time.deltaTime, 0);
        if (currentVelocity.x > -TopSpeed)
        {
            _rigidbody2D.velocity = currentVelocity + leftVector;
        }

        // DOWN Input
        currentVelocity = _rigidbody2D.velocity;
        float downInput = _inputHandler.GetPlayerInputFloat(InputType.Down);
        Vector2 downVector = new Vector2(0, -downInput * DropAcceleration * Time.deltaTime);
        _rigidbody2D.velocity = currentVelocity + downVector;

        // JUMP Input
        currentVelocity = _rigidbody2D.velocity;
        float upInput = _inputHandler.GetPlayerInputFloat(InputType.Up);
        if(upInput > 0.35f)
        {
            Vector2 jumpVector;
            // if touching floor, do regular jump
            if (_collider2D.IsTouchingLayers(LayerMask.GetMask("Floor")))
            {
                jumpVector = new Vector2(0, upInput * JumpSpeed);
                _rigidbody2D.velocity = new Vector3(currentVelocity.x, jumpVector.y); ;
            }
            // if touching wall, do wall jump (left)
            else if (_collider2D.IsTouchingLayers(LayerMask.GetMask("WallLeft")))
            {
                jumpVector = new Vector2(-1, 1).normalized * upInput * JumpSpeed;
                _rigidbody2D.velocity = jumpVector;
            }
            // if touching wall, do wall jump (right)
            else if (_collider2D.IsTouchingLayers(LayerMask.GetMask("WallRight")))
            {
                jumpVector = new Vector2(1,1).normalized * upInput * JumpSpeed;
                _rigidbody2D.velocity = jumpVector;
            }
            // if not touching floor and moving up, fight gravity
            else if (_rigidbody2D.velocity.y > 0)
            {
                jumpVector = new Vector2(0, upInput * Physics2D.gravity.magnitude * 0.4f * Time.deltaTime);
                _rigidbody2D.velocity += jumpVector;
            };
        }
    }
}
