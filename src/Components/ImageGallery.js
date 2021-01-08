import propTypes from "prop-types";
import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map((img) => (
          <ImageGalleryItem
            key={img.id}
            imgUrl={img.webformatURL}
            largeImgUrl={img.largeImageURL}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    </div>
  );
}

// ImageGallery.propTypes = {
//   images: propTypes.array.isRequired,
// };
