import React from "react";
import PropTypes from 'prop-types';


export default function ImageGalleryItem({imgUrl, largeImgUrl, onOpenModal}) {
  return (
    <li className="ImageGalleryItem">
      <img src={imgUrl} alt="" className="ImageGalleryItem-image" onClick={onOpenModal} data-url={largeImgUrl}/>
    </li>
  );
}



ImageGalleryItem.propTypes = {
  largeImgUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};