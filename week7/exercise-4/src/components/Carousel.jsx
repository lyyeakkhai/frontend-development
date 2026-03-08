import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, setCurrentImage] = React.useState(0);

  /* You will need to hanle the click on left and right button */
  const moveLeft = () => {
    if(currentImage > 0){
      setCurrentImage(currentImage - 1);
    }
  }
  const moveRight = () => {
    if(currentImage < images.length - 1){
      setCurrentImage(currentImage + 1);
    }
  }

  /* You will need to manage the cases when we are on the last image or first image*/
  const isFirstImage = currentImage === 0;
  const isLastImage = currentImage === images.length - 1;
  const decreaseOpacityLeft = isFirstImage ? "decrease-opacity" : "";
  const decreaseOpacityRight = isLastImage ? "decrease-opacity" : "";

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className={"arrow arrow-left " + decreaseOpacityLeft} onClick={moveLeft} disabled={isFirstImage} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImage].src} alt={images[currentImage].alt} className="slide" />

      <BsArrowRightCircleFill className={"arrow arrow-right " + decreaseOpacityRight} onClick={moveRight} disabled={isLastImage} />
    </div>
  );
};
