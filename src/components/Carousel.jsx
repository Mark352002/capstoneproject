import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
const Carousel = () => {

    useEffect(() => {
        const swiper = new Swiper('.mySwiper', {
          loop: true,
          autoplay: {
            delay: 3000,
          },
        });
    
        return () => {
          swiper.destroy(true, true);
        };
      }, []);
    return (
        <div className="container-fluid mt-5" id='deals'>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
              <img src={require('../images/carousel/carousel1.jpg')} className="w-100 d-block" alt="" />
              </div>
              <div className="swiper-slide">
              <img src={require('../images/carousel/carousel2.jpg')} className="w-100 d-block" alt="" />
              </div>
              <div className="swiper-slide">
              <img src={require('../images/carousel/carousel3.jpg')} className="w-100 d-block" alt="" />
              </div>
              <div className="swiper-slide">
              <img src={require('../images/carousel/carousel4.jpg')} className="w-100 d-block" alt="" />
              </div>
              <div className="swiper-slide">
              <img src={require('../images/carousel/carousel5.jpg')} className="w-100 d-block" alt="" />
              </div>
              <div className="swiper-slide">
              <img src={require('../images/carousel/carousel6.jpg')} className="w-100 d-block" alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export default Carousel