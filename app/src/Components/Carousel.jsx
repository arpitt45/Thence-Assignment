import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(current => (current + 1) % 3);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  const handleCarouselDot = (index) => {
    setCurrentIndex(index);
  };
  
   

  const carouselItems = [
    <div className="carousel-item">
     
      <p className="text-gray-900 font-semibold">
           Enhance fortune 50 <br /> company's insights <br /> teams research <br /> capabilities
      </p>
    </div>,
    <div className="carousel-item">
      
      <p className="text-gray-900 font-semibold">
      Lorem, ipsum dolor sit amet <br /> consectetur adipisicing <br /> elit. Perspiciatis qui <br />explicabo  alias.

      </p>
    </div>,
    <div className="carousel-item">
     
      <p className="text-gray-900 font-semibold">
      Enhance unicorn 50 <br /> company's insights <br /> teams research <br /> capabilities
      </p>
    </div>,
  ];

  return (
    <div className="carousel " >
      <div className="carousel-container">{carouselItems[currentIndex]}</div>
      <div className="carousel-controls">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => handleCarouselDot(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;