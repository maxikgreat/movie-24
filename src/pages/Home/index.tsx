import { VFC } from 'react';import { MoviesCarousel } from '@components/pages/Home';const Home: VFC = () => {  return (    <section className="py-5">      <MoviesCarousel />      <MoviesCarousel />      <MoviesCarousel />      <MoviesCarousel />    </section>  );};export default Home;