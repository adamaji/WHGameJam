var c1 : Color = Color.blue;
var c2 : Color = Color.red;
var xPoints : Array = [];
var yPoints : Array = [];
var vxPoints : Array = [];
var vyPoints : Array = [];

var xLine : LineRenderer;
var yLine : LineRenderer;
var vxLine : LineRenderer;
var vyLine : LineRenderer;
var ship : shipController;

var lineWidth : float = 0.1;

var maxWidth : float = 6000;

var maxLength : int = 2000;

var showAccel : boolean = true;
var showVel : boolean = false;

public var dumb : Material;

function Start() {
	 //xLine.material = new Material (Shader.Find("Particles/Additive"));
	 //yLine.material = new Material (Shader.Find("Particles/Additive"));	 
	// xLine.SetColors(c1,c1);
	 //yLine.SetColors(c2,c2);
	 xLine.SetWidth(lineWidth, lineWidth);
	 yLine.SetWidth(lineWidth, lineWidth);
	 vxLine.SetWidth(lineWidth, lineWidth);
	 vyLine.SetWidth(lineWidth, lineWidth);
	 xLine.SetVertexCount(0);
	 yLine.SetVertexCount(0);
	 vxLine.SetVertexCount(0);
	 vyLine.SetVertexCount(0);
}

function Update() {
	
	if (showAccel){
		var x = Input.GetAxis("Vertical");
		xPoints.Push(x);	
		if (xPoints.length > maxLength) {
			xPoints.RemoveAt(0);
		}
		xLine.SetVertexCount(xPoints.length);
		for(var i : int = 0; i < xPoints.length; i++) {
			var xpos : Vector3 = Vector3(maxWidth * (i*0.5)/xPoints.length * 1.9 - 7.2, xPoints[i], -500);
			xLine.SetPosition(i, xpos);
		}
		
		var y = Input.GetAxis("VerticalRight");
		yPoints.Push(y);
		if (yPoints.length > maxLength) {
			yPoints.RemoveAt(0);
		}
		yLine.SetVertexCount(yPoints.length);
		for(var j : int = 0; j < yPoints.length; j++) {
			var ypos : Vector3 = Vector3(maxWidth * (j*0.5)/yPoints.length * 1.9 + 3.3, yPoints[j], -500.1);
			yLine.SetPosition(j, ypos);
		}
	} else {
		xLine.SetVertexCount(0);
		yLine.SetVertexCount(0);
	}
	
	if (showVel){
		var vx = (ship.rigidbody.velocity.x * 0.05);
		vxPoints.Push(vx);
		if (vxPoints.length > maxLength){
			vxPoints.RemoveAt(0);
		}
		vxLine.SetVertexCount(vxPoints.length);
		for (var k : int = 0; k < vxPoints.length; k++) {
			var vxpos : Vector3 = Vector3(maxWidth * (k * 0.5)/vxPoints.length * 1.9 + 3.3, vxPoints[k], -500.2);
			vxLine.SetPosition(k, vxpos);
		}
		
		var vy = (ship.rigidbody.velocity.y * 0.05);
		vyPoints.Push(vy);
		if (vyPoints.length > maxLength){
			vyPoints.RemoveAt(0);
		}
		vyLine.SetVertexCount(vyPoints.length);
		for (var l : int = 0; l < vyPoints.length; l++) {
			var vypos : Vector3 = Vector3(maxWidth * (l * 0.5)/vyPoints.length * 1.9 - 7.2, vyPoints[l], -500.2);
			vyLine.SetPosition(l, vypos);
		}
	} else {
		vxLine.SetVertexCount(0);
		vyLine.SetVertexCount(0);
	}
	
}

function OnGUI(){
	var toggleAccel = GUI.Toggle( Rect(25,25,150,25), showAccel, "Show/Hide Accel");
	var toggleVel = GUI.Toggle( Rect(25,50,150,25), showVel, "Show/Hide Vel");
	
	if (toggleAccel != showAccel){
		showAccel = toggleAccel;
	}
	
	if (toggleVel != showVel){
		showVel = toggleVel;
	}
	
	if (!showAccel){
		toggleVel = true;
		showVel = true;
	}
	
}