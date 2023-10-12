locate_list = document.querySelector('.option_location_list_nocart');
area = document.querySelector('.option_location');
price_list = document.querySelector('.option_price_list_nocart');
price = document.querySelector('.option_price');

btn = document.querySelector(".btn1");

btn_login = document.querySelector(".header_login");
btn_signup = document.querySelector(".header_signup");


form_login = document.querySelector(".form-box login");
form_signup = document.querySelector(".form-box register");



area.addEventListener('click', () => {
    if (locate_list.style.display == 'none') {
        locate_list.style.display = 'block';
        if (price_list.style.display == 'block') {
            price_list.style.display = 'none';
        }
    }
    else {
        locate_list.style.display = 'none';
    }
});



price.addEventListener('click', () => {
    if (price_list.style.display == 'none') {
        price_list.style.display = 'block';
        if (locate_list.style.display == 'block') {
            locate_list.style.display = 'none';
        }
    }
    else {
        price_list.style.display = 'none';
    }
});






let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.container_item_product_info');
console.log(list);

function loadPage() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    })
    listPage()
}
loadPage();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector(".container_item_btn_listPage").innerHTML = "";

    prev = document.querySelector(".container_item_btn_item_btn_prev");
    prev.addEventListener('click', () => {
        if (thisPage != 1) {
            changePage(thisPage - 1);
        }
        else {
            changePage(thisPage);
        }
    })
    
    for (i = 1; i <= count; i++) {
        let newPage = document.createElement("li");
        newPage.classList.add("container_item_btn_item");
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add("highLight");
            
        }
        newPage.setAttribute("onclick", "changePage(" + i + ")");
        document.querySelector(".container_item_btn_listPage").appendChild(newPage);
    }

    next = document.querySelector(".container_item_btn_item_btn_next");
    next.addEventListener('click', () => {
        if (thisPage != count) {
            changePage(thisPage + 1);
        }
        else {
            changePage(thisPage);
        }
    })


}
function changePage(page) {
    thisPage = page;
    loadPage();
}