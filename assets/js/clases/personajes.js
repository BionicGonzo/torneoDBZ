class Personaje {
    constructor(nombre, img, poder, raza) {
        let Nombre = nombre;
        let Img = img;
        let Poder = poder;
        let Raza = raza;

        this.getNombre = () => Nombre;
        this.getImg = () => Img;
        this.getPoder = () => Poder;
        this.getRaza = () => Raza;

        this.setPoder = (poder) => (Poder = poder); // parámetro "poder" que reasigna el valor a variable "Poder" con lo que reciba como parámetro
    }
    // Métodos
    get Nombre() {
        return this.getNombre();
    }

    get Img() {
        return this.getImg();
    }

    get Poder() {
        return this.getPoder();
    }

    get Raza() {
        return this.getRaza();
    }

    set Poder(poder) {
        return this.getPoder(poder); // Retorna ejecución de getPoder pasando como argumento el parámetro "poder"
    }
}

export default Personaje;