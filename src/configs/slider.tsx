import React, { MouseEventHandler, VFC } from 'react';import { Settings } from 'react-slick';import { Next, Prev } from '@components/icons';interface WrapperArrowProps {  className: string,  onClick: MouseEventHandler<HTMLDivElement>,  component: React.ReactNode,};const WrapperArrow: VFC<WrapperArrowProps> = ({ className, onClick, component }) => {  return (    <div      className={`${className} transition duration-200 ease-in-out cursor-pointer opacity-50 hover:opacity-100`}      onClick={onClick}    >      {component}    </div>  );};const responsiveBreakpoints = [1450, 1250, 1024, 768, 500];const sliderConfig: Settings = {  adaptiveHeight: true,  autoplay: true,  arrows: true,  slidesToShow: 6,  slidesToScroll: 1,  autoplaySpeed: 5000,  // @ts-expect-error  nextArrow: <WrapperArrow component={<Next className={'text-pink-600'} />} />,  // @ts-expect-error  prevArrow: <WrapperArrow component={<Prev className={'text-pink-600'} />} />,  responsive: responsiveBreakpoints.map((point, index) => ({    breakpoint: point,    settings: {      slidesToShow: responsiveBreakpoints.length - index,      initialSlide: responsiveBreakpoints.length - index    }  }))};export default sliderConfig;