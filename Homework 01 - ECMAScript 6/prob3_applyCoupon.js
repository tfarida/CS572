//we want to create a curryable function that takes args in this orders
//Category
//Discount between 0 and 1
//And item
//and returns the item with correct price
//implement applyCoupon as a curryable function

const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 2.0 
}
const applyCoupon = category => discount => item => {
    if(item.category == category && discount >0 && discount < 1){
        var price = item.price;
        var afterDiscount = price - discount * price;
        item.price = afterDiscount;
    }
    return item;
}
console.log(applyCoupon("food")(0.1)(item).price === 1.8);




