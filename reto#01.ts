/**
 * Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica. Tiene una lista de pociones, cada una con un poder asociado, y quiere combinar dos de ellas para obtener un poder total específico.
 * 
 * Dada una lista de enteros donde cada número representa el poder de una poción 🧪 y un número entero que representa el poder objetivo, debes encontrar el índice de las dos primeras pociones que sumen exactamente el poder objetivo.
 */

const findGoalPotions = (potions: number[], goal: number): number[] | undefined => {
  let coincidences: number[][] = []

  for (let i = 0; i < potions.length; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      if (potions[i] + potions[j] === goal) coincidences.push([i, j])
    }
  }

  let firstCombination: number[] | undefined = undefined
  if (coincidences) {
    coincidences.forEach(c => {
      if (!firstCombination || c[1] < firstCombination[1]) firstCombination = c
    })
    return firstCombination
  }
  
  return undefined
}

const potions: number[] = [1, 2, 3, 4] // listado de poderes de pociones
const goal: number = 5 // poder objetivo (tras suma de dos pociones)

let result = findGoalPotions(potions, goal); console.log(result)