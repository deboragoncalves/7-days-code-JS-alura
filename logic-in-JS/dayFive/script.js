var containerBuy = document.querySelector("#container-buy");
var elementBuyList = document.querySelector("#buy-list");

var product,
  listProducts = new Array();

window.onload = () => {
  containerBuy.style.display = "none";
  elementBuyList.style.display = "none";
};

const changeProduct = () => {
  product = document.querySelector("#product").value;
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

  // Exibir lista
  elementBuyList.innerHTML = "Você deseja comprar os seguintes produtos: <br>";
  elementBuyList.innerHTML += listProducts.join("<br>");
  elementBuyList.style.display = "block";
};
