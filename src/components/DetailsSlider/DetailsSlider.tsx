import { theme, globalStyles } from './stylesConfig';
import { Global } from '@emotion/core';
import { Box, Heading } from '@react-yuki/ui';
import Slider from './Slider';

const DetailsSlider = () => (
  <>
    <Global styles={globalStyles} />
    <Box p={4}>
      <Box>
        <Heading
          as="h1"
          color="orange.4"
          fontSize={13}
          m={0}
          my={4}
          fontWeight={1}
          textAlign="center"
        >
        </Heading>
      </Box>
      <Box>
        <Slider
          params={{
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }}
        />
      </Box>
    </Box>
  </>
);

export default DetailsSlider;
