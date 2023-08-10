import React from 'react'
import {useRef} from 'react';
import colors from './constants';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


const CardSlider = ({array}) => {

  const Width = useRef(window.innerWidth);
  const Height = useRef(window.innerHeight);

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      adaptiveHeight: false,
      autoplay: true,
      
      //height: '100%',
      

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            height:"100%",
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            height:"100%",
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
    <div style={{height: "40%", width: "70%",  marginTop: 20,}}>
          <Slider {...settings} className="custom-slider"  style={{height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          {
            array.map((e, i)=>(
              <div key={e.name} style={{height: "100%",  width: '24%', }}>

              <div style={{ height: "100%", width: "100%", backgroundImage: `url(${e.pic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center'}}>
                  <div style={{position: 'relative', zIndex: 2, fontSize: Height.current/50, backgroundColor: '#00000090',  color: colors.white, height:"25%", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                      {e.name}
                  </div>
                 </div>
                  {/* <img src={e.pic} alt='i' style={{width:"100%", height: "100%", zIndex: 1}}/> */}
              </div>        
            ))
          }
          </Slider>
        </div>
  )
}

export default CardSlider