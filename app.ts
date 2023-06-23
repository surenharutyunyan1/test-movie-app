import { MovieApp } from './movie-app';

async function main(): Promise<void> {
  const app = new MovieApp();

  await app.loadMovies(1, 10); // Fetches first page of 10 movies

  const movies: Readonly<Movie[]> = app.getPaginatedMovies();

  app.sortMoviesByReleaseYear();

  app.toggleFavorite(movies[0]);
  app.toggleFavorite(movies[2]);

  const favorites: Readonly<Movie[]> = app.getFavorites();

  const keyword = 'Action';
  const searchResults: Movie[] = app.searchMovies(keyword);

  const movieToRate = movies[0];
  app.rateMovie(movieToRate, 4.5);

  const movieToComment = movies[1];
  app.addComment(movieToComment, 'Great movie!');
  app.addComment(movieToComment, 'Highly recommended.');
  app.goToNextPage();
  app.goToPage(3);
  app.setPageSize(5);
}

main().catch((error) => console.error('An error occurred:', error));
