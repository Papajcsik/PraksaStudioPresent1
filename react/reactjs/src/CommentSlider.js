import React, { useEffect, useState } from 'react'
import {useRef} from 'react';
import colors from './constants';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './commentSlider.css';

import AOS from "aos";
import "aos/dist/aos.css";


const CommentSlider = ({array}) => {

  const Width = useRef(window.innerWidth);
  const Height = useRef(window.innerHeight);

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: false,

      centerPadding: "60px",
      //className: "center",
      //centerMode: true,   

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
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
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

    const [focusedElement, setFocusedElement] =  useState(1);


    const getCardHeight = (num) => {
  if(num === focusedElement)
  {
    return "80%"
  }
  return "60%";
 };
 
     useEffect(()=>{

      AOS.init();
      AOS.refresh();

    },[]);
  

  return (
    <div data-aos="fade-up" style={{height: "90%", width: "80%",  marginTop: 0,}}>
          <Slider {...settings} className="custom-slider"  style={{height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {
                    array.map((e, i)=>(
                      <div style={{height: getCardHeight(i), width:'25%', backgroundColor: colors.grey, backgroundAttachment: 'fixed', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        { i === 1 &&
                            <div style={{height:"30%", width:"100%", paddingTop: 10, backgroundColor: colors.grey, display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                <img src={require('./images/grillkurs_icon.png')} style={{height: "65%", aspectRatio: 1, }} alt='grill'/>

                                <img src={require('./images/zvezdice.png')} style={{height: "25%", aspectRatio: 3, marginTop: 10, }} alt='stars'/>
                            </div>
                        }
                        { i !== 1 &&
                          <div style={{height:"20%", width:"100%", backgroundColor: colors.grey, paddingTop: 10,  }}>  
                          </div>
                        }


                        <div style={{height: '60%', width: "100%", backgroundColor: colors.grey, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <div style={{fontSize: Height.current/60, color: colors.white, fontWeight: 250, marginTop: 5, maxWidth: '90%', letterSpacing: 1, marginBottom: 40,  }}>
                              {e.comment}         
                              </div>
                              <div style={{fontSize: Height.current/40, color: colors.white, fontWeight: 350, marginBottom: 20,  }}>
                              {e.name} 
                              </div>
                              <div style={{fontSize: Height.current/50, color: colors.white, fontWeight: 150, }}>
                               {e.position}
                              </div>

                        </div>
                        { i === 2 &&
                          <div style={{position: 'relative', height: "10%", aspectRatio: 1,  zIndex: 20, right:  70, marginTop: 15 }}>
                            <img src={require('./images/znak.png')} style={{height:'100%', width:"100%"}} alt='znak' />
                          </div>
                        }
                      </div>
                    ))
                  }
          </Slider>
        </div>
  )
}

export default CommentSlider