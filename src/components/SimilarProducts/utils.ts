import { GenerateSlides } from './types';

export const generateSlides: GenerateSlides = (options) => {
  const { id, content = 'Slide', hasImage, useImageAsTag } = options;

  const colorList = [
    'cyan',
    'yellow',
    'fuschia',
    'teal',
    'pink',
    'blue',
    'lime',
    'violet',
  ];

  return colorList.map((colorName: string, idx: number) => ({
    id,
    content: `${content} #${idx + 1}`,
    useImageAsTag,
    ...(hasImage && {
      imageUrl: `https://picsum.photos/id/${
        Math.floor(Math.random() * 100) + idx
      }/320`,
    }),
  }));
};
