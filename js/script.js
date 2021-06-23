/* PEGAR NÚMEROS E EXIBIR NO DISPLAY (  ) 
  LIMPAR DISPLAY (  )
  APAGAR ULTIMO ELEMENTO DIGITADO (  )
  SOMAR DOIS NÚMEROS (  ) */

var num = "";
var num1 = [];
var oldNum = [];
var op = "";


function AddNumber(number) {
  console.log(number)
  if(isNaN(number)) {
    op = number;
    oldNum = num1;
    num = oldNum.join("")
    num1.splice(length);
    
  } else if(num1.length < 8) {
    num1.push(number); 
    console.log(num1);

  } else {
    console.log("Erro: Máximo de 8 números.");
  }
}