import { atom, RecoilState } from 'recoil';import { Moment } from 'moment';export const categories = <const>[  // 'movie',  'tv'];export type Movie = {  id: number,  posterPath: string,  title: string,  overview: string,  releaseDate: Moment | null,  firstAirDate: Moment | null,  voteAverage: number,};export type MovieCategory = {  loading: boolean;  silentLoading: boolean;  list: Movie[];  error: string | null,  page: number,  totalPages: number,};export type MoviesState = {  // eslint-disable-next-line no-unused-vars  [key in typeof categories[number]]: MovieCategory;};export interface CurrentMovieState {  id: null};const applyDefaultValues = (): MoviesState =>  <MoviesState>Object.values(categories).reduce((acc, item) => ({    ...acc,    [item]: {      loading: false,      silentLoading: false,      list: [],      error: null,      page: 1,      totalPages: null    }  }), {});export const moviesState: RecoilState<MoviesState> = atom({  key: 'moviesState',  default: applyDefaultValues()});export const currentMovieState: RecoilState<CurrentMovieState> = atom({  key: 'currentMovieState',  default: {    id: null  }});