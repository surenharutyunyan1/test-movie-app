import { Movie, fetchMovies } from './movie';
import { Pagination } from './pagination';

export class MovieApp {
  private movies: Movie[];
  private favorites: Movie[];
  private pagination: Pagination;

  constructor() {
    this.movies = [];
    this.favorites = [];
    this.pagination = new Pagination();
  }

  async loadMovies(page: number, pageSize: number): Promise<void> {
    const fetchedMovies = await fetchMovies(page, pageSize);
    this.movies = fetchedMovies;
    this.pagination.setTotalItems(pageSize); // Assuming the total number of movies is known
    this.pagination.setCurrentPage(page);
    this.pagination.setPageSize(pageSize);
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  getMovies(): Readonly<Movie[]> {
    return this.movies;
  }

  sortMoviesByReleaseYear(): void {
    this.movies.sort((a: Movie, b: Movie) => a.releaseYear - b.releaseYear);
  }

  toggleFavorite(movie: Movie): void {
    const index = this.favorites.findIndex((favMovie: Movie) => favMovie.title === movie.title);
    if (index === -1) {
      this.favorites.push(movie);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  getFavorites(): Readonly<Movie[]> {
    return [...this.favorites];
  }

  searchMovies(keyword: string): Movie[] {
    keyword = keyword.toLowerCase();
    return this.movies.filter((movie: Movie) => movie.title.toLowerCase().includes(keyword));
  }

  rateMovie(movie: Movie, rating: number): void {
    movie.rating = rating;
  }

  addComment(movie: Movie, comment: string): void {
    if (!movie.comments) {
      movie.comments = [];
    }
    movie.comments.push(comment);
  }

  getPaginatedMovies(): Readonly<Movie[]> {
    const { currentPage, pageSize } = this.pagination;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.movies.slice(startIndex, endIndex);
  }

  goToNextPage(): void {
    this.pagination.goToNextPage();
  }

  goToPreviousPage(): void {
    this.pagination.goToPreviousPage();
  }

  goToPage(page: number): void {
    this.pagination.goToPage(page);
  }

  setPageSize(pageSize: number): void {
    this.pagination.setPageSize(pageSize);
  }
}
