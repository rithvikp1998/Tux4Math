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
  var i;
  
  for(i=1;i<=3;i++){
    check(i,i+8,10);
  }
  
  for(i=4;i<=6;i++){
    check(i,i+8,100);
  }
  
  for(i=7;i<=8;i++){
    check(i,i+8,1000);
  }
  
  document.getElementById("answerbtn1").style.visibility="visible";
}

function displayAnswers1(){
  document.getElementById("answerSheet1").innerHTML="The answes are 10, 10, 10, 100, 100, 100, 1000 & 1000";
}

function displayResults2(){
  var res;
  
  check(17,22,2);
  check(18,23,-1);
  check(19,24,-8);
  check(20,25,11);
  check(21,26,-9);

  document.getElementById("answerbtn2").style.visibility="visible";
}

function displayAnswers2(){
  document.getElementById("answerSheet2").innerHTML="The answes are 2, -1, -8, 11, -9";
}