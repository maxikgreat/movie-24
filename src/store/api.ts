import moment from 'moment';import axios from '@services/axios';import { categories, Movie } from '@store/atoms';type FetchMoviesByCategoryResponse = {  page: number,  results: Movie[],  total_pages: number,  total_results: number,};const normalizeMovies = (movies: any[]): Movie[] => movies.map(movie => ({  id: movie.id,  posterPath: movie.poster_path,  title: movie.title,  overview: movie.overview,  releaseDate: movie.release_date ? moment(movie.release_date, 'YYYY-MM-DD') : null,  firstAirDate: movie.first_air_date ? moment(movie.first_air_date, 'YYYY-MM-DD') : null,  voteAverage: movie.vote_average}));export const fetchMoviesByCategory = (category: typeof categories[number], page: number) =>  axios.get<FetchMoviesByCategoryResponse>(`/${category}/popular?page=${page}`)    .then(({ data }) => ({      ...data,      results: normalizeMovies(data.results)    }));export const fetchItemById = (category: typeof categories[number], id: string) =>  axios.get<any>(`/${category}/${id}`)    .then(({ data }) => ({      ...data    }));