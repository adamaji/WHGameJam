#pragma strict
import System.IO;

var fileName = "foo.txt";
public var ship : shipController;
public var accel_scale : float = 1;
public var obstaclePrefab : Transform;
public var levelGUI : GUIText;
private var levelData : Array = [];

function Start () {
	var sr = new StreamReader(Application.dataPath + "/Levels/" + fileName);
	var fileContents = sr.ReadToEnd();
	sr.Close();
	
	var lines = fileContents.Split("\n"[0]);
	levelGUI.text = lines[0];
	for (var i = 1; i < lines.length; i++) {
		levelData.push(lines[i].ToCharArray());
	}
	for (var a : int = 0; a < levelData.length; a++ ){
		var q : char[] = levelData[a];
		for (var b : int = 0; b < q.length; b++){
			if (q[b] == '1' ){
				Instantiate(obstaclePrefab, new Vector3(b, -a + levelData.length, 20 ), Quaternion.identity);
			}
		}
	}
}

function FixedUpdate () {
	ship.x_accel = Input.GetAxis("VerticalRight") * accel_scale;
	ship.y_accel = Input.GetAxis("Vertical") * accel_scale;
	if (Input.GetButton("Fire1")) {
		Application.LoadLevel(Application.loadedLevel);
	}
}