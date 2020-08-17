
//buttons
var p1Button=document.getElementById("p1");		//button1
var p2Button=document.getElementById("p2");		//button2
var p1Display=document.querySelector("#p1Display");	//span1
var p2Display=document.querySelector("#p2Display");	//span2
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=5;
var p3Button=document.getElementById("reset");
var p=document.querySelector("#pDisplay");
var input=document.querySelector("input");

p1Button.addEventListener("click", function(){
	if (!gameOver)
	{
		p1Score++;
		console.log(p1Score,winningScore);
		if (p1Score=== winningScore){
			p1Display.style.color="green";
			gameOver=true;
		}
		p1Display.textContent=p1Score;
	}
});	

p2Button.addEventListener("click", function(){
	if (!gameOver)
	{
		p2Score++;
		if (p2Score === winningScore){
			p2Display.style.color="green";
			gameOver=true;
		}
		p2Display.textContent= p2Score;

	}
});

p3Button.addEventListener("click", function(){
	reset();

});

function reset()
{
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.style.color="black";
	p2Display.style.color="black";
	gameOver=false;

}

input.addEventListener("change", function() {
		pDisplay.textContent=input.value;
		winningScore=Number(input.value);
		reset();
});
