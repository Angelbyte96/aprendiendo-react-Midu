import responseMovies from '../notes/with-results.json'
import withoutResults from '../notes/no-results.json'

const useMovies = () => {
	const movies = responseMovies.Search

	const mappedMovies = movies?.map(movie => ({
		id: movie.imdbID,
		title: movie.Title,
		year: movie.Year,
		image: movie.Poster
	}))

	return { movies: mappedMovies }
}

export { useMovies }
