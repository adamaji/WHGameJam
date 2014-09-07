#pragma strict

private var initialPosition : Vector3;
private var initialShip : Vector3;
public var ship : GameObject;

function Start () {
	initialPosition = transform.position;
	initialShip = ship.transform.position;
}

function Update () {
	if (ship){
		transform.position = initialPosition + (ship.transform.position - initialShip);
	}
}