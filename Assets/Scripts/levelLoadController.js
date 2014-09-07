#pragma strict

static public var fileName : String = "foo.txt";
public var ship : shipController;
public var camea : Transform;
public var levelGUI : GUIText;
private var levelData : Array = [];
public var obstaclePrefab : Transform;
public var goalPrefab : Transform;

function Start () {
	if (Application.loadedLevel == 1) {
		var sr = new StreamReader(Application.dataPath + "/Levels/" + fileName);
		var fileContents = sr.ReadToEnd();
		sr.Close();
		
		var lines = fileContents.Split("\n"[0]);
		levelGUI.text = lines[0];
		ship.transform.position.x = float.Parse(lines[1]);
		camea.position.x += ship.transform.position.x - 5;
		ship.transform.position.y = float.Parse(lines[2]);
		camea.position.y += ship.transform.position.y - 5;
		for (var i = 3; i < lines.length; i++) {
			levelData.push(lines[i].ToCharArray());
		}
		for (var a : int = 0; a < levelData.length; a++ ){
			var q : char[] = levelData[a];
			for (var b : int = 0; b < q.length; b++){
				if (q[b] == '1' ){
					Instantiate(obstaclePrefab, new Vector3(b, -a + levelData.length, 20 ), Quaternion.identity);
				} else if (q[b] == '2') {
					Instantiate(goalPrefab, new Vector3(b, -a + levelData.length, 20 ), Quaternion.identity);
				}
			}
		}
	}
}

function Update () {

}