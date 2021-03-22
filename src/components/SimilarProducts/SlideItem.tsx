import React, { FC } from 'react';
import { Box, CardMedia, Typography } from '@material-ui/core';
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
    // bg: customContent ? '' : fill,
    // ...(imageUrl &&
    //   !useImageAsTag && {
    //     backgroundImage: `url(${imageUrl})`,
    //     backgroundRepeat: 'no-repeat',
    //   }),
  };

  let renderedContent = (
    <Box
      border='1px solid lightgray'
      borderRadius='3px'
      height='100%'
      width='100%'
      textAlign='right'
    >
      <CardMedia image={imageUrl} style={{ height: '10rem', width: '100%' }} />
      {/* <Image alt='img' src={imageUrl} height='15rem' width='100%' /> */}
      {/* <Box className='swiper-lazy-preloader swiper-lazy-preloader-white' /> */}
      <Box p={2}>
        <Typography
          color='textPrimary'
          style={{ fontFamily: 'Vazir', fontSize: '13px', marginBottom: '5px' }}
        >
          تخت و سرویس خواب چرم پارس
        </Typography>
        <Typography
          color='textSecondary'
          style={{ fontFamily: 'Vazir', fontSize: '11px' }}
        >
          ۳،۵۰۰،۰۰۰ تومان
        </Typography>
      </Box>
    </Box>
  );

  // let renderedContent = (
  //   <Heading
  //     fontWeight={2}
  //     fontSize={[5, 5, 6, 7]}
  //     color='white'
  //     textAlign='center'
  //   >
  //     {content}
  //   </Heading>
  // );

  // if (imageUrl) {
  //   renderedContent = <></>;

  //   if (useImageAsTag) {
  //     renderedContent = (
  //       <>
  //         <Image alt='img' data-src={imageUrl} className='swiper-lazy' />
  //         <Box className='swiper-lazy-preloader swiper-lazy-preloader-white' />
  //       </>
  //     );
  //   }
  // } else if (customContent) {
  //   renderedContent = <>{customContent}</>;
  // }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      {...slideStyles}
    >
      {renderedContent}
    </Box>
  );
};

// Slide.defaultProps = {
//   fill: theme.colors.gray[2],
// };

Slide.displayName = 'Slide';

export default Slide;
