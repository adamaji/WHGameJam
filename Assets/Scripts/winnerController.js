#pragma strict

private var startTime : float;

function Start () {
	startTime = Time.time;
}

function FixedUpdate () {
	transform.position.z = (50 -  Mathf.Exp(Time.time - startTime)*5 );
}