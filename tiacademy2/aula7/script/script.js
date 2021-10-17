// criar função verificando qual é o maior numero entre dois params

function verificaMaiorNum(num1, num2) {
  if (num1 > num2) {
    console.log('o nº ' + num1 + ' é maior que nº' + num2);
  }
  if (num2 > num1) {
    console.log('o nº ' + num1 + ' é menor que nº' + num2);
  } else {
    console.log('Os nº são iguais');
  }
}

verificaMaiorNum(1, 3);
verificaMaiorNum(10, 3);
verificaMaiorNum(1000, 1445453);
verificaMaiorNum(10, 10);
