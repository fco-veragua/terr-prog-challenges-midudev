/**
 * Estás atrapado en una pesadilla en la que Freddy Krueger te persigue 😭. El sueño está representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del sueño.

Debes encontrar el camino más seguro (es decir, el que tenga el menor valor total de peligro) desde la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

En este desafío, solo puedes moverte hacia la derecha o hacia abajo (no puedes retroceder ni moverte en diagonal) y debes calcular el nivel total de peligro del camino más seguro.

La pesadilla está representada por una matriz dream de tamaño n x m donde cada celda es un número positivo que representa el nivel de peligro de esa celda en el sueño.

Y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (posición [0][0]) a la esquina inferior derecha (posición [n-1][m-1]).
 */

function findSafestPath(dream) {
    return 0

}

let row = dream.length
let col = dream[0].length

const dAuxiliar = Array.from({ length: row }, () => Array(col).fill(0))
dAuxiliar[0][0] = dream[0][0]

for (let j = 1; j < col; j++) {
    dAuxiliar[0][j] = dAuxiliar[0][j - 1] + dream[0][j]
}

for (let i = 1; i < row; i++) {
    dAuxiliar[i][0] = dAuxiliar[i - 1][0] + dream[i][0]
}

for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
        dAuxiliar[i][j] = dream[i][j] + Math.min(dAuxiliar[i - 1][j], dAuxiliar[i][j - 1])
    }
}

console.log(dAuxiliar[row - 1][col - 1])