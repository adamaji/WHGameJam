#pragma strict

public var pointVector : Vector2;
private var length : float;
private var magicNumber1 : float = 0.100541;

function Start () {
	pointVector = Vector2(0,0);
}

function Update () {
	length = pointVector.magnitude;
	transform.rotation.eulerAngles.z = -1 * Mathf.Atan2(pointVector.x, pointVector.y) * Mathf.Rad2Deg;
	transform.GetChild(1).transform.localScale.y = length;
	transform.GetChild(0).transform.localPosition.y = magicNumber1 + length;
}