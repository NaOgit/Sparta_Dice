function rollDie() {

  var die = Math.floor(Math.random()*6)+1;

  var dieSquare = document.getElementsByClassName('innerSquare');
  for (var i = 0; i < dieSquare.length; i++) {
    dieSquare[i].className = "innerSquare";
  }

 switch (die) {
   case 1:
     dieSquare[4].className = "innerSquare dot";
     break;
   case 2:
     dieSquare[0].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 3:
     dieSquare[0].className = "innerSquare dot";
     dieSquare[4].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 4:
     dieSquare[0].className = "innerSquare dot";
     dieSquare[2].className = "innerSquare dot";
     dieSquare[6].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 5:
     dieSquare[0].className = "innerSquare dot";
     dieSquare[2].className = "innerSquare dot";
     dieSquare[4].className = "innerSquare dot";
     dieSquare[6].className = "innerSquare dot";
     dieSquare[8].className = "innerSquare dot";
     break;
   case 6:
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
