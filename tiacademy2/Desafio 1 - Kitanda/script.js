window.onload = function () {
  let produtos = [
    { description: 'Abacaxi', price: 2.99 },
    { description: 'Laranja', price: 7.5 },
    { description: 'Kiwi', price: 8.9 },
    { description: 'Mamão', price: 7.99 },
    { description: 'Pêssego', price: 5.5 },
  ];

  let adicionaProduto = [];

  const listaProdutos = document.querySelector('#listProd');

  const totalCompra = document.querySelector('#totalCompra');

  const cestaCliente = document.querySelector('#cestaCliente');

  (() => {
    produtos.forEach((produto) => {
      let li = document.createElement('li');
      li.textContent = produto.description;
      li.dataset.price = produto.price;
      li.addEventListener('click', function () {
        if (adicionaProduto.indexOf(this.textContent) != -1) {
          alert(`Este item ${this.textContent} já está na cesta`);
        } else {
          adicionaProduto.push(this.textContent);

          let li2 = document.createElement('li');
          li2.textContent = this.textContent;
          cestaCliente.appendChild(li2);

          const total = Number(totalCompra.value) + Number(this.dataset.price);
          totalCompra.value = total.toFixed(2);
        }
      });

      listProd.appendChild(li);
    });
  })();
};
