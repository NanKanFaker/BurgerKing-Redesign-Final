const products = {
    "royal-whopper": {
        id: "royal-whopper",
        title: "皇家華堡",
        priceMeal: 199,
        priceSingle: 144,
        image: "./images/royal-whopper.png"
    },
    "royal-whopper-spicy": {
        id: "royal-whopper-spicy",
        title: "皇家辣味華堡",
        priceMeal: 199,
        priceSingle: 144,
        image: "./images/royal-whopper.png"
    },
    "double-royal-whopper": {
        id: "double-royal-whopper",
        title: "皇家雙層華堡",
        priceMeal: 204,
        priceSingle: 259,
        image: "./images/double-royal-whopper.png"
    },
    "double-royal-whopper-spicy": {
        id: "double-royal-whopper-spicy",
        title: "辣味皇家雙層華堡",
        priceMeal: 204,
        priceSingle: 259,
        image: "./images/double-royal-whopper.png"
    },
    "triple-royal-whopper": {
        id: "triple-royal-whopper",
        title: "皇家三層華堡",
        priceMeal: 319,
        priceSingle: 264,
        image: "./images/triple-royal-whopper.png"
    },
    "triple-royal-whopper-spicy": {
        id: "triple-royal-whopper-spicy",
        title: "辣味皇家三層華堡",
        priceMeal: 319,
        priceSingle: 264,
        image: "./images/triple-royal-whopper.png"
    }
}

//=====================RENDER PRODUCT PAGE================//

const id = new URLSearchParams(location.search).get("id");
const product = products[id];

if (!product) {
    document.querySelector(".product-page").innerHTML = "<p style='padding-top:300px'>此商品已下架</p>";
} else {
    renderProduct()
}

function renderProduct() {
    const productImage = document.querySelector(".product__image");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.title);

    const productTitle = document.querySelector(".product__title-name");
    productTitle.textContent = product.title;

    const productTitlePrice = document.querySelector(".product__title-price");
    productTitlePrice.textContent = `單點 ${product.priceSingle} 元 / 套餐 ${product.priceMeal} 元`;
}

//====================ADD PRODUCT CART================//
const addBtn = document.getElementById('add-cart');
addBtn.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let price = document.getElementById('total-price').textContent;
    let quantity = document.getElementById('quantity').textContent;
    let mealList = [...document.querySelectorAll('.meal__name')];
    let meal = mealList.map((meal) => {
        return meal.textContent;
    });

    cart.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: price,
        quantity: quantity,
        meal: meal,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
})

