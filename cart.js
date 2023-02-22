'use strict'
const cart = {
    items : [], //товары
    totalPrice : 0, //общая стоимость корзины
    count : 0, //Кол-во товаров
   
    getTotalPrice() {return this.totalPrice}, //получить общую стоимость товаров
    add(productName,productPrice,amountOfProduct) {
        const product = {
            name : productName,
            price : productPrice,
            amount : amountOfProduct,
        }
        this.items.push(product);
        this.calculateItemPrice();
        this.increaseCount(amountOfProduct);
    }, //добавить товар
    increaseCount(num) {
        this.count +=num;
    }, //увеличить количество товаров
    calculateItemPrice() {
        let sum = 0;
        this.items.map((item) => {
            sum +=item.price * item.amount;
        });
        this.totalPrice =sum;
    }, //посчитать общую стоимость товаров
    clear() {
        this.items =[];
        this.totalPrice = 0;
        this.count = 0;
        
    }, //очистка корзины
    print() {
        let cartStr = JSON.stringify(cart);
        // let cartObj = JSON.parse(cartStr);
        // console.log(cartObj);
        console.log(`В строке выглядит так себе ` + cartStr)
        console.log(this.totalPrice);
    }, //распечатать корзину
}
cart.add('Коловорот',2500,3);
cart.add('Кружка',50,13);
cart.add(`Щипцы для завивки очень хороших волос`,50,13);
cart.print()
cart.clear();


