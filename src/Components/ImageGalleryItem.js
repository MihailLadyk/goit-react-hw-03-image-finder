import React from "react";

export default function ImageGalleryItem({imgUrl, largeImgUrl, onOpenModal}) {
  return (
    <li className="ImageGalleryItem">
      <img src={imgUrl} alt="" className="ImageGalleryItem-image" onClick={onOpenModal} data-url={largeImgUrl}/>
    </li>
  );
}
// ImageGalleryItem.propTypes = {
//   imgUrl: PropTypes.string.isRequried,
//   largeimgUrl: PropTypes.string.isRequried,
// };
