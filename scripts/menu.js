const productSections = [
    {
        sectionTitle: "皇家華堡系列",
        items: [
            {
                id: "royal-whopper",
                title: "皇家華堡",
                priceMeal: 199,
                priceSingle: 144,
                image: "./images/royal-whopper.png"
            },
            {
                id: "royal-whopper-spicy",
                title: "皇家辣味華堡",
                priceMeal: 199,
                priceSingle: 144,
                image: "./images/royal-whopper.png"
            },
            {
                id: "double-royal-whopper",
                title: "皇家雙層華堡",
                priceMeal: 259,
                priceSingle: 204,
                image: "./images/double-royal-whopper.png"
            },
            {
                id: "double-royal-whopper-spicy",
                title: "辣味皇家雙層華堡",
                priceMeal: 259,
                priceSingle: 204,
                image: "./images/double-royal-whopper.png"
            },
            {
                id: "triple-royal-whopper",
                title: "皇家三層華堡",
                priceMeal: 319,
                priceSingle: 264,
                image: "./images/triple-royal-whopper.png"
            },
            {
                id: "triple-royal-whopper-spicy",
                title: "辣味皇家三層華堡",
                priceMeal: 319,
                priceSingle: 264,
                image: "./images/triple-royal-whopper.png"
            }
        ]
    },
    {
        sectionTitle: "安格斯系列",
        items: [
            {
                id: "peanut-angus-beef-burger",
                title: "花生安格斯牛肉堡",
                priceMeal: 210,
                priceSingle: 155,
                image: "./images/peanut-angus-beef-burger.png"
            },
            {
                id: "angus-thickcut-beef-burger",
                title: "安格斯厚切牛肉堡",
                priceMeal: 210,
                priceSingle: 155,
                image: "./images/angus-thickcut-beef-burger.png"
            },
            {
                id: "strong-angus-beef-burger",
                title: "勁濃安格斯牛肉堡",
                priceMeal: 210,
                priceSingle: 155,
                image: "./images/strong-angus-beef-burger.png"
            }
        ]
    },
    {
        sectionTitle: "培根系列",
        items: [
            {
                id: "heavyweight-bacon-doubleeef-Burger",
                title: "重磅培根雙層牛肉堡",
                priceMeal: 284,
                priceSingle: 229,
                image: "./images/heavyweight-bacon-doubleeef-Burger.png"
            },
            {
                id: "bbq-bacon-burger",
                title: "BBQ培根牛肉堡",
                priceMeal: 144,
                priceSingle: 89,
                image: "./images/bbq-bacon-burger.png"
            },
            {
                id: "double-cheese-bacon-burger",
                title: "雙起士培根牛肉堡",
                priceMeal: 154,
                priceSingle: 99,
                image: "./images/double-cheese-bacon-burger.png"
            },
            {
                id: "peanut-bacon-beef-burger",
                title: "花生培根牛肉堡",
                priceMeal: 154,
                priceSingle: 99,
                image: "./images/peanut-bacon-beef-burger.png"
            }
        ]
    },
    {
        sectionTitle: "捲捲德腸系列",
        items: [
            {
                id: "rolled-sausage-burger",
                title: "捲捲德腸堡",
                priceMeal: 174,
                priceSingle: 119,
                image: "./images/rolled-sausage-burger.png"
            },
            {
                id: "curly-sausage-grilled-beef-burger",
                title: "捲捲德腸烤牛堡",
                priceMeal: 194,
                priceSingle: 139,
                image: "./images/curly-sausage-grilled-beef-burger.png"
            }
        ]
    }
];

//=====================RENDER PRODUCTS SECTION================//

const productList = document.getElementById('productList');

function renderProductSections() {
    const container = document.getElementById('productSections');
    const fragment = document.createDocumentFragment();

    productSections.forEach((section) => {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'product-section';
        sectionEl.setAttribute('id', section.sectionTitle);

        const head = document.createElement('div');
        head.className = 'product-section__head';

        const title = document.createElement('h2');
        title.className = 'product-section__title';
        title.textContent = section.sectionTitle;
        head.append(title);

        const list = document.createElement('div');
        list.className = 'product-section__list';

        section.items.forEach((product) => {
            const article = document.createElement('article');
            article.className = 'product-card';
            article.innerHTML = `
                <img class="product-card__image" src="${product.image}" alt="${product.title}" />
                <div class="product-card__body">
                    <h3 class="product-card__title">${product.title}</h3>
                    <div class="product-card__meta">
                        <div class="product-card__price">
                            <span class="product-card__price-main">套餐${product.priceMeal}</span>
                            <span class="product-card__price-sub">單點${product.priceSingle}</span>
                        </div>
                        <i class="ri-shopping-cart-2-fill card-btn"></i>
                    </div>
                </div>
            `;
            list.append(article);

            //按下購物車按鈕，帶id到商品頁
            article.querySelector('.card-btn').addEventListener('click', () => {
                location.href = `product.html?id=${product.id}`;
            });

        });

        sectionEl.append(head, list);
        fragment.append(sectionEl);
    });

    container.replaceChildren(fragment);
}

renderProductSections();