#pragma strict

public var ship : shipController;

function Start () {

}

function Update () {
	if (ship) {
		var accel = Mathf.Sqrt(ship.x_accel * ship.x_accel + ship.y_accel * ship.y_accel);
		guiText.text = "Velocity: " + ship.rigidbody.velocity.magnitude.ToString("#0.0") + "         <size=50>horiz:" + ship.rigidbody.velocity.x.ToString("#0.0") + "     ↕:" + ship.rigidbody.velocity.x.ToString("#0.0") + 
		"</size>\n<color=red>Accel: " + accel.ToString("#0.0") + "           <size=50>x:" + ship.x_accel.ToString("#0") + "     y:" + ship.y_accel.ToString("#0") +  "</size></color>";
	}
}