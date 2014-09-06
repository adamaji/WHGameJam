#pragma strict

public var x_accel : float;
public var y_accel : float;
public var max_velocity : float;
public var deadZone : float;

function Start () {

}

function FixedUpdate () {
	rigidbody.velocity += Vector3(x_accel, y_accel, 0) * Time.deltaTime;
	rigidbody.velocity = Vector3.ClampMagnitude(rigidbody.velocity, max_velocity);
	
	if (x_accel == 0 && Mathf.Abs(rigidbody.velocity.x) < deadZone) {
		rigidbody.velocity.x = 0;
	}
	if (y_accel == 0 && Mathf.Abs(rigidbody.velocity.y) < deadZone) {
		rigidbody.velocity.y = 0;
	}
	
}

function onGUI() {
	
}