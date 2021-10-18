import { dadosCep } from './script.js';

const botao = document.querySelector('#botao');
const NumeroCep = document.querySelector('#NumeroCep');

botao.addEventListener('click', function () {
  dadosCep(NumeroCep.value);
});
