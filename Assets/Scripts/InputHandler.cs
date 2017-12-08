using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Utility;

public class InputHandler {

    private MultiValueDictionary<InputType, Delegate> _inputMap;
    /// <summary>
    /// Returns a clone of the private "_inputMap".
    /// </summary>
    public MultiValueDictionary<InputType, Delegate> InputMap
    {
        get
        {
            return new MultiValueDictionary<InputType, Delegate>(_inputMap);
        }
    }

    public InputHandler()
    {
        //Debug.Log("I am an InputHandler");
        RestoreDefaults();
    }

	private void RestoreDefaults () {
        //Default Control Scheme
        _inputMap = new MultiValueDictionary<InputType, Delegate> ();
        Func<bool> helloWorld = () => Input.GetKeyDown(KeyCode.H);
        _inputMap.Add(InputType.HelloWorld, helloWorld);
        Func<bool> left = () => Input.GetKey(KeyCode.A);
        _inputMap.Add(InputType.Left, left);
        Func<bool> right = () => Input.GetKey(KeyCode.D);
        _inputMap.Add(InputType.Right, right);
        Func<bool> up = () => Input.GetKey(KeyCode.W);
        _inputMap.Add(InputType.Up, up);
        Func<bool> down = () => Input.GetKey(KeyCode.S);
        _inputMap.Add(InputType.Down, down);


    }

    // High-Level Input Functions
    /// <summary>
    /// Checks all input delegates for a given InputType.
    /// Returns true if ANY input delegate returns true.
    /// </summary>
    /// <param name="inputType">The InputType to check.</param>
    /// <returns>bool: The *OR* output of all input delegates.</returns>
    public bool GetPlayerInputBool(InputType inputType)
    {
        List<Delegate> delegates = _inputMap[inputType];
        foreach(Delegate del in delegates)
        {
            bool value = GetPlayerInputBool(del);
            if (value)
                return true;
        }
        return false;
    }
    /// <summary>
    /// Checks all input delegates for a given InputType.
    /// Returns the maximum value returned by the delegates.
    /// </summary>
    /// <param name="inputType"></param>
    /// <returns>The max output of all input delegates.</returns>
    public float GetPlayerInputFloat(InputType inputType)
    {
        List<Delegate> delegates = _inputMap[inputType];
        float maxValue = 0;
        foreach (Delegate del in delegates)
        {
            float value = GetPlayerInputFloat(del);
            if (value > 1)
            {
                Debug.LogError("GetPlayerInputFloat: Input delegate " + del + " returned > 1; setting to 1.");
                value = 1;
            }
            else if (value < 0)
            {
                Debug.LogError("GetPlayerInputFloat: Input delegate " + del + " returned < 0; setting to 0.");
                value = 0;
            }
            if (value > maxValue)
                maxValue = value;
        }
        return maxValue;
    }

    // Low-Level Input Functions

    /// <summary>
    /// Checks a player input delegate.
    /// </summary>
    /// <param name="inputFunction">The input delegate to check.</param>
    /// <returns>bool :: The output of the input delegate, as a bool.</returns>
    bool GetPlayerInputBool(Delegate inputFunction)
    {
        var value = inputFunction.DynamicInvoke();
        // Validation
        if      (value.GetType() == typeof(bool)) return (bool) value;
        else if (value.GetType() == typeof(float)) return TypeCast.FloatToBool((float) value);
        else    Debug.LogError("GetPlayerInputBool: Unexpected return type from input delegate " + inputFunction + "; returning false.");
        return false;
    }
    /// <summary>
    /// Checks a player input delegate.
    /// </summary>
    /// <param name="inputFunction">The input delegate to check.</param>
    /// <returns>float: The output of the input delegate, as a float.</returns>
    float GetPlayerInputFloat(Delegate inputFunction)
    {
        var value = inputFunction.DynamicInvoke();
        // Validation
        if (value.GetType() == typeof(float)) return (float) value;
        else if (value.GetType() == typeof(bool)) return TypeCast.BoolToFloat((bool) value);
        else Debug.LogError("GetPlayerInputFloat: Unexpected return type from input delegate" + inputFunction + "; returning 0.");
        return 0;
    }
}