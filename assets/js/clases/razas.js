import Personaje from "./personajes.js";

class Saiyajin extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza) // Se heredan atributos con método "super"
    }

    Transformacion() {
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 1.8)); // Multiplica valor de poder actual por 1.8, aumento de 80%
    }
}

class Humano extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }

    Coraje() {
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 1.2)); // Multiplica valor de poder actual por 1.2, aumento de 20%
    }
}

export {Saiyajin, Humano}; // Exportación de las clases
