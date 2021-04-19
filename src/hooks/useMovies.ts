import { useRecoilState, useRecoilValue } from 'recoil';import { categories as storeCategories, moviesState } from '@store/atoms';import { fetchMoviesByCategory } from '@store/api';import { categoriesList } from '@store/selectors';const useMovies = () => {  const [allMovies, setMovies] = useRecoilState(moviesState);  const categories = useRecoilValue(categoriesList);  const fetchMoviesHandler = async (category: typeof storeCategories[number]) => {    if (allMovies[category].totalPages &&      // @ts-expect-error      (allMovies[category].page + 1 >= allMovies[category].totalPages)) return;    try {      setMovies((prevState) => ({        ...prevState,        [category]: {          ...prevState[category],          error: null,          loading: allMovies[category].page === 1,          silentLoading: allMovies[category].page !== 1        }      }));      const data = await fetchMoviesByCategory(category, allMovies[category].page);      setMovies((prevState) => ({        ...prevState,        [category]: {          ...prevState[category],          loading: false,          silentLoading: false,          list: [...prevState[category].list, ...data.results],          totalPages: data.total_pages,          page: prevState[category].page + 1        }      }));    } catch (err) {      setMovies((prevState) => ({        ...prevState,        [category]: {          ...prevState[category],          loading: false,          silentLoading: false,          error: err.message        }      }));    }  };  return {    categories,    fetchMoviesHandler  };};export { useMovies };