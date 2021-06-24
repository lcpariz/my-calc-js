/* PEGAR NÚMEROS ( x )
  EXIBIR NO DISPLAY (  ) 
  LIMPAR DISPLAY (  )
  APAGAR ULTIMO ELEMENTO DIGITADO (  )
  SOMAR DOIS NÚMEROS (  ) */

var num = "";
var num1 = [];
var oldNum = [];
var op = "";
var limitNum = 8;


function AddNumber(number) {
  console.log(number)
  if(isNaN(number)) {
      op = number;
      oldNum = num1;
      num = oldNum.join("")
      num1.splice(length);  
    
  } else if(num1.length < limitNum) {
    num1.push(number); 
    console.log(num1);
    if(oldNum != false) {
      var num2 = num1.join("")
      calc(num, num2, op);
    }

  } else {
    console.log("Erro: Máximo de 8 números.");
  }
}

function calc(n1, n2, op) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  
  switch(op) {
    case '+': break;
    case '-': break;
    case '/': break;
    case '*': break;
    default:
      alert('Error#E-001: Algo errado aconteceu!');
      document.location.reload();
  }
}