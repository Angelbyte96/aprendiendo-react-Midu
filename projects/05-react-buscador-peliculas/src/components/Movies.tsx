import type { MovieDTO } from '@/types/movies'

interface MoviesProps {
	movies: MovieDTO[]
}

export function ListOfMovies({ movies }: MoviesProps) {
	return (
		<ul>
			{movies.map((movie) => (
				<li key={movie.id}>
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img alt={movie.title} src={movie.poster} />
				</li>
			))}
		</ul>
	)
}

function NoMoviesResults() {
	return <p>No se encontraron peliculas para esta búsqueda</p>
}

export function Movies({ movies }: MoviesProps) {
	const hasMovies = movies?.length > 0

	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
