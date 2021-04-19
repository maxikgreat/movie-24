import { useRecoilState } from 'recoil';import { searchState } from '@store/atoms';import { searchMovie } from '@store/api';const useSearch = () => {  const [search, setSearch] = useRecoilState(searchState);  const searchMovieHandler = async (silent: boolean) => {    try {      setSearch((prevState) => ({        ...prevState,        error: null,        loading: !silent,        silentLoading: silent      }));      const data = await searchMovie(search.searchValue, silent ? search.page + 1 : 1);      setSearch((prevState) => ({        ...prevState,        loading: false,        silentLoading: false,        results: silent ? [...search.results, ...data.results] : data.results,        totalPages: data.total_pages,        page: silent ? search.page + 1 : 1      }));    } catch (err) {      setSearch((prevState) => ({        ...prevState,        loading: false,        silentLoading: false,        error: err.message      }));    }  };  return {    search,    searchMovieHandler  };};export { useSearch };