import React, { useEffect, useState } from 'react';
import Investcaro from './Investcaro';
import Data5 from '../Data/Data5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InvestCard = () => {
  const [sliderSettings, setSliderSettings] = useState({
    swipeToSlide: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  });

  useEffect(() => {
    const mobileResize = () => {
      if (window.innerWidth <= 768) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          swipeToSlide: true,
          slidesToShow: 1, // Adjust number of slides for mobile
        }));
      } else {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          swipeToSlide: false,
          slidesToShow: 4, // Number of slides for larger screens
        }));
      }
    };

    // Call the function once when component mounts
    mobileResize();

    // Add resize event listener
    window.addEventListener('resize', mobileResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', mobileResize);
    };
  }, []);

  return (
    <div>
      <div className="hide-scrollbar py-4 overflow-hidden">
        <section className="py-6 xl:m-auto xl:w-full">
          <h1 className="xl:text-4xl font-extrabold flex justify-center py-3">Browse</h1>
          <Slider {...sliderSettings}>
            {Data5.map((item, index) => (
              <div key={index} className="customer py-3 flex xl:ml-8 
              sm:ml-16 sm:justify-center xl:justify-start xl:px-10">
                <Investcaro
                  name={item.name}
                  icon={item.icon}
                  title={item.title}
                />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default InvestCard;
