import { WINNER_COMBOS } from '../constans.js'

const checkWinnerFrom = boardToCheck => {
	// Revisamos todas las combinaciones ganadoras
	// Para ver si X o O ganó
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo
		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a]
		}
	}
	// Si no hay ganador
	return null
}

const checkEndGame = newBoard => {
	// Revisamos si hay un empate
	// Si no hay más espacios vacíos
	// en el tablero
	return newBoard.every(square => square !== null)
}

export { checkWinnerFrom, checkEndGame }
