const productContainer = document.getElementById("products");

let cart = [];
// [{
//     product: null,
//     qty: 1,
// }];
// 1. если product есть в cart, то
//    1.1. находим productIndex - позицию этого элемента
//    1.2. увеличиваем cart[productIndex].qty на 1
// 2. если product нет в cart, то
//    2.1. добавляем { product: product, qty: 1 } в конец массива 
//         cart

function addToCart(product) {
    const productIndex = cart.findIndex(function (item) {
        return item.product === product;
    });
    if (productIndex !== -1) {
        cart[productIndex].qty++;
    } else {
        cart.push({ product: product, qty: 1 });
    }
}

const product1 = { title: "P 1", price: 10 };
const product2 = { title: "P 2", price: 100 };


// removeFromCart удаляет из массива cart продукт
function removeFromCart(product) {
    cart = cart.filter(function (item) {
        return item.product !== product;
    });
}
// возвращает целое число равное сумме всех стоимостей 
// товаров в корзине с учётом количества
function getCartTotal() {
    return cart.reduce(function (accumulator, value) {
        return accumulator + value.product.price * value.qty;
    }, 0);
}



function getCartTotal(){


}

function drawCart(){


}

function showCart(){


}

function hideCart(){


}

function drawProduct(product) {
    const productWrapper = document.createElement("div");
    productWrapper.classList.add("product");
 
    const category = document.createElement("div");
    category.classList.add("category", product.category);
    category.innerHTML = product.category;
 
    const img = document.createElement("img");
    img.classList.add("product_image");
    img.src = product.image;
 
    const content = document.createElement("div");
    content.classList.add("product_content");
 
    const title = document.createElement("div");
    title.classList.add("product_title");
    title.innerHTML = product.title;
 
    const info = document.createElement("div");
    info.classList.add("product_info");
 
    const price = document.createElement("div");
    price.classList.add("product_price");
    price.innerHTML = `${product.price}$`;
 
    const btn = document.createElement("div");
    btn.classList.add("btn");
    btn.addEventListener('click', function(){
        addToCart(product);
    });
    btn.innerHTML = "В корзину";
 
    info.appendChild(price);
    info.appendChild(btn);
 
    const description = document.createElement("div");
    description.classList.add("product_description");
    description.innerHTML = product.description;
 
    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(description);
 
    productWrapper.appendChild(category);
    productWrapper.appendChild(img);
    productWrapper.appendChild(content);
 
    productContainer.appendChild(productWrapper);
}
 
// drawProduct({
//     category: "meat",
//     title: "Steak",
//     image: "images\image.jpg",
//     price: 50,
//     description: "Very juicy steak!"
// });
// drawProduct({
//     category: "vegetable",
//     title: "Tomato",
//     image: "images\image.jpg",
//     price: 10,
//     description: "Very juicy tomato! And healthy as well!"
// });
// drawProduct({
//     category: "seasoning",
//     title: "Curry",
//     image: "images\image.jpg",
//     price: 75,
//     description: "Straight from India!"
// });


// 0 <= Math.random() < 1
// Math.floor(6.843536) -> 6
// Math.ceil(6.888834) -> 7
// Math.ceil(7.0) -> 7

// функция generateRandomProduct
// возвращает случайный продукт созданный по следующим
// правилам:
// {
//   category: <случайный элемент из массива 
//              ["meat", "vegetable", "seasoning"]>
//   title: <строка вида "Product <случайное число от 1 до 1000>">
//   image: "image.jpg",
//   price: <случайное число от 25 до 75 включительно>
//   description: <строка вида "Description of product <ТО ЖЕ ЧИСЛО, ЧТО И В TITLE">
// }


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }



//   function generateRandomproduct(){
//     let producttitle = getRandomIntInclusive(1,1000);
    
    
//     return {
//               category: categories[getRandomIntInclusive(0,2)],
//               title: `Product " ${producttitle}`,
//               image: "image.jpg",
//               price: generateRandomproduct(1,25),
//               description: `Description of product ${producttitle}`,
            
//     }
// }

//     drawProduct(generateRandomproduct());

    let allProducts = [];
    const categories = ["meat", "vegetable", "seasoning"];

    function getRandomNumber(a, b) {
        return Math.floor(Math.random() * (b + 1 - a) + a);
    }

    function generateRandomProduct() {
        const categoryIndex = getRandomNumber(0, categories.length - 1); // случайное число [0, 2]
        const productIndex = getRandomNumber(1, 1000); // случайное число [1, 1000]
        const price = getRandomNumber(25, 75); // случайное число [25, 75]
    
        return {
            category: categories[categoryIndex],
            title: `Product ${productIndex}`,
            image: "images/image.jpg",
            price: price,
            description: `Description of product ${productIndex}`
        };
    }

const countPerPage = 60;

// Filter by Price
const min_price_input = document.querySelector('#min_price_input');
const max_price_input = document.querySelector('#max_price_input');
const apply_button = document.querySelector('#apply_btn');

let min_price = -Infinity;
let max_price = Infinity;


function filterByPrice(product){
    return product.price >= min_price && product.price <= max_price;
}

function searchByPrice(){
min_price = min_price_input.value ? min_price_input.value : -Infinity;
max_price = max_price_input.value ? max_price_input.value : Infinity;
goToPage({
    target: document.getElementsByClassName("paginator_item")[0]
});
const filterItemsCount = allProducts.filter(checkProduct).length;
drawPagination(Math.ceil(filterItemsCount / countPerPage));
}

apply_button.addEventListener('click', searchByPrice);



let selectedCategory = "";

function filterByCategory(product){
    if (selectedCategory === ""){
        return true;
    }
    return product.category === selectedCategory;
}
const filters = [
    filterByCategory,
    filterByPrice,
];

// for (let i = 0; i < 500; i++) {
//     drawProduct(generateRandomProduct());
// }

 for (let i = 0; i < 500; i++) {
        allProducts.push(generateRandomProduct());
    }


function drawProducts(page){
    productContainer.innerHTML = "";
    const res = [];
    let foundCount = 0;
    for (let i = 0; i < allProducts.length; i++) {
        const product = allProducts[i];
        let areFilterspassed = checkProduct(product);
        if (areFilterspassed){
            if (foundCount >= page * countPerPage){
                res.push(product);
            }
            foundCount++;
        }
        if (res.length === countPerPage){
            break;
        }
      
    }
res.forEach(drawProduct);
    // const slicedProducts = allProducts.slice(page * countPerPage, page * countPerPage)
    // slicedProducts.forEach(drawProduct);
}

// drawProduct(0);
const paginatorContainer = document.getElementById('paginator');
function goToPage(e){
    const target = e.target;
    const pageNum = +target.getAttribute('data-page');
//закрашиваем пагинатор
    const activeItems = document.getElementsByClassName('paginator_item-active')
    for (let i = 0; i < activeItems.length; i++) {
        activeItems[i].classList.remove("paginator_item-active"); 
    }
    target.classList.add("paginator_item-active");
    drawProducts(pageNum);
}
function  drawPagination(itemsCount){
    paginatorContainer.innerHTML = "";
    for (let i = 0; i < itemsCount; i++) {
        const item = document.createElement('div');
        item.classList.add('paginator_item');
        item.setAttribute('data-page', i);
        item.addEventListener('click', goToPage);
        item.innerHTML = `${i + 1}`;
        paginatorContainer.appendChild(item);
    }

}

drawPagination(Math.ceil(allProducts.length / countPerPage));



goToPage({
    target: document.getElementsByClassName("paginator_item")[0]
});


// .paginator_item-active


// Если нажали на категорию в шапке
// 1. выставляем соответствующую selectedCategory
// 2. идём на 0 страницу
// 3. обновляем пагинатор



function updateSelectedCategory(category){
    selectedCategory = category;
    goToPage({
        target: document.getElementsByClassName("paginator_item")[0]
    });
    const filterItemsCount = allProducts.filter(checkProduct).length;
    drawPagination(Math.ceil(filterItemsCount / countPerPage));

}

// 1. вызвать updateSelectedCategory с нужной категорией (data-category)
// 2. убрать класс header_item-active со всех элементов
// 3. поставить класс header_item-active на этот элемент


function onHeaderItemClick(evt){
    const { target } = evt;
    const category = target.getAttribute('data-category');

    updateSelectedCategory(category);

        const activeItems = document.getElementsByClassName('header_item-active')
        for (let j = 0; j < activeItems.length; j++) {
            activeItems[j].classList.remove('header_item-active');
        } 
    target.classList.add("header_item-active");
        // drawProducts(pageNum);
}

const headerItems = document.getElementsByClassName('header_item');
for (let i = 0; i < headerItems.length; i++) {
    headerItems[i].addEventListener('click', onHeaderItemClick);
}
// updateSelectedCategory('meat');
function checkProduct(product){
    return filters.map(function (filter){
        return filter(product);
    }).every(function(filterResult){
        return filterResult;
    })
}

/*
MVC

M-model представление данных
V- View внешний вид
C- Controler логика

*/

// function sortByPrice(direction){
//     if (direction === "asc"){
//     allProducts.sort(function(a,b) {
//         if (a.price > b.price){
//             return 1;
//         } else {
//             return -1;
//         }
    
//     });
//     } if (direction === "desc"){
//         allProducts.sort(function(a,b) {
//             if (a.price < b.price){
//                 return 1;
//             } else {
//                 return -1;
//     }})} ;

//     goToPage({
//         target: document.getElementsByClassName("paginator_item")[0]
//     });
// }

// Sorting by price and title
let activePriceSorting;
function sortByPrice(direction){
    const sign = direction ==="asc" ? 1 : -1;
    allProducts = allProducts.sort(function(a,b)
    {
         if (a.price > b.price){
            return sign;
        } else {
            return -sign;
        }
    });


    goToPage({
        target: document.getElementsByClassName("paginator_item")[0]
    });
    activePriceSorting = direction;
}


let activeTitleSorting;
function sortByTitle(direction){
    allProducts = allProducts.sort(function(a,b){
        //сравнение с учётом языка
        const sign = direction ==="asc" ? 1 : -1;
        const atitle=a.title;
        const btitle=b.title;
        if(atitle.length === btitle.length){
        return sign * atitle.localeCompare(btitle); 
        }
        if(atitle.length > btitle.length){
            return sign;
        } else {
            return -sign;
        }
    })
    goToPage({
        target: document.getElementsByClassName("paginator_item")[0]
    });

    activeTitleSorting = direction;
}


function onSortClick(activeSorting, sort, target){
    if(activeSorting && activeSorting === 'asc'){
        sort('desc');
    } 
    else if(activeSorting && activeSorting === 'desc'){
        sort('asc');
    }
    else if(!activeSorting){
        sort('asc');
    }
    const activeItems = document.getElementsByClassName('sortings_item-active');
    for (let i = 0; i < activeItems.length; i++) {
        activeItems[i].classList.remove('sortings_item-active');
    }
    target.classList.add('sortings_item-active');
}

document
    .getElementById('title-sorting')
    .addEventListener('click', function(evt){
         onSortClick(activeTitleSorting, sortByTitle, evt.target);
    
});


document
    .getElementById('price-sorting')
    .addEventListener('click', function(evt){
        onSortClick(activePriceSorting, sortByPrice, evt.target);
});




// document
//     .getElementById("title-sorting")
//     .addEventListener("click", function (evt) {
//         if (activeTitleSorting && activeTitleSorting === "asc") {
//             sortByTitle("desc");
//         } else if (activeTitleSorting && activeTitleSorting === "desc") {
//             sortByTitle("asc");
//         } else if (!activeTitleSorting) {
//             sortByTitle("asc");
//         }
//     });
// document
//     .getElementById("price-sorting")
//     .addEventListener("click", function (evt) {
//         if (activePriceSorting && activePriceSorting === "asc") {
//             sortByPrice("desc");
//         } else if (activePriceSorting && activePriceSorting === "desc") {
//             sortByPrice("asc");
//         } else if (!activePriceSorting) {
//             sortByPrice("asc");
//         }
//     });
