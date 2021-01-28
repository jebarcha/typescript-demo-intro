
export interface Product {
    desc: string;
    price: number;
}

const mobile: Product = {
    desc: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    desc: 'iPad Air',
    price: 350
}

export function calculateISV(prods: Product[]): [number, number] {
    let total = 0;
    prods.forEach( ({ price }) => {  
        total += price;
    })
    return [total, total * 0.15];
}

const items = [ mobile, tablet];
const [ total, isv ] = calculateISV(items);
console.log(`Total: ${total}`);
console.log(`ISV: ${isv}`);

