
public var explosionPrefab : Transform;

function OnCollisionEnter(collision : Collision){
	if (collision.gameObject.tag == "Player"){
		Instantiate(explosionPrefab, collision.gameObject.rigidbody.position, Quaternion.identity);
		Destroy(collision.gameObject);
		yield WaitForSeconds(1);
		Application.LoadLevel(Application.loadedLevel);
	}
}