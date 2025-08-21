export interface ApiMovie {
	Title: string
	Year: string
	imdbID: string
	Type: string
	Poster: string
}

export interface MovieDTO {
	id: ApiMovie['imdbID']
	title: ApiMovie['Title']
	year: ApiMovie['Year']
	poster: ApiMovie['Poster']
}

export interface ApiResponse {
	Search: ApiMovie[]
	totalResults: string
	Response: string
}
