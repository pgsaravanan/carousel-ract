import React, { useState } from 'react';
import './carousel.scss';
import PropTypes from 'prop-types';
import { CarouselWrapStyled } from './carouselStyled';

const Carousel = ({ data }) => {
  const displaySlidesCount = 5;
  const defaultActivePosition = 2;
  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  const [active, setActive] = useState(defaultActivePosition);
  const carouselImages = data && data.hits;

  const onNext = () => {
    const resetIndex = currentImageIdx === carouselImages.length - displaySlidesCount;
    const updateIndex = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImagIdx(updateIndex);
    setActive(resetIndex ? defaultActivePosition : active + 1);
  };

  const onPrevious = () => {
    const resetToVeryBack = currentImageIdx <= 0;
    const updateIndex = resetToVeryBack ? carouselImages.length - displaySlidesCount : currentImageIdx - 1;
    setCurrentImagIdx(updateIndex);
    setActive(resetToVeryBack ? carouselImages.length - (defaultActivePosition + 1) : active - 1);
  };

  return (
    <div>
      { data && (
      <section className="carousel-container" aria-labelledby="carouselheading">
        <h3 id="carouselheading">Carousel items</h3>
        <CarouselWrapStyled index={currentImageIdx} active={active} id="carouseDisplay">
          { carouselImages.map((image) => (
            <li key={image.id} aria-live="polite">
              <img src={image.webformatURL} alt={image.webformatURL} />
            </li>
          ))}
        </CarouselWrapStyled>
        <div className="carousel-button-wrapper" aria-controls="carouseDisplay">
          <button onClick={onPrevious} className="prev" aria-label="Previous" />
          <button onClick={onNext} className="next" aria-label="Next" />
        </div>
      </section>
      )}
    </div>
  );
};

Carousel.prototype = {
  data: PropTypes.object
};
export default Carousel;
