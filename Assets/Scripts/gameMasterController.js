#pragma strict
import System.IO;

var fileName = "foo.txt";
public var ship : shipController;
public var accel_scale : float = 1;

function Start () {
	
}

function FixedUpdate () {
	ship.x_accel = Input.GetAxis("VerticalRight") * accel_scale;
	ship.y_accel = Input.GetAxis("Vertical") * accel_scale;
	if (Input.GetButton("Fire1")) {
		Application.LoadLevel(Application.loadedLevel);
	}
	if (Input.GetKey("escape")){
		Application.LoadLevel(0);
	}
}