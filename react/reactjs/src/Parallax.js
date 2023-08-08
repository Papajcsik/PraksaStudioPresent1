import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import RedPressable from './RedPressable';
import { useRef } from 'react';
import colors from './constants';

const MyParallax = () => {

    const Width = useRef(window.innerWidth);
    const Height = useRef(window.innerHeight);

      const plateImage = require('./images/bgImage1.png');


  return (
    <Parallax pages={1.5} style={{ position: 'relative', height: "100%", width: "100%", top: '0', left: '0',  }}>
        <ParallaxLayer offset={0.5} speed={0.5} factor={2} style={{backgroundImage: `url(${plateImage})` , backgroundSize: 'contain', backgroundRepeat: 'no-repeat',}}>
                {/* <div style={{ width: "100%", backgroundColor: colors.almostBlack,
                    display: 'flex', height: '100%' , flexDirection: 'column', justifyContent: 'center', alignItems: 'center', ...{ 
                    backgroundImage: `url(${plateImage})` , backgroundSize: 'auto', backgroundRepeat: 'no-repeat', }}}>
                    
                    
                </div> */}
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1.5}>
                <div style={{height:"100%", width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                            <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750, }}>
                                Fleischversand
                            </div>
                            <div style={{height: "10%", width:"30%", }}>
                                <RedPressable color={colors.white} props={'Jetzt bestellen'}/>
                            </div>
                </div>
                        
        </ParallaxLayer>
        
    </Parallax>
  )
}

export default MyParallax