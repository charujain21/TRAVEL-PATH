import React, { useEffect, useState } from 'react';
import Cards from './Cards';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

function Freeguide() {
  const [travel, setTravel] = useState([]); // Ensure useState is imported

  useEffect(() => {
    const getTravel = async () => {
      try {
        const res = await axios.get("http://localhost:4001/travel");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data); //isse data filtered free wale hi dikhege , by res.data , saare data dikhege
        setTravel(data);
      } catch (error) {
        console.log(error);
      }
    }
    getTravel();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto mb-6 md:px-20 px-4 text-black dark:bg-slate-900 dark:text-white'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Explore the World with Our Free Tour Guides</h1>
          <p>Our free tour guides are the perfect way to start your journey. With expert recommendations, insider tips, and detailed itineraries, you can explore top destinations without spending a dime. From must-see landmarks to hidden local gems, our guides give you all the information you need to make the most of your trip. Whether you're a first-time traveler or a seasoned explorer, 
            our free guides will ensure you experience the best of each destination—on your terms and without any cost!</p>
        </div>

        <div>
          <Slider {...settings}>
            {travel.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freeguide;



// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }