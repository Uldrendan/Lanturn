using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MenuMovement : MonoBehaviour {
    //TODO: Make this smarter?
    public float speed = 3;

    List<RectTransform> menus = new List<RectTransform>();

    private void Start()
    {
        for(int i = 0; i < transform.childCount; i++)
        {
            menus.Add(transform.GetChild(i).GetComponent<RectTransform>());
        }
    }

    public void MoveLeft()
    {
        foreach(RectTransform menu in menus)
        {
            menu.position = new Vector2(menu.transform.position.x - 6.6f, 0);
        }
    }

    public void MoveRight()
    {
        foreach (RectTransform menu in menus)
        {
            menu.position = new Vector2(menu.transform.position.x + 6.6f, 0);
        }
    }
}
