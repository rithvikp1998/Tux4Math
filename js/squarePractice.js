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
	
	if(number*number==checkValue){
		document.getElementById("ansImg1").src = "img/tick.png";
		count++;
	} else{
		document.getElementById("ansImg1").src = "img/cross.png";
	}
}

function next1(){
	
	document.getElementById("ansImg1").style.visibility="hidden";
	document.getElementById("ansArea1").value="";
	
	if(count1<10){
		document.getElementById("number1").innerHTML=(getRandomInt(0,9)*10)+5 ;
	} 
	else if(count1<20 && count1>=10){
		document.getElementById("number1").innerHTML=(getRandomInt(0,14)*10)+5;
	}
	else if(count1<30 && count1>=20){
		document.getElementById("number1").innerHTML=(getRandomInt(0,19)*10)+5;
	}
	else if(count1<50 && count1>=30){
		document.getElementById("number1").innerHTML=(getRandomInt(0,99)*10)+5;
	}
	else{
		document.getElementById("number1").innerHTML=(getRandomInt(0,999)*10)+5;	
	}
}

var count2=0;

function check2(){
	document.getElementById("ansImg2").style.visibility="visible"
	var checkValue;
	var number;

	number = document.getElementById("number2").innerHTML;
	checkValue = document.getElementById("ansArea2").value;
	
	if(number*number==checkValue){
		document.getElementById("ansImg2").src = "img/tick.png";
		count2++;
	} else{
		document.getElementById("ansImg2").src = "img/cross.png";
	}
}

function next2(){
	
	document.getElementById("ansImg2").style.visibility="hidden";
	document.getElementById("ansArea2").value="";
	
	if(count2<10){
		document.getElementById("number2").innerHTML=getRandomInt(1,20) ;
	} 
	else if(count2<20 && count2>=10){
		document.getElementById("number2").innerHTML=getRandomInt(80,120);
	}
	else if(count2<30 && count2>=20){
		document.getElementById("number2").innerHTML=getRandomInt(990,1010);
	}
	else if(count2<50 && count2>=30){
		document.getElementById("number2").innerHTML=getRandomInt(980,1020);
	}
	else{
		document.getElementById("number2").innerHTML=getRandomInt(0,999);	
	}
}

var count3=0;

function check3(){
	document.getElementById("ansImg3").style.visibility="visible"
	var checkValue;
	var number;

	number = document.getElementById("number3").innerHTML;
	checkValue = document.getElementById("ansArea3").value;
	
	if(number*number==checkValue){
		document.getElementById("ansImg3").src = "img/tick.png";
		count3++;
	} else{
		document.getElementById("ansImg3").src = "img/cross.png";
	}
}

function next3(){
	
	document.getElementById("ansImg3").style.visibility="hidden";
	document.getElementById("ansArea3").value="";
	
	if(count3<10){
		document.getElementById("number3").innerHTML=getRandomInt(1,20) ;
	} 
	else if(count3<20 && count3>=10){
		document.getElementById("number3").innerHTML=getRandomInt(80,120);
	}
	else if(count1<30 && count1>=20){
		document.getElementById("number3").innerHTML=getRandomInt(10,99);
	}
	else if(count1<50 && count1>=30){
		document.getElementById("number3").innerHTML=getRandomInt(980,1020);
	}
	else{
		document.getElementById("number3").innerHTML=getRandomInt(0,999);	
	}
}