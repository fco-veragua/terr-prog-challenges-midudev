/**
 * En una lucha épica entre muertos vivientes 🧟 y humanos 👮‍♂️, ambos bandos tienen una lista de combatientes con poderes de ataque específicos.

La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando.

El bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo.

En caso de empate, ambos combatientes caen y no afectan a la próxima ronda.

Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) representa el poder de ataque de un combatiente, determina quién queda al final y con cuánto poder de ataque.

Importante: Las dos cadenas siempre tendrán la misma longitud.

La salida es una cadena de texto que representa el resultado final de la batalla.
 */

const battleHorde = () => {
    return 'x'
}

const battleHumanZombie = (z: string, h: string) => {
    let accPower: (string | number)[] = [] // [(humano/zombie), power]
    for (let i = 0; i < z.length; i++) {
        let zPower = accPower[0] === 'z' ? Number(z[i]) + Number(accPower[1]) : Number(z[i])
        let hPower = accPower[0] === 'h' ? Number(h[i]) + Number(accPower[1]) : Number(h[i])
        switch (true) {
            case zPower > hPower:
                accPower = ['z', zPower - hPower]
                break
            case zPower < hPower:
                accPower = ['h', hPower - zPower]
                break
            default:
                accPower = []
                break
        }
    }
    if (accPower.length > 0) return `${accPower[1]}${accPower[0]}`
    return 'x'
}

const z: string = '444'
const h: string = '282'

console.log(battleHumanZombie(z, h))