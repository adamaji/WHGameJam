#pragma strict

private var start : Vector3 = Vector3.zero;

function Start () {
	start = transform.position;
}

function FixedUpdate () {
	transform.position.x = start.x + Mathf.Sin(Time.time);
}