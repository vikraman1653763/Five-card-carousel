import React, { useState } from "react";
import "./Exacar.css";

const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  
  {
    index: 4,
    headline: "Urban Exploration",
    button: "Explore",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
];

const Slide = ({ slide, isActive, position }) => {
  return (
    <li className={`ex-01-slide ex-01-slide--${position} ${isActive ? "ex-01-slide--current" : ""}`}>
      <div className="ex-01-slide__image-wrapper">
        <img className="ex-01-slide__image" alt={slide.headline} src={slide.src} />
      </div>
      <article className="ex-01-slide__content">
        <h2 className="ex-01-slide__headline">{slide.headline}</h2>
        <button className="ex-01-slide__action">{slide.button}</button>
      </article>
    </li>
  );
};

const Exacar = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slideData.length;

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="ex-01-slider">
      <ul className="ex-01-slider__wrapper">
        {slideData.map((slide, index) => {
          // Compute a position relative to the current slide
          const position = (index - current + totalSlides) % totalSlides;
          return (
            <Slide
              key={slide.index}
              slide={slide}
              isActive={index === current}
              position={position}
            />
          );
        })}
      </ul>
      <div className="ex-01-slider__controls">
        <button className="ex-01-btn" onClick={handlePreviousClick}>
          Prev
        </button>
        <button className="ex-01-btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Exacar;


.ex-01-slider {
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ex-01-slider__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 50%;
  position: relative;
  height: 500px; 
}

/* Base slide styling */
.ex-01-slide {
  position: absolute;
  width: 50%;
  transition: transform .5s ease-in-out, opacity .5s ease-in-out;
  opacity: 0.5;
  transform: scale(0.8);
  z-index: 1;
}

/* When the computed position is 0, this is the current (center) slide */
.ex-01-slide--0 {
  transform: translateX(0) scale(1.1);
  opacity: 1;
  z-index: 3;
  width: 60%;
}

/* When the computed position is 1, this slide is to the left (previous) */
.ex-01-slide--1 {
  transform: translateX(-120%) scale(1);
  opacity: 0.6;
  z-index: 2;
}

/* When the computed position is totalSlides - 1 (here, 4), this slide is to the right (next) */
.ex-01-slide--4 {
  transform: translateX(120%) scale(1);
  opacity: 0.6;
  z-index: 2;
}

/* For slides not in the immediate group (positions 2 and 3), hide them */
.ex-01-slide--2,
.ex-01-slide--3 {
  opacity: 0;
  transform: scale(0.8);
  z-index: 0;
}

/* Styling for slide images */
.ex-01-slide__image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.ex-01-slide__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Content over slides */
.ex-01-slide__content {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-align: center;
}

/* Headline */
.ex-01-slide__headline {
  font-size: 18px;
  margin: 0;
}

/* Buttons inside slides */
.ex-01-slide__action {
  background: #ff6600;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  margin-top: 10px;
}

.ex-01-slide__action:hover {
  background: #cc5200;
}

/* Navigation Controls */
.ex-01-slider__controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.ex-01-btn {
  background: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.ex-01-btn:hover {
  background: #555;
}
