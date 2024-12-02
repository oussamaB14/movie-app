export interface Movie {
    id: number; // Movie ID from TMDB
    title: string;
    overview: string;
    poster_path: string; // Path for the movie poster
    release_date: string;
    vote_average: number; // TMDB rating
    gener_ids: number[];
    [key: string]: any; // Optional for additional TMDB fields
  }