import { useEffect, useState } from 'react'

const FollowMouse = () => {
	const [enabled, setEnabled] = useState(false)
	const [position, setPosition] = useState({ x: 0, y: 0 })

	// pointer move
	useEffect(() => {
		console.log('efecto', { enabled })

		const handleMove = e => {
			const { clientX, clientY } = e
			console.log('handleMove', { clientX, clientY })
			setPosition({ x: clientX, y: clientY })
		}

		if (enabled) {
			window.addEventListener('pointermove', handleMove)
		}

		return () => {
			console.log('cleanup')
			window.removeEventListener('pointermove', handleMove)
		}
	}, [enabled])

	// [] -> solo se ejecuta una vez cuando se monta el componente
	// [enabled] -> se ejecuta cuando cambia enabled y se monta el componente
	// undefined -> se ejecuta cada vez que se renderiza el componente

	// change body className
	useEffect(() => {
		document.body.classList.toggle('no-cursor', enabled)

		return () => {
			document.body.classList.remove('no-cursor')
		}
	}, [enabled])

	return (
		<>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					border: '1px solid #fff',
					borderRadius: '50%',
					opacity: 0.8,
					pointerEvents: 'none',
					left: -10,
					top: -10,
					width: 20,
					height: 20,
					transform: `translate(${position.x}px, ${position.y}px)`
				}}
			/>
			<button onClick={() => setEnabled(!enabled)}>
				{enabled ? 'Desactivar' : 'Activar'} seguir puntero
			</button>
		</>
	)
}

const App = () => {
	return <main>{<FollowMouse />}</main>
}

export default App
