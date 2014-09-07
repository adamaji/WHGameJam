#pragma strict

private var start : Vector3 = Vector3.zero;
private var offset : float;

function Start () {
	start = transform.position;
	offset = Random.Range(0,5f);
	
}

function FixedUpdate () {
	transform.position.x = start.x + Mathf.Sin(Time.time + offset) * 5;
	transform.rotation.eulerAngles.y = (Time.time + offset) * 25;
}