function check(inputID, outputID, checkValue){
  var res;
  
  res=document.getElementById(inputID).value;
  if(res==checkValue){
      document.getElementById(outputID).src="img/tick.png";
  } else{
      document.getElementById(outputID).src="img/cross.png";
  }
}

function displayResults1() {

  check(1,5,7);
  check(2,6,8);
  check(3,7,56);
  check(4,8,5625);
  
  document.getElementById("answerbtn1").style.visibility="visible";
}

function displayAnswers1(){
  document.getElementById("answerSheet1").innerHTML="The answes are 7, 8, 56 and 5625";
}

function displayResults2() {

  check(9,13,14);
  check(10,14,15);
  check(11,15,210);
  check(12,16,21025);
  
  document.getElementById("answerbtn2").style.visibility="visible";
}

function displayAnswers2(){
  document.getElementById("answerSheet2").innerHTML="The answes are 14, 15, 210 and 21025";
}

function displayResults3() {

  check(17,24,1007);
  check(18,25,1007);
  check(19,26,7);
  check(20,27,1014);
  check(21,28,1014000);
  check(22,29,49);
  check(23,30,1014049);
  document.getElementById("answerbtn3").style.visibility="visible";
}

function displayAnswers3(){
  document.getElementById("answerSheet3").innerHTML="The answes are 1007, 1000, 7, 1014, 1014000, 49, 1014049";
}

function displayResults4(){
  check(31,38,98);
  check(32,39,100);
  check(33,40,-2);
  check(34,41,96);
  check(35,42,9600);
  check(36,43,4);
  check(37,44,9604);
  document.getElementById("answerbtn4").style.visibility="visible";
}

function displayAnswers4(){
  document.getElementById("answerSheet4").innerHTML="The answes are 98, 100, -2, 96, 9600, 4 and 9604";
}

function displayResults5(){
  check(45,52,513);
  check(46,53,500);
  check(47,54,13);
  check(48,55,526);
  check(49,56,263000);
  check(50,57,169);
  check(51,58,263169);
  document.getElementById("answerbtn5").style.visibility="visible";
}

function displayAnswers5(){
  document.getElementById("answerSheet5").innerHTML="The answes are 513, 500, 13, 526, 263000, 169, 263169";
}

function displayResults6(){
  check(59,66,67);
  check(60,67,70);
  check(61,68,-3);
  check(62,69,64);
  check(63,70,4480);
  check(64,71,9);
  check(65,72,4489);
  document.getElementById("answerbtn6").style.visibility="visible";
}

function displayAnswers6(){
  document.getElementById("answerSheet6").innerHTML="The answes are 67, 70, -3, 64, 4480, 9, 4489";
}