import React from 'react';
import Slider from 'infinite-react-carousel';
import { useRef } from 'react';
import colors from './constants';

 const CustomSlider = () => {

const Width = useRef(window.innerWidth);
  const Height = useRef(window.innerHeight);

  const styles = {
    slidePage: {
      height:"100%",
      width:"100%", 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems:'center', 
      position: 'relative',
    },
  };
   
    const settings =  {
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      dots: true,
      centerPadding: 0,



    };
    return (
      <div style={{height: Height.current/1.2, width:"100%", position: 'relative', paddingBottom: 0  }}>
        
        <Slider { ...settings } style={{height:"100%", width:"100%", display: 'flex', justifyContent: 'center', alignItems:'center',  position: 'relative'}}>
          
          <div style={styles.slidePage}>

              <div style={{height: '55%', width:"35%", position: 'absolute', backgroundColor: '#00000050' ,  top: Height.current/4, display: 'flex', justifyContent: 'flex-end'}}>
                <div style={{height:'100%', width: '50%', }}>
                  <div style={{color: colors.white, fontWeight: 750, fontSize: Height.current/25, display: 'flex', textAlign: 'left', justifyContent: 'flex-start', marginTop: 20, letterSpacing: 2  }}>
                    Heiko Brath <br/>
                    Metzgermeister
                  </div>
                  
                  <div style={{color: colors.white, maxHeight: "80%", fontWeight: 300, fontSize: Height.current/50, marginTop: "10%", maxWidth: '80%', display: 'flex', textAlign: 'left', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', letterSpacing: 1  }}>
                    Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.
                  </div>
                </div>
              </div>
          
             <img src={require('./images/image 14.jpg')}  alt='boss' style={{height: "100%", width: "100%", zIndex: 5,  }}/>

          </div>
          <div style={styles.slidePage}>
             <img src={require('./images/image 14.jpg')}  alt='boss' style={{height: "100%", width: "100%", zIndex: 5,  }}/>
          </div>
          <div style={styles.slidePage}>
             <img src={require('./images/image 14.jpg')}  alt='boss' style={{height: "100%", width: "100%", zIndex: 5,  }}/>
          </div>
          <div style={styles.slidePage}>
             <img src={require('./images/image 14.jpg')}  alt='boss' style={{height: "100%", width: "100%", zIndex: 5,  }}/>
          </div>
          <div style={styles.slidePage}>
             <img src={require('./images/image 14.jpg')}  alt='boss' style={{height: "100%", width: "100%", zIndex: 5,  }}/>
          </div>

        </Slider>
      </div>
    );
  
}

export default CustomSlider;