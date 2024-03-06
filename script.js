"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function NameOfTallestMountain(mountains) {
    // let tallestMountain: Mountain = mountains[0];
    // mountains.forEach(m => {
    //     if(m.height > tallestMountain.height){
    //         tallestMountain = m;
    //     }
    // })
    // return tallestMountain.name;
    var tallestMountain = mountains.reduce(function (previous, current) { return (current.height > previous.height) ? current : previous; });
    return tallestMountain.name;
}
var tallestMountain = NameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    { name: "Juice", price: 5 },
    { name: "Bread", price: 2 },
    { name: "Fruit", price: 3 },
    { name: "Veggies", price: 3 }
];
function calcAverageProductPrice(products) {
    // let avgPrice:number = 0;
    // products.forEach(p => {
    //     avgPrice += p.price;
    // })
    // avgPrice = avgPrice / products.length;
    var avgPrice = products.reduce(function (total, item) { return total += item.price; }, 0);
    avgPrice = avgPrice / products.length;
    return avgPrice;
}
var averagePrices = calcAverageProductPrice(products);
console.log(averagePrices);
var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    // let total: number = 0;
    // inventory.forEach(item => {
    //     total += item.product.price * item.quantity;
    // })
    var total = inventory.reduce(function (total, item) { return total += item.product.price * item.quantity; }, 0);
    return total;
}
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
