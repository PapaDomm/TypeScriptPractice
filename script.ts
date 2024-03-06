export{}

interface Mountain{
    name:string;
    height:number
}

let mountains:Mountain[] = [
    {name:"Kilimanjaro", height:19341},
    {name:"Everest", height:29029},
    {name:"Denali", height:20310}
];

function NameOfTallestMountain(mountains:Mountain[]):string{
    // let tallestMountain: Mountain = mountains[0];
    // mountains.forEach(m => {
    //     if(m.height > tallestMountain.height){
    //         tallestMountain = m;
    //     }
    // })

    // return tallestMountain.name;

    let tallestMountain: Mountain = mountains.reduce((previous, current) => (current.height > previous.height)? current : previous);

    return tallestMountain.name;
}

let tallestMountain:string = NameOfTallestMountain(mountains);

console.log(tallestMountain);



interface Product{
    name:string;
    price:number;
}

let products:Product[] = [
    {name:"Juice", price:5},
    {name:"Bread", price:2},
    {name:"Fruit", price:3},
    {name:"Veggies", price:3}
]

function calcAverageProductPrice(products:Product[]):number{
    // let avgPrice:number = 0;
    // products.forEach(p => {
    //     avgPrice += p.price;
    // })

    // avgPrice = avgPrice / products.length;

    let avgPrice = products.reduce((total, item) => {return total += item.price;}, 0)

    avgPrice = avgPrice / products.length

    return avgPrice;
}

let averagePrices = calcAverageProductPrice(products);

console.log(averagePrices);

interface InventoryItem {
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [
    {product:{name:"motor", price:10.00}, quantity:10},
    {product:{name:"sensor", price:12.50}, quantity:4},
    {product:{name:"LED", price:1.00}, quantity:20}
]

function calcInventoryValue(inventory: InventoryItem[]):number{
    // let total: number = 0;

    // inventory.forEach(item => {
    //     total += item.product.price * item.quantity;
    // })

    let total = inventory.reduce((total, item) => {return total += item.product.price * item.quantity}, 0)

    return total;
}

let totalValue = calcInventoryValue(inventory);

console.log(totalValue);