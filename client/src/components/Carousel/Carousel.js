import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SliderContent from "./Content/Content";
import Dot from "./Dot/Dot";
import Arrow from "./Arrow/Arrow";
import "./Slider.css";
import { getSlides } from "../../redux/actions/slides";

const Carousel = ({ numberOfSlide, isInfinite }) => {
  const dispatch = useDispatch();
  const slidesData = useSelector((state) => state.slideReducer.slides);
  const [activeSlider, setActiveSlider] = useState(0);
  const imagesLength = slidesData.length - 1;
  const validSlideNumber = 0 < numberOfSlide && numberOfSlide < 11 ? numberOfSlide : 0;
  useEffect(() => {
    dispatch(getSlides(validSlideNumber));
  }, [dispatch,validSlideNumber]);

  useEffect(() => {
    const breakTime = setInterval(() => {
      setActiveSlider(activeSlider === imagesLength ? 0 : activeSlider + 1);
    }, 5000);
    return () => clearInterval(breakTime);
  }, [activeSlider, imagesLength]);

  return (
    <div className="slider-container">
      <SliderContent activeId={activeSlider} sliderImage={slidesData} />
      {slidesData.length > 1 && (
        <>
          <Arrow
            prevSlide={() =>
              setActiveSlider(
                isInfinite
                  ? activeSlider < 1
                    ? imagesLength
                    : activeSlider - 1
                  : activeSlider < 1
                  ? activeSlider
                  : activeSlider - 1
              )
            }
            nextSlide={() =>
              setActiveSlider(
                isInfinite
                  ? activeSlider === imagesLength
                    ? 0
                    : activeSlider + 1
                  : activeSlider === imagesLength
                  ? activeSlider
                  : activeSlider + 1
              )
            }
          />
          <Dot
            activeIndex={activeSlider}
            sliderImage={slidesData}
            onclick={(activeIndex) => setActiveSlider(activeIndex)}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
