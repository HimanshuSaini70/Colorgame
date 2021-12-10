var numSquares = 9;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn"); 
var intrBtn = document.querySelector("#intrBtn"); 

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numSquares = 3;
	colors= generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent=pickedcolor;
   for (var i = 0;i<squares.length; i++){
   	if (colors[i]) {
   		squares[i].style.background= colors[i];
   	}
   	else {
   		squares[i].style.display= "none";
   	}
   }
})
intrBtn.addEventListener("click",function(){
	hardBtn.classList.remove ("selected")
	intrBtn.classList.add ("selected")

	numSquares = 6;
	colors= generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent=pickedcolor;
   for (var i = 0;i<squares.length; i++){
  squares[i].style.background= colors[i];
  squares[i].style.display= "block";
   	
   }
})
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected")
	hardBtn.classList.add ("selected")
	numSquares = 9;
	colors= generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent=pickedcolor;
   for (var i = 0;i<squares.length; i++){
  squares[i].style.background= colors[i];
  squares[i].style.display= "block";
   	
   }
})


resetbutton.addEventListener("click",function(){
	//generate all new cololrs
	colors = generateRandomColors(numSquares);
	messageDisplay.textContent="";
	//pick a new random color from array

	 pickedcolor = pickcolor(); 
	// change color display match picked color
	colorDisplay.textContent = pickedcolor;
	this.textContent= "New Colors";
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i]
	}
	h1.style.background = "rgba(238, 1, 247, 0.226)";	
})

colorDisplay.textContent = pickedcolor;

for (var i = 0 ; i < squares.length; i++) {
	//add initial color to squares 
	squares[i].style.background = colors[i];
    // add click listener to squares

    squares[i].addEventListener("click", function () {
    	//grab color of selected square
    	var clickcolor = this.style.background;
    	//compare color to picke color
    	if (clickcolor === pickedcolor) {
    		messageDisplay.textContent = "Correct!";
    		resetbutton.textContent= "Play Again?"
    		Changecolor(clickcolor);
    		h1.style.background = clickcolor;
    	}	
    	else 
    	{
    		this.style.background = '#232323';
    		messageDisplay.textContent = "Try Again";
    	}
    });
}



function Changecolor(colors) {
	// loop through all the squares
	for (var i = 0 ; i < squares.length ; i++) {
	 // change each color to match right color 
	 squares[i].style.background = colors;
	}
}

function pickcolor() {
 var random =  Math.floor(Math.random() * colors.length)
 return colors[random];
}

//for generating random colour
function generateRandomColors(num) {
	// make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i< num; i++) {
		//add num  random color to array
     arr.push(randomColor());
	}
	//return array
	return arr;
}
 //generating color from 
function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random()* 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";	
}