import React, { FC } from 'react';
import { Flex, Box, Heading, Image, theme } from '@react-yuki/ui';
import { SlideProps } from './types';

const Slide: FC<SlideProps> = ({
  imageUrl,
  fill,
  content,
  customContent,
  useImageAsTag,
  ...styles
}) => {
  const slideStyles = {
    ...styles,
    bg: customContent ? '' : fill,
    ...(imageUrl &&
      !useImageAsTag && {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
      }),
  };

  let renderedContent = (
    <Heading
      fontWeight={2}
      fontSize={[5, 5, 6, 7]}
      color="white"
      textAlign="center"
    >
      {content}
    </Heading>
  );

  if (imageUrl) {
    renderedContent = <></>;

    if (useImageAsTag) {
      renderedContent = (
        <>
          <Image alt="img" data-src={imageUrl} className="swiper-lazy" />
          <Box className="swiper-lazy-preloader swiper-lazy-preloader-white" />
        </>
      );
    }
  } else if (customContent) {
    renderedContent = <>{customContent}</>;
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="20rem"
      {...slideStyles}
    >
      {renderedContent}
    </Flex>
  );
};

Slide.defaultProps = {
  fill: theme.colors.gray[2],
};

Slide.displayName = 'Slide';

export default Slide;
