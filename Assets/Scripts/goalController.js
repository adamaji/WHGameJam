#pragma strict

public var winner : Transform;
static private var won;

function Start() {
	won = false;
}

function OnCollisionEnter(collision : Collision){
	if (!won) {
		if (collision.gameObject.tag == "Player"){
			won = true;
			Instantiate(winner, collision.gameObject.rigidbody.position + new Vector3(0,0,200), Quaternion.identity);
			Destroy(collision.gameObject);
			yield WaitForSeconds(4);
			print("WOW!");
			Application.LoadLevel(0);
		}
	}
}