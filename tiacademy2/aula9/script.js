//exercicio 10
function valorImc(nome, altura, peso) {
  a = Number(altura);
  p = Number(peso);
  let imc = p / (a * 2);
  console.log('Nome: ', nome);
  console.log('Altura ', altura);
  console.log('Peso ', peso);
  console.log('IMC', imc);
}

pesoPessoa = prompt('digite seu peso');
alturaPessoa = prompt('digite sua altura');
nomePessoa = prompt('nome pessoa');
valorImc(nomePessoa, alturaPessoa, pesoPessoa);
