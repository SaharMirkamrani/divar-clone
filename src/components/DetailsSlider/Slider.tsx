import React, { FC } from 'react';
import Swiper from 'react-id-swiper';
import { generateSlides } from './utils';
import { SlideContainer } from './styledComponents';
import { SliderProps, Slide } from './types';
import SlideItem from './SlideItem';

export const renderSlide = ({ id, ...rest }: Slide, idx: number) => (
  <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} />
);

const Slider: FC<SliderProps> = ({
  hasImage,
  useImageAsTag,
  params,
  id,
  ...styles
}) => {
  const data = generateSlides({ id, hasImage, useImageAsTag });

  return (
    <SlideContainer {...styles} id={id}>
      <Swiper {...params}>{data.map(renderSlide)}</Swiper>
    </SlideContainer>
  );
};

export default Slider;
