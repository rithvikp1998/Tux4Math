function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var count1=0;

function check1(){
	document.getElementById("ansImg1").style.visibility="visible"
	var checkValue;
	var number;

	number = document.getElementById("number1").innerHTML;
	checkValue = document.getElementById("ansArea1").value;
	if(count1<5){
		if(checkValue==10){
			document.getElementById("ansImg1").src="img/tick.png";
			count1++;
		}
		else{
			document.getElementById("ansImg1").src="img/cross.png";
		}
	}
	else if(count1<25 && count1>=5){
		if(checkValue==100){
			document.getElementById("ansImg1").src="img/tick.png";
			count1++;
		}
		else{
			document.getElementById("ansImg1").src="img/cross.png";
		}
	}
	else if(count1<45 && count1>=25){
		if(checkValue==1000){
			document.getElementById("ansImg1").src="img/tick.png";
			count1++;
		}
		else{
			document.getElementById("ansImg1").src="img/cross.png";
		}
	}
	else{
		if(checkValue==10000){
			document.getElementById("ansImg1").src="img/tick.png";
			count1++;
		}
		else{
			document.getElementById("ansImg1").src="img/cross.png";
		}
	}
}

function next1(){
	
	document.getElementById("ansImg1").style.visibility="hidden";
	document.getElementById("ansArea1").value="";
	
	if(count1<5){
		document.getElementById("number1").innerHTML=getRandomInt(7,13);
		document.getElementById("number2").innerHTML=getRandomInt(7,13);
	} 
	else if(count1<15 && count1>=5){
		document.getElementById("number1").innerHTML=getRandomInt(90,110);
		document.getElementById("number2").innerHTML=getRandomInt(90,110);
	}
	else if(count1<25 && count1>=15){
		document.getElementById("number1").innerHTML=getRandomInt(80,120);
		document.getElementById("number2").innerHTML=getRandomInt(80,120);
	}
	else if(count1<35 && count1>=25){
		document.getElementById("number1").innerHTML=getRandomInt(990,1010);
		document.getElementById("number2").innerHTML=getRandomInt(990,1010);
	}
	else if(count1<45 && count1>=35){
		document.getElementById("number1").innerHTML=getRandomInt(960,1040);
		document.getElementById("number2").innerHTML=getRandomInt(960,1040);
	}
	else{
		document.getElementById("number1").innerHTML=getRandomInt(9900,10100);	
		document.getElementById("number2").innerHTML=getRandomInt(9900,10100);
	}
}

var count2=0;

function check2(){
	document.getElementById("ansImg2").style.visibility="visible"
	var checkValue;
	var number;
	var base;
	number = document.getElementById("number3").innerHTML;
	checkValue = document.getElementById("ansArea2").value;
	base = document.getElementById("baseArea").innerHTML;
	if(number - base==checkValue){
		document.getElementById("ansImg2").src = "img/tick.png";
		count2++;
	} else{
		document.getElementById("ansImg2").src = "img/cross.png";
	}
}

function next2(){
	
	document.getElementById("ansImg2").style.visibility="hidden";
	document.getElementById("ansArea2").value="";
	
	if(count2<5){
		document.getElementById("number3").innerHTML=getRandomInt(7,13);
		document.getElementById("baseArea").innerHTML=10;
	} 
	else if(count2<15 && count2>=5){
		document.getElementById("number3").innerHTML=getRandomInt(90,110);
		document.getElementById("baseArea").innerHTML=100;
	}
	else if(count2<25 && count2>=15){
		document.getElementById("number3").innerHTML=getRandomInt(80,120);
		document.getElementById("baseArea").innerHTML=100;
	}
	else if(count2<35 && count2>=25){
		document.getElementById("number3").innerHTML=getRandomInt(990,1010);
		document.getElementById("baseArea").innerHTML=1000;
	}
	else if(count2<45 && count2>=35){
		document.getElementById("number3").innerHTML=getRandomInt(960,1040);
		document.getElementById("baseArea").innerHTML=1000;
	}
	else{
		document.getElementById("number3").innerHTML=getRandomInt(9900,10100);	
		document.getElementById("baseArea").innerHTML=10000;
	}
}