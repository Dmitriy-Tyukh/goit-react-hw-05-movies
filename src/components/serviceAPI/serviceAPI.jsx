import axios from 'axios';
import defaultImage from '../Images/notFound.png'

const API_KEY = 'api_key=9790c9e061754f8ee983e30effe6feec';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_URL = 'trending/movie/day?';
const API_IMG_POSTER = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = BASE_URL;

class moviesAPI {
    getTrendingMovies = async () => {
        const response = await axios.get(`${TRENDING_URL}${API_KEY}`);
        const dataTrendFilms = await response.data.results;
        return await dataTrendFilms;
    };

    searchMovie = async query => {
        const response = await axios.get(`search/movie?${API_KEY}&language=en-US&query=${query}`);
        return await response.data.results;
    };

    getReviews = async movieId => {
        const response = await axios.get(`movie/${movieId}/reviews?${API_KEY}`);
        return await response.data.results;
        };

    getMovie = async movieId => {
        const movie = await axios.get(`movie/${movieId}?${API_KEY}`);
        const { genres, id, title, poster_path, vote_average, overview } = await movie.data;
        const posterPath = (await poster_path)
        ? `${API_IMG_POSTER + poster_path}`
        : defaultImage;
        return { genres, id, title, posterPath, vote_average, overview };
    };

    getActors = async movieId => {
        const response = await axios.get(`movie/${movieId}/credits?${API_KEY}&language=en-US`);
        const cast = await response.data.cast;
        const actors = await cast.map(({ name, character, profile_path }) => {
        const actorPhotoPath = profile_path
            ? `${API_IMG_POSTER + profile_path}`
            : defaultImage;
            return { name, character, actorPhotoPath };
        });
        return await actors;
    };
}

export default moviesAPI;






















// const fetchFilms = async () => {
//     const responce = await axios.get(
//       `${BASE_URL}${TRENDING_URL}${API_KEY}`
//     );
//     return responce.data.results;
// }
// export default fetchFilms;


// const apiFetch = async () => {
//     const query = await fetchFilms();
//     console.log('query ---->', query);
// }
// apiFetch()

//   // колекція по пошуку за ключовим словом
//   async fetchSearchFilms() {
//     const responce = await axios.get(
//       `${BASE_URL}${SEARCH}${API_KEY}&page=${this.page}&include_adult=false&query=${this.inputValue}`
//     );
//     // this.incrementPage();
//     return responce.data;
//   }
//   async searchGanreFilms() {
//     const responce = await axios.get(
//       `${BASE_URL}discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_watch_monetization_types=flatrate&include_video=false&with_genres=${this.genresId}&page=${this.page}`
//     );
//     return responce.data;
//   }

//   // повна інформація про фільм
//   async fetchOneFilm() {
//     const responce = await axios.get(
//       `${BASE_URL}movie/${this.movieId}?${API_KEY}`
//     );
//     return responce;
//   }

//   // трейлер до фільму
//   async fetchTrailerFilm() {
//     const responce = await axios.get(
//       `${BASE_URL}movie/${this.movieId}/videos?${API_KEY}`
//     );
//     return responce;
//   }

//   //   повертає обєкт з масивом жанрів, масивом фильмів, total_pages, total_results
//   async dataMovies() {
//     const genres = await this.getGenres(); // Повертає жанри з АРІ
//     let data = null;
//     if (this.query) {
//       data = await this.fetchSearchFilms();
//     } else {
//       data = await this.fetchTrendingFilms(); // Повертає масив фільмів з АРІ
//     }
//     const { results, total_pages, total_results } = data;
//     return { genres, results, total_pages, total_results };
//   }

//   async getGenres() {
//     const url = `${BASE_URL}${GENRES_LIST}${API_KEY}`; //
//     const response = await axios.get(url); // Запит на АРІ за жанрами
//     return response.data.genres; // Повертає проміс із жанрами
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get value() {
//     return this.inputValue;
//   }

//   set value(newInputValue) {
//     this.inputValue = newInputValue;
//   }

//   get currentPage() {
//     return this.page;
//   }

//   set currentPage(newPage) {
//     this.page = newPage;
//   }

