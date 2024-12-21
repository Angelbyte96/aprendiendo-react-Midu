import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'


const App = () => {
	const { fact, refreshFact } = useCatFact()
	const { imageUrl } = useCatImage({ fact })

	const handleClick = async () => {
		refreshFact()
	}

	return (
		<main>
			<h1>App de Gatitos</h1>
			<button onClick={handleClick}>Get New Fact</button>
			<section>
				{fact && <p>{fact}</p>}
				{imageUrl && (
					/* 	<img
					src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
					alt={`Image extracted using the first three words for ${fact}`}
				/> */
					<img
						src={`${imageUrl}`}
						alt={`Image extracted using the first three words for ${fact}`}
					/>
				)}
			</section>
		</main>
	)
}

export { App }
