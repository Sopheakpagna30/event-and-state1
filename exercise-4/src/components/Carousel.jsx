import React, {useState} from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [index, setIndex] = useState(0);

  /* You will need to hanle the click on left and right button */
  function left(){
    index === 0 ? setIndex(images.length - 1) : setIndex(i => i - 1);
  }
  function right(){
    index === images.length - 1 ? setIndex(0) : setIndex(i => i + 1);
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={left}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[index].src} alt={images[index].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={right}/>
    </div>
  );
};
