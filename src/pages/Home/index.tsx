import React, { VFC } from 'react';import { useRecoilValue, useRecoilState } from 'recoil';import { MoviesCarousel } from '@components/pages/Home';import { categoriesList } from '@store/selectors';import { categories as storeCategories, moviesState } from '@store/atoms';import { fetchMoviesByCategory } from '@store/api';const Home: VFC = () => {  // all movies  const [allMovies, setMovies] = useRecoilState(moviesState);  // categories  const categories = useRecoilValue(categoriesList);  const fetchMoviesHandler = async (category: typeof storeCategories[number]) => {    if (allMovies[category].totalPages && allMovies[category].page + 1 >= allMovies[category].totalPages) return;    try {      setMovies((prevState) => ({        ...prevState,        [category]: {          ...prevState[category],          error: null,          loading: allMovies[category].page === 1,          silentLoading: allMovies[category].page !== 1        }      }));      const data = await fetchMoviesByCategory(category, allMovies[category].page);      setMovies((prevState) => ({        ...prevState,        [category]: {          ...prevState[category],          loading: false,          silentLoading: false,          list: [...prevState[category].list, ...data.results],          totalPages: data.total_pages,          page: prevState[category].page + 1        }      }));    } catch (err) {      setMovies((prevState) => ({        ...prevState,        [category]: {          ...prevState[category],          loading: false,          silentLoading: false,          error: err        }      }));    }  };  return (    <section className="py-5">      {categories.map((category, index) => (        <MoviesCarousel          key={category}          name={category as typeof storeCategories[number]}          index={index}          fetchHandler={(category: typeof storeCategories[number]) =>            fetchMoviesHandler(category)          }        />      ))}    </section>  );};export default Home;