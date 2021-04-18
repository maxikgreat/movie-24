import React, { useEffect, useRef, VFC } from 'react';import Slider from 'react-slick';import _ from 'lodash';import { useRecoilValue } from 'recoil';import { CardNextLoader, MovieCard } from '@components/pages/Home';import { sliderConfig } from '@configs/index';import { categoryObject } from '@store/selectors';import { categories as storeCategories } from '@store/atoms';import { renameCategoryName } from '@helpers/index';interface MoviesCarouselProps {  name: typeof storeCategories[number],  index: number,  fetchHandler: (_: typeof storeCategories[number]) => void,}const MoviesCarousel: VFC<MoviesCarouselProps> = ({ name, index, fetchHandler }) => {  const sliderRef = useRef<Slider>(null);  const categoryMovieObject = useRecoilValue(categoryObject(name));  useEffect(() => {    fetchHandler(name);  }, []);  return (    <div className={`carousel-container ${index ? 'mt-8' : ''}`}>      <h2 className="text-4xl px-4 uppercase">{renameCategoryName(name)}</h2>      {categoryMovieObject.loading && (        <Slider          {...sliderConfig}          autoplay={false}          arrows={false}        >          {_.times(6, movie => (            <MovieCard key={movie}/>          ))}        </Slider>      )}      {categoryMovieObject.error && (        <h2>Error</h2>      )}      {(!categoryMovieObject.loading && !categoryMovieObject.error) &&      (        <Slider          {...sliderConfig}          ref={sliderRef}          autoplay={false}          afterChange={(props) => {            if (!sliderRef.current) return;            // state.breakpoint no in docs            // @ts-expect-error            const point = sliderRef.current.props.responsive.find(point => point.breakpoint === sliderRef.current.state.breakpoint as number);            // @ts-expect-error            if (props + (point?.settings?.slidesToShow ?? sliderRef.current.props.slidesToShow) === categoryMovieObject.list.length) {              fetchHandler(name);            }          }}        >          {categoryMovieObject.list.map((movie) => (            <MovieCard              category={name}              key={movie.id}              movie={movie}            />          ))}          {categoryMovieObject.silentLoading && <CardNextLoader />}        </Slider>      )}      <hr/>    </div>  );};export default MoviesCarousel;