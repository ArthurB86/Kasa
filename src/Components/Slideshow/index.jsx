import React, { useState } from 'react';
import '../../style/index.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  if (images.length <= 1) {
    return (
      <div className="slider-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    );
  }

  return (
    <div className="slider-container">
      <FontAwesomeIcon icon={faChevronLeft} className="prev-button" onClick={prevSlide} />
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <FontAwesomeIcon icon={faChevronRight} className="next-button" onClick={nextSlide} />
    </div>
  );
};

export default Slider;