import { atom } from 'recoil';import { Movie } from '@store/atoms/moviesState';export type SearchState = {  searchValue: string,  results: Movie[],  loading: boolean,  silentLoading: boolean,  error: string | null,  page: number,  totalPages: number | null,};export const applyDefaultValues = (): SearchState => ({  searchValue: '',  results: [],  loading: false,  error: null,  page: 1,  totalPages: null,  silentLoading: false});export const searchState = atom({  key: 'searchState',  default: applyDefaultValues() as SearchState});