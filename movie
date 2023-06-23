export interface Movie {
  title: string;
  genre: string;
  releaseYear: number;
  rating?: number;
  comments?: string[];
}

export interface ApiResponse<T> {
  data: T;
}

export async function fetchMovies(page: number, pageSize: number): Promise<Movie[]> {
  await delay(1000);

  // Simulating fetching movies from a remote API or database
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const movies: Movie[] = [];

  for (let i = startIndex; i < endIndex; i++) {
    const movie: Movie = {
      title: `Movie ${i + 1}`,
      genre: 'Action',
      releaseYear: 2021,
    };
    movies.push(movie);
  }

  return movies;
}

function delay(ms: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}
