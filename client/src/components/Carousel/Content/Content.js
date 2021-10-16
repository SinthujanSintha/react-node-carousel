import React from "react";
import "../Slider.css";

const SliderContent = ({ activeId, sliderImage }) => {
  return (
    <section>
      {sliderImage.map((slider, index) => (
        <div
          key={index}
          className={index === activeId ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slider.urls} alt="SlideImage" />
          <h2 className="slide-title">{slider.title}</h2>
         <h3 className="slide-text">{slider.subTitle}</h3>
        
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
