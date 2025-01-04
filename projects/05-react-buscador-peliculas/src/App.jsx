import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
	const { movies } = useMovies()
	const { search, updateSearch, error } = useSearch()

	const handleSubmit = e => {
		e.preventDefault()
		console.log({ search })
	}

	const handleChange = e => {
		updateSearch(e.target.value)
	}

	return (
		<div className='page'>
			<header>
				<h1>Buscador de peliculas</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input
						style={{
							border: '1px solid transparent',
							borderColor: error ? 'red' : 'transparent'
						}}
						onChange={handleChange}
						value={search}
						name='query'
						placeholder='Avengers, Star Wars, Interestelar'
					/>
					<button type='submit'>Buscar</button>
				</form>
				{error && <p style={{color: 'red'}}>{error}</p>}
			</header>

			<main>
				<Movies movies={movies} />
			</main>
		</div>
	)
}

export default App
