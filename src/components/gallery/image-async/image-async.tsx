import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from 'react';

/* eslint-disable-next-line */
export type ImageAsyncProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function ImageAsync(props: ImageAsyncProps) {
  const [image, setImage] = useState('');

  function handleLoad() {
    setImage(props.src || '');
  }

  useEffect(() => {
    setImage('');
    if (props.src) {
      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener('load', handleLoad);
      };
    }
  }, [props.src]);

  if (image === props.src) {
    return <img {...props} />;
  }
  return null;
}

export default ImageAsync;
