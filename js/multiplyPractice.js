
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var count=0;

function check(){
	document.getElementById("ansImg").style.visibility="visible"
	var checkValue;
	var numA;
	var numB;
	numA = document.getElementById("firstNum").innerHTML;
	numB = document.getElementById("secondNum").innerHTML;
	checkValue = document.getElementById("ansArea").value;
	if(numA*numB==checkValue){
		document.getElementById("ansImg").src = "tick.png";
		count++;
	} else{
		document.getElementById("ansImg").src = "cross.png";
	}
}

function next(){
	
	document.getElementById("ansImg").style.visibility="hidden";
	document.getElementById("ansArea").value="";
	
	if(count<5){
		document.getElementById("firstNum").innerHTML = getRandomInt(0,9);
		document.getElementById("secondNum").innerHTML = getRandomInt(0,9);
	} 
	else if(count<15 && count>=5){
		document.getElementById("firstNum").innerHTML = getRandomInt(90,110);
		document.getElementById("secondNum").innerHTML = getRandomInt(90,110);
	}
	else if(count<35 && count>=15){
		document.getElementById("firstNum").innerHTML = getRandomInt(80,120);
		document.getElementById("secondNum").innerHTML = getRandomInt(80,120);
	}
	else if(count<50 && count>=35){
		document.getElementById("firstNum").innerHTML = getRandomInt(980,1020);
		document.getElementById("secondNum").innerHTML = getRandomInt(980,1020);
	}
	else{
		document.getElementById("firstNum").innerHTML = getRandomInt(960,1040);
		document.getElementById("secondNum").innerHTML = getRandomInt(960,1040);	
	}
}