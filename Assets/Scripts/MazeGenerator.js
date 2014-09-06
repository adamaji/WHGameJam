var width : int;
var height : int;

var map : int[,];

var obstaclePrefab : Transform;

function Start () {
	map = new int[width,height];
	for (var i :int = 0; i < width; i++ ) {
		for ( var j :int = 0; j < height; j++ ) {
			if ( i == 0 || i == width-1 || j == 0 || j == height - 1 ) {
				map[i, j] = 1;
			} else {
				map[i, j] = 0;
			}
		}
	}
	for (var a:int = 0; a<width; a++ ){
		for (var b:int = 0; b<height; b++){
			if (map[a, b] > 0 ){
				Instantiate(obstaclePrefab, new Vector3( a, b, 20 ), Quaternion.identity);
			}
		}
	}
}