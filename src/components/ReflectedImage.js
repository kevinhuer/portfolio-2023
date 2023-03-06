import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import './ReflectedImage.scss';

const ReflectedImage = ({image, alt}) => {
return (
    <>
         <GatsbyImage
            className="image-main"
            image={image}
            alt={alt}
          />
          <GatsbyImage
            className="image-main reflection"
            image={image}
            alt={""}
          />
    </>
)
}

export default ReflectedImage