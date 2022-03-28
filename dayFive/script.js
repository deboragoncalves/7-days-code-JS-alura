var containerBuy = document.querySelector("#container-buy");
var elementBuyList = document.querySelector("#buy-list");

var food, listFood = new Array();

window.onload = () => {
    containerBuy.style.display = "none";
    elementBuyList.style.display = "none";
}

const changeFood = () => {
    food = document.querySelector("#food").value;
}

const sendFood = () => {
    let checkedWantBuy = document.querySelector('input[name="wantBuy"]:checked');

    if (checkedWantBuy) {
        if (checkedWantBuy.value == "Não") {
            containerBuy.style.display = "none";
            return;
        }
    } else {
        containerBuy.style.display = "none";
        return;
    }

    containerBuy.style.display = "block";

    let checkedCategory = document.querySelector('input[name="categories"]:checked');

    if (checkedCategory) {
        if (food) {
            elementBuyList.innerHTML = "Você deseja comprar os seguintes produtos: <br>";
            listFood.push(food);
            elementBuyList.innerHTML += `Categoria: ${checkedCategory.value}, Produto: ${food}`;
        } 

        elementBuyList.style.display = "block";
    }

}

// TODO: vários produtos