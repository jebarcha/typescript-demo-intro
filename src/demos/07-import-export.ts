import { calculateISV, Product } from "./06-desestructuracion-funcion";

const carritoCompras: Product[] = [
    {
        desc: 'demo',
        price: 100
    },
    {
        desc: 'demo2',
        price:120
    }
];

const [total, isv] = calculateISV(carritoCompras);
console.log(`Total: ${total}`);
console.log(`ISV  : ${isv}`);


