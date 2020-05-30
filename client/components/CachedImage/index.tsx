import React, { FC, useState, useEffect } from 'react';
import cls from 'classnames';

import './style.less';

type CachedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  mode?: 'cover' | 'contain';
};

const CachedImage: FC<CachedImageProps> = (props) => {
  const { alt, src, className, mode = 'contain', ...rest } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let image = new Image();
    image.src = src as string;
    image.onload = () => {
      setLoaded(true);
      image = null as any;
    };
  }, []);

  if (!loaded) {
    return (
      <div className={cls('default-img', className)}>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="32221"
          width="256"
          height="256">
          <path
            d="M459.838061 502.318545c0-30.657939 24.948364-55.606303 55.606303-55.606303s55.544242 24.948364 55.544242 55.606303-24.886303 55.606303-55.544242 55.606303a55.668364 55.668364 0 0 1-55.606303-55.606303m173.242181 0c0-64.884364-52.751515-117.666909-117.635878-117.666909a117.79103 117.79103 0 0 0-117.666909 117.666909 117.79103 117.79103 0 0 0 117.666909 117.66691 117.76 117.76 0 0 0 117.604848-117.66691"
            p-id="32222"></path>
          <path
            d="M515.413333 935.439515c-238.809212 0-433.089939-194.311758-433.089939-433.089939 0-238.840242 194.249697-433.18303 433.12097-433.183031 238.809212 0 433.12097 194.342788 433.120969 433.183031 0 238.778182-194.311758 433.089939-433.120969 433.089939m0-928.302545C242.346667 7.13697 20.262788 229.251879 20.262788 502.349576c0 273.035636 222.145939 495.181576 495.181576 495.181576s495.181576-222.17697 495.181575-495.181576c0-273.066667-222.17697-495.243636-495.181575-495.243637"
            p-id="32223"></path>
          <path
            d="M806.353455 471.288242a31.030303 31.030303 0 0 0-31.030303 31.030303v0.031031c0 143.297939-116.580848 259.847758-259.878788 259.847757a31.030303 31.030303 0 0 0 0 62.060606c177.493333 0 321.939394-144.41503 321.939394-321.939394a31.030303 31.030303 0 0 0-31.030303-31.030303M515.413333 242.439758a31.030303 31.030303 0 0 0 0-62.060606c-177.493333 0-321.877333 144.41503-321.908363 321.908363v0.03103a31.030303 31.030303 0 0 0 62.060606 0c0-143.297939 116.580848-259.878788 259.878788-259.878787z"
            p-id="32224"></path>
        </svg>
      </div>
    );
  }

  if (mode == 'cover') {
    return (
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={cls('cache-image-cover', className)}
        {...rest}
      />
    );
  }

  return <img className={className} src={src} alt={alt} {...rest} />;
};

export default CachedImage;
