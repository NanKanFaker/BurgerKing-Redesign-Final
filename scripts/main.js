/*=============== SHOW ORDER/PICKUP INFO ===============*/
const deliveryForm = document.getElementById('delivery-form'),
    pickupForm = document.getElementById('pickup-form');

deliveryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showOrderInfo()
    showDialog();
    deliveryForm.reset();
});

pickupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showPickupInfo()
    showDialog();
    pickupForm.reset();
});

function showOrderInfo() {
    const orderInfo = document.getElementById('order-info');

    orderInfoContent = getOrderInfo();

    orderInfo.classList.add('show-info');
    orderInfo.querySelector('span').textContent = `  
           預定資訊: ${orderInfoContent.orderDate}  ${orderInfoContent.orderTime}   ${orderInfoContent.orderCity}${orderInfoContent.orderDist}${orderInfoContent.orderAddress}
            `
}

function showPickupInfo() {
    const orderInfo = document.getElementById('order-info');

    pickupInfoContent = getPickupInfo();

    orderInfo.classList.add('show-info');
    orderInfo.querySelector('span').textContent = `  
           預定資訊: ${pickupInfoContent.pickupDate}  ${pickupInfoContent.pickupTime}   ${pickupInfoContent.pickupCity}${pickupInfoContent.pickupDist}${pickupInfoContent.pickupAddress}
            `
}


/*=============== GET ORDER/PICKUP INFO ===============*/
function getOrderInfo() {
    const form = document.getElementById('delivery-form');
    let orderDate = form.querySelector('#order-date').value,
        orderTime = form.querySelector('#order-time').value,
        orderCity = form.querySelector('#order-city').value,
        orderDist = form.querySelector('#order-dist').value,
        orderAddress = form.querySelector('#order-address').value;

    let orderInfo = { orderDate, orderTime, orderCity, orderDist, orderAddress };
    return orderInfo;
}

function getPickupInfo() {
    const form = document.getElementById('pickup-form');
    let pickupDate = form.querySelector('#pickup-date').value,
        pickupTime = form.querySelector('#pickup-time').value,
        pickupCity = form.querySelector('#pickup-city').value,
        pickupDist = form.querySelector('#pickup-dist').value,
        pickupAddress = form.querySelector('#pickup-address').value;

    let pickupInfo = { pickupDate, pickupTime, pickupCity, pickupDist, pickupAddress };
    return pickupInfo;
}


/*=============== DIALOG ===============*/
function showDialog() {
    const dialog = document.getElementById('dialog'),
        closeBtn = document.getElementById('close-btn')
    dialog.showModal();
    closeBtn.addEventListener('click', () => {
        dialog.close();
    });
}

/*=============== MODIFY ORDER INFO ===============*/
function modifyOrderInfo() {
    const modifyBtn = document.getElementById('modify-button'),
        orderInfo = document.getElementById('order-info'),
        order = document.getElementById('order');

    modifyBtn.addEventListener('click', () => {
        orderInfo.classList.remove('show-info');

        order.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

modifyOrderInfo();

/*=============== SWITCH FORM ===============*/
function switchButton() {
    const orderButtons = document.querySelectorAll('.order__button');
    orderButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            orderButtons.forEach((b) => {
                b.classList.remove('order__button--active')
            })
            btn.classList.add('order__button--active');
        })
    })
}

switchButton();

function showForm() {
    const deliveryBtn = document.getElementById('delivery-switch'),
        pickupBtn = document.getElementById('pickup-switch'),
        deliveryForm = document.getElementById('delivery-form'),
        pickupForm = document.getElementById('pickup-form');

    deliveryBtn.addEventListener('click', () => {
        if (deliveryBtn.classList.contains('order__button--active')) {
            deliveryForm.classList.add('show-form');
            pickupForm.classList.remove('show-form');
        }
    });

    pickupBtn.addEventListener('click', () => {
        if (pickupBtn.classList.contains('order__button--active')) {
            pickupForm.classList.add('show-form');
            deliveryForm.classList.remove('show-form');
        }
    });
}

showForm();


/*=============== SWIPER ===============*/
const homeSwiper = new Swiper('.home__swiper', {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,

    pagination: {
        el: '.home__pagination',
        clickable: true,
        grabCursor: true
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

const popularSwiper = new Swiper('.popular__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 32,

    pagination: {
        el: '.popular__pagination',
        clickable: true,
    }
});

