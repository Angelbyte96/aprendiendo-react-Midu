import responseMovies from '@/mocks/with-results.json'
import type { ApiMovie, MovieDTO } from '@/types/movies'

export function useMovies() {
	const apiMovies: ApiMovie[] = responseMovies.Search

	const mappedMovies: MovieDTO[] = apiMovies?.map((movie) => ({
		id: movie.imdbID,
		title: movie.Title,
		year: movie.Year,
		poster: movie.Poster,
	}))

	return { movies: mappedMovies }
}
