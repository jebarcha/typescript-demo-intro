interface Address {
    street: string;
    country: string;
    city: string;
}

interface superHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHero: superHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHero.showAddress();
console.log(address);


