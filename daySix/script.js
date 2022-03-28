var containerBuy = document.querySelector("#container-buy");
var elementBuyList = document.querySelector("#buy-list");
var containerRemoveProduct = document.querySelector(
  "#container-product-remove"
);

var product,
  productRemove,
  listProducts = new Array();

window.onload = () => {
  containerBuy.style.display = "none";
  elementBuyList.style.display = "none";
  containerRemoveProduct.style.display = "none";
};

const changeProduct = () => {
  product = document.querySelector("#product").value;
};

const changeProductRemove = () => {
  productRemove = document.querySelector("#productRemove").value;
};

const sendProduct = () => {
  let checkedWantBuy = document.querySelector('input[name="wantBuy"]:checked');

  // Verificar se quer continuar comprando
  if (!checkedWantBuy) {
    containerBuy.style.display = "none";
    return;
  } else if (checkedWantBuy.value == "Não") {
    containerBuy.style.display = "none";
    return;
  }

  containerBuy.style.display = "block";

  let checkedCategory = document.querySelector(
    'input[name="categories"]:checked'
  );

  // Verificar se o input Categoria checked, se quer continuar comprando e adicionar na lista
  if (checkedCategory.value && product && checkedWantBuy.value == "Sim") {
    listProducts.push(
      `Categoria: ${checkedCategory.value}, Produto: ${product}`
    );
  }

  verificarRemoverProduto();
};

const verificarRemoverProduto = () => {
  let checkedWantRemove = document.querySelector(
    'input[name="wantRemove"]:checked'
  );

  if (!checkedWantRemove) {
    exibirListaProdutos();
    return;
  } else if (checkedWantRemove.value == "Não") {
    exibirListaProdutos();
    return;
  }

  containerRemoveProduct.style.display = "block";

  if (!productRemove) {
    exibirListaProdutos();
    return;
  }

  for (let index = 0; index < listProducts.length; index++) {
    if (listProducts[index].includes(productRemove)) {
      // Splice - remove o elemento e retorna o próprio elemento removido
      // Segundo parâmetro - número de itens a partir do elemento

      let removeElements = listProducts.splice(index);
    }
  }

  exibirListaProdutos();
};

const exibirListaProdutos = () => {
  if (!listProducts) {
    return;
  }

  // Exibir lista
  elementBuyList.innerHTML = listProducts.join("<br>");
  elementBuyList.style.display = "block";
};