#pragma strict

public var sploosh : GUITexture;

function Start () {
	var scale = sploosh.transform.localScale;
	scale.x = Screen.width;
	scale.y = Screen.height;
	sploosh.transform.localScale = scale;
}

function Update () {

}