var c1 : Color = Color.blue;
var c2 : Color = Color.red;
var xPoints : Array = [];
var yPoints : Array = [];

var xLine : LineRenderer;
var yLine : LineRenderer;

var lineWidth : float = 0.1;

var maxWidth : float = 2000;

function Start() {
	 xLine.material = new Material (Shader.Find("Particles/Additive"));
	 yLine.material = new Material (Shader.Find("Particles/Additive"));	 
	 xLine.SetColors(c1,c1);
	 yLine.SetColors(c2,c2);
	 xLine.SetWidth(lineWidth, lineWidth);
	 yLine.SetWidth(lineWidth, lineWidth);
	 xLine.SetVertexCount(0);
	 yLine.SetVertexCount(0);
}

function Update() {
	
	var x = Input.GetAxis("Vertical");
	xPoints.Push(x);	
	xLine.SetVertexCount(xPoints.length);
	for(var i : int = 0; i < xPoints.length; i++) {
		var xpos : Vector3 = Vector3(maxWidth * (i*0.5)/xPoints.length, xPoints[i], 0);
		xLine.SetPosition(i, xpos);
	}
	
	var y = Input.GetAxis("VerticalRight");
	yPoints.Push(y);
	yLine.SetVertexCount(yPoints.length);
	for(var j : int = 0; j < yPoints.length; j++) {
		var ypos : Vector3 = Vector3(maxWidth * (j*0.5)/yPoints.length, yPoints[j], 5);
		yLine.SetPosition(j, ypos);
	}	
}