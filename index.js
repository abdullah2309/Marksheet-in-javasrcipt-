

function button() {


  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var input3 = document.getElementById('input3').value;
  var input4 = document.getElementById('input4').value;
  var input5 = document.getElementById('input5').value;

  //  <--Name-->
  var myVariable = document.getElementById('name1').value;
  document.getElementById('name2').innerHTML = myVariable;
  //  <--Batch-->
  var myVariable1 = document.getElementById('batch1').value;
  document.getElementById('batch2').innerHTML = myVariable1;
  //  <--Studentid-->
  var myVariable2 = document.getElementById('stud1').value;
  document.getElementById('stud2').innerHTML = myVariable2;
  //  <--Totalmark-->
  var myVariable3 = document.getElementById('TotalMark').value;
  document.getElementById('TotalMark2').innerHTML = myVariable3;
  //  <--ob mark-->
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var input3 = document.getElementById('input3').value;
  var input4 = document.getElementById('input4').value;
  var input5 = document.getElementById('input5').value;
  var mark = (input1) - (-input2) - (-input3) - (-input4) - (-input5);
  document.getElementById('obmark').innerHTML = mark;

  var per = (mark * 100) / myVariable3;
  document.getElementById('per').innerHTML = per + ('%');



  if (per <= 40) {
    document.getElementById('grade').innerText = ('F');
  }
  else if (per < 50) {
    document.getElementById('grade').innerText = ('D');
  }
  else if (per < 60) {
    document.getElementById('grade').innerText = ('C');
  }
  else if (per < 70) {
    document.getElementById('grade').innerText = ('B');
  }
  else if (per < 80) {
    document.getElementById('grade').innerText = ('A');
  }
  else {
    document.getElementById('grade').innerText = ('A+');
  }

  if (input1 <= 33 || input2 <= 33 || input3 <= 33 || input4 <= 33 || input5 <= 33) {
    document.getElementById('status').innerText = ('Fail');
  }
  else {
    document.getElementById('status').innerText = ('Pass');
  }














}







