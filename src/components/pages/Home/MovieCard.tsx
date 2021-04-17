import React, { VFC } from 'react';import { useHistory } from 'react-router-dom';import { Skeleton } from '@components/common';import { Movie } from '@store/atoms';interface MovieCardProps {  movie?: Movie,}const MovieCard: VFC<MovieCardProps> = ({ movie }) => {  const { push } = useHistory();  const shortText = (text: string, value: number): string | '' => {    if (!text) return '';    return text.length > value ? `${text.substring(0, value - 3)}...` : text;  };  return (    <div className="p-4 movie-card">      {!movie && (        <Skeleton/>      )}      {movie && (        <div className="transition-all block bg-white shadow-md hover:shadow-lg overflow-hidden cursor-pointer">          <div className="relative pb-48 overflow-hidden">            <img className="absolute inset-0 h-full w-full object-cover"              src={`http://image.tmdb.org/t/p/w342${movie.posterPath}`}              alt={movie.title}            />          </div>          <div className="p-4">            <span className="inline-block py-1 leading-none font-semibold uppercase tracking-wide text-xs">              Release date:            <span className="font-bold text-red-500">                &nbsp;{(movie.releaseDate ?? movie.firstAirDate)?.format('DD MMM YYYY')}            </span>            </span>            <h3 className="mt-2 mb-2 font-bold whitespace-nowrap truncate">{movie.title}</h3>            <p className="text-sm">{shortText(movie.overview, 100)}</p>            <div className="mt-3 flex items-center">              <span className="text-sm font-semibold">ab</span>&nbsp;<span                className="font-bold text-xl">45,00</span>&nbsp;<span className="text-sm font-semibold">€</span>            </div>          </div>        </div>      )}    </div>  );};export default MovieCard;