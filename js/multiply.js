function check(inputID, outputID, checkValue){
  var res;
  
  res=document.getElementById(inputID).value;
  if(res==checkValue){
      document.getElementById(outputID).src="img/tick.png";
  } else{
      document.getElementById(outputID).src="img/cross.png";
  }
}


function displayResults1(){
  
  check(1,10,13);
  check(2,11,12);
  check(3,12,10);
  check(4,13,3);
  check(5,14,2);
  check(6,15,15);
  check(7,16,150);
  check(8,17,6);
  check(9,18,156);

  document.getElementById("answerbtn1").style.visibility="visible";
}

function displayAnswers1(){
  document.getElementById("answerSheet1").innerHTML="The answes are 13, 12, 10, 3, 2, 15, 150, 6 and 156";
}

function displayResults2(){
  
  check(19,28,98);
  check(20,29,103);
  check(21,30,100);
  check(22,31,-2);
  check(23,32,3);
  check(24,33,101);
  check(25,34,10100);
  check(26,35,-6);
  check(27,36,10094);

  document.getElementById("answerbtn2").style.visibility="visible";
}

function displayAnswers2(){
  document.getElementById("answerSheet2").innerHTML="The answes are 98, 103, 100, -2, 3, 101, 10100, -6 and 10094";
}