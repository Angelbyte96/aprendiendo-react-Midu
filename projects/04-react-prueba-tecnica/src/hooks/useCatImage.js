import { useState, useEffect } from 'react'

const useCatImage = ({ fact }) => {
	const [imageUrl, setImageUrl] = useState()

	// Para recuperar la imagen al cargar la página
	useEffect(() => {
		if (!fact) return
		const threeFirstWords = fact.split(' ', 3).join(' ')
		fetch(
			`https://cataas.com/cat/says/${threeFirstWords}?fontSize=100&fontColor=red&`
		).then(res => {
			const imageUrl = res.url

			setImageUrl(imageUrl)
		})
	}, [fact])

	return { imageUrl }
}

export { useCatImage }