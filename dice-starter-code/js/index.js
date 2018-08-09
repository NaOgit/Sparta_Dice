function rollDie() {

  var die = Math.floor(Math.random()*6)+1;
  //assigned die to generate random number

  var dieSquare = document.getElementsByClassName('innerSquare');
  //get element
  for (var i = 0; i < dieSquare.length; i++) {
    dieSquare[i].className = "innerSquare";
    //return to original class
  }

 switch (die) {
   case 1:
   //if die is 1
     dieSquare[4].className = "innerSquare dot";
     break;
   case 2:
   //if die is 2
     dieSquare[0].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 3:
   //if die is 3
     dieSquare[0].className = "innerSquare dot";
     dieSquare[4].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 4:
   //if die is 4
     dieSquare[0].className = "innerSquare dot";
     dieSquare[2].className = "innerSquare dot";
     dieSquare[6].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 5:
   //if die is 5
     dieSquare[0].className = "innerSquare dot";
     dieSquare[2].className = "innerSquare dot";
     dieSquare[4].className = "innerSquare dot";
     dieSquare[6].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 6:
   //if die is 6
     dieSquare[0].className = "innerSquare dot";
     dieSquare[2].className = "innerSquare dot";
     dieSquare[3].className = "innerSquare dot";
     dieSquare[5].className = "innerSquare dot";
     dieSquare[6].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   default:
 }
}

var button = document.createElement("BUTTON");
button.innerHTML = "Play";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.className = "button";

button.addEventListener ("click", function() {
  rollDie();
});
