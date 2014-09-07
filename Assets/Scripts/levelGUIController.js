#pragma strict

private var starttime : float;
private var alivetime : float;

function Start () {
	starttime = Time.time;
}

function Update () {
	alivetime = Time.time - starttime;
	if (alivetime > 3) {
		transform.position.x += (alivetime - 3.3) * Time.deltaTime;
	}
}