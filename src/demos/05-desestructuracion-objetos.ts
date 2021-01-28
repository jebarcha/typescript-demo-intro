
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'MacaIII',
    detalles: {
        autor: 'Paul',
        anio: 2021
    }
}

//Desestructurar en una sola linea:
//const { volumen, segundo, cancion, detalles: { autor } } = reproductor;

//Es mas facil de leerlo asi:
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log(`El volumen actual es de ${volumen}`);
console.log(`El segundo actual es de ${segundo}`);
console.log(`El cancion actual es ${cancion}`);
console.log(`El autor es ${autor}`);

