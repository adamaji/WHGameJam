#pragma strict

public var ship : shipController;

function Start () {

}

function FixedUpdate () {
	ship.x_accel = Input.GetAxis("Horizontal");
}