#pragma strict

function Start () {

}

function FixedUpdate () {
	transform.position.x = Mathf.Sin(Time.time * Time.deltaTime * 1000) * 2;
}