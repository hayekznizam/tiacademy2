let nomes = ['Leandro', 'Matheus', 'Vinícius', 'Andrei', 'Otávio'];

const coisaNomes = (name, novoNome, index) => {
  console.log('Qtde de elementos do array ', name.length);
  console.log(`O indice escolhido  ${index} que é o elemento ${name[index]}`);
  console.log(`O nome ${novoNome} foi inserido no array`);
  name.push(novoNome);
  console.log('A quantidade de elementos atual do array é de   ', name.length);
};

coisaNomes(nomes, 'José', 4);
coisaNomes(nomes, 'Maria', 2);
coisaNomes(nomes, 'Cida', 3);
