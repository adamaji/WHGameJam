#pragma strict

public var x_accel : float;
public var y_accel : float;
public var max_velocity : float;
public var deadZone : float;
public var vArrow : arrowController;
public var aArrow : arrowController;

public var explosionPrefab : Transform;

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
	
	transform.rotation.eulerAngles.z = Mathf.Atan2(rigidbody.velocity.y, rigidbody.velocity.x) * Mathf.Rad2Deg;
	
	vArrow.pointVector = Vector2(rigidbody.velocity.x, rigidbody.velocity.y) * 0.5;
	aArrow.pointVector = Vector2(x_accel, y_accel) * 0.5;
}

function OnCollisionEnter(collision : Collision){
	if (collision.gameObject.tag == "Deadly"){
		Instantiate(explosionPrefab, this.gameObject.rigidbody.position, Quaternion.identity);
		this.gameObject.active = false;
		yield WaitForSeconds(1);
		this.gameObject.active = true;
		Application.LoadLevel(Application.loadedLevel);
	} else if (collision.gameObject.tag == "Finish"){
		Application.LoadLevel(0);
	}
}
