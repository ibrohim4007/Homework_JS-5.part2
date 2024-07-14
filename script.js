
const order = receipt();

let shop = [];
let totalsumm = 0;
const deliverySumm = 9000;

for (let key in order){
    
    shop.push(`${key} ${order[key].info}`)

    totalsumm += order[key].price;

}

totalsumm += deliverySumm;

const RecieptOrder = (`Вы заказали ${shop}, Общая стоимость ${totalsumm} сум, с доставкой (${deliverySumm})`)

console.log(RecieptOrder);
















