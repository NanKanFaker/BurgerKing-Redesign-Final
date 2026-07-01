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
    },
    "peanut-angus-beef-burger": {
        id: "peanut-angus-beef-burger",
        title: "花生安格斯牛肉堡",
        priceMeal: 210,
        priceSingle: 155,
        image: "./images/peanut-angus-beef-burger.png"
    },
    "angus-thickcut-beef-burger": {
        id: "angus-thickcut-beef-burger",
        title: "安格斯厚切牛肉堡",
        priceMeal: 210,
        priceSingle: 155,
        image: "./images/angus-thickcut-beef-burger.png"
    },
    "strong-angus-beef-burger": {
        id: "strong-angus-beef-burger",
        title: "勁濃安格斯牛肉堡",
        priceMeal: 210,
        priceSingle: 155,
        image: "./images/strong-angus-beef-burger.png"
    },
    "heavyweight-bacon-doubleeef-Burger": {
        id: "heavyweight-bacon-doubleeef-Burger",
        title: "重磅培根雙層牛肉堡",
        priceMeal: 284,
        priceSingle: 229,
        image: "./images/heavyweight-bacon-doubleeef-Burger.png"
    },
    "bbq-bacon-burger": {
        id: "bbq-bacon-burger",
        title: "BBQ培根牛肉堡",
        priceMeal: 144,
        priceSingle: 89,
        image: "./images/bbq-bacon-burger.png"
    },
    "double-cheese-bacon-burger": {
        id: "double-cheese-bacon-burger",
        title: "雙起士培根牛肉堡",
        priceMeal: 154,
        priceSingle: 99,
        image: "./images/double-cheese-bacon-burger.png"
    },
    "peanut-bacon-beef-burger": {
        id: "peanut-bacon-beef-burger",
        title: "花生培根牛肉堡",
        priceMeal: 154,
        priceSingle: 99,
        image: "./images/peanut-bacon-beef-burger.png"
    },
    "rolled-sausage-burger": {
        id: "rolled-sausage-burger",
        title: "捲捲德腸堡",
        priceMeal: 174,
        priceSingle: 119,
        image: "./images/rolled-sausage-burger.png"
    },
    "curly-sausage-grilled-beef-burger": {
        id: "curly-sausage-grilled-beef-burger",
        title: "捲捲德腸烤牛堡",
        priceMeal: 194,
        priceSingle: 139,
        image: "./images/curly-sausage-grilled-beef-burger.png"
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

