
interface PersojaneLOR {
    name: string;
    pv: number;
    showHP: () => void;
}

function curar(personaje: PersojaneLOR, curarX): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const newPersonaje: PersojaneLOR = {
    name: 'demo',
    pv:50,
    showHP() {
        console.log(this.pv);
    }
}

curar(newPersonaje, 20);
