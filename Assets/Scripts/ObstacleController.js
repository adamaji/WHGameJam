
public var explosionPrefab : Transform;
public var levelController : levelLoadController;

function OnCollisionEnter(collision : Collision){
	if (collision.gameObject.tag == "Player"){
		print("KABOOM!");
		levelController.flappys.push(collision.gameObject.transform.position);
		print(levelController.flappys);
		Instantiate(explosionPrefab, collision.gameObject.rigidbody.position, Quaternion.identity);
		Destroy(collision.gameObject);
		won = true;
		yield WaitForSeconds(2);
		Application.LoadLevel(Application.loadedLevel);
	}
}