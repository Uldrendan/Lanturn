using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Utility
{
    public enum InputType { Left, Right, Jump, Up, Down, Pause, UseItem, HelloWorld };

    public static class TypeCast
    {
        public static float BoolToFloat(bool value) { return (float)((value) ? 1 : 0); }
        public static int BoolToInt(bool value) { return (int)((value) ? 1 : 0); }

        public static bool FloatToBool(float value) { return (bool)(value != 0); }
        public static bool IntToBool(int value) { return (bool)(value != 0); }
    }

    public class MultiValueDictionary<K, V> : Dictionary<K, List<V>>
    {

        public MultiValueDictionary() { }

        /// <summary>
        /// Becomes a clone of a given MVD.
        /// </summary>
        /// <param name="original">The MVD to clone.</param>
        public MultiValueDictionary(MultiValueDictionary<K, V> original)
        {
            foreach (KeyValuePair<K,List<V>> kvp in original)
            {
                Add(kvp.Key,kvp.Value);
            }
        }

        public void Add(K TKey, V TValue)
        {
            // If this is not the first value for the key
            if (ContainsKey(TKey))
            {
                this[TKey].Add(TValue);
            }
            // If this is the first value for the key
            else
            {
                List<V> values = new List<V>();
                values.Add(TValue);
                Add(TKey, values);
            }
        }

        public void Remove(K TKey, V TValue)
        {
            if (ContainsKey(TKey))
            {
                List<V> values = this[TKey];
                if (values.Contains(TValue))
                {
                    if (values.Count == 1)
                        Remove(TKey);
                    else
                        this[TKey].Remove(TValue);

                }
                else
                {
                    Debug.LogError("Tried to remove value " + TValue + " from key " + TKey + "; no such value exists.");
                }
            }
            else
            {
                Debug.LogError("Tried to remove value " + TValue + " from key " + TKey + "; no such key exists.");
            }
        }

    }
}