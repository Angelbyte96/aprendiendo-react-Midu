const saveGameStorage = ({ board, turn }) => {
	// Vamos a guardar aqui partida
	window.localStorage.setItem('board', JSON.stringify(board))
	window.localStorage.setItem('turn', turn)
}

const resetGameStorage = () => {
	window.localStorage.removeItem('board')
	window.localStorage.removeItem('turn')
}

export { saveGameStorage, resetGameStorage }
