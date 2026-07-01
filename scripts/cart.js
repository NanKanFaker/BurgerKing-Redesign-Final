//============RENDER CART ITEMS================//
const cartList = JSON.parse(localStorage.getItem('cart')) || [];
const orderList = document.getElementById('order-list');

function renderCartItems() {
    cartList.forEach((cart) => {
        const fragement = document.createDocumentFragment();
        const li = document.createElement('li');
        li.dataset.id = cart.id;
        li.innerHTML = `
                                    <div class="order-item__layout">
                                        <div class="order-item__image">
                                            <img src="${cart.image}"
                                                alt="${cart.title}" />
                                        </div>

                                        <div class="order-item__content">
                                            <div class="order-item__top">
                                                <div>
                                                    <h3 class="order-item__name">${cart.title}</h3>
                                                    <div class="order-item__details">
                                                        <p>薯條x1</p>
                                                        <p>可樂(中)x1</p>
                                                    </div>
                                                </div>
                                                <div class="order-item__price">${cart.price}</div>
                                            </div>
                                            <div class="order-item__actions">
                                                <div class="quantity-control">
                                                    <i class="ri-subtract-line"></i>
                                                    <span class="quantity-control__value">${cart.quantity}</span>
                                                    <i class="ri-add-line"></i>
                                                </div>
                                                <button class="order-item__trash" type="button">
                                                    <i class="ri-delete-bin-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    `;
        fragement.appendChild(li);
        orderList.appendChild(fragement);

        let total = totalPrice();
        document.querySelector('.summary-card__value').textContent = '$' + total;

    });

};

renderCartItems();

//====================UPDATE TOTAL PRICE================//
function totalPrice() {
    const orderPriceList = [...document.querySelectorAll('.order-item__price')];
    const totalPrice = orderPriceList.reduce((total, item) => {
        return total + Number(item.textContent.replace('$', ''));
    }, 0);
    return totalPrice;
}

//============REMOVE CART ITEMS================//
const deleteBtns = document.querySelectorAll('.order-item__trash');
deleteBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        const id = this.closest('li').dataset.id;
        cart = cartList.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        this.closest('li').remove();

        let total = totalPrice();
        document.querySelector('.summary-card__value').textContent = '$' + total;
    })
})

//====================SWITCH PAYMENT ACTIVE================//
optionList = document.querySelectorAll('.payment-option');
optionList.forEach((option) => {
    option.addEventListener('click', function () {
        optionList.forEach((option) => {
            option.classList.remove('payment-option--active');
        });
        this.classList.add('payment-option--active');
    });
});
