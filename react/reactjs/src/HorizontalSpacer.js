import React, { useEffect } from 'react'
import colors from './constants'

import AOS from "aos";
import "aos/dist/aos.css";
import './Media.css'

const HorizontalSpacer = () => {


     useEffect(()=>{

      AOS.init();
      AOS.refresh();

    },[]);

  return (
        <div className='spacer' data-aos="flip-down" style={{height: "40%", width: "70%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{height: 2, opacity: 1, width: '45%', backgroundColor: colors.grey}}></div>
            <img src={require('./images/Group1.png')} alt='meat' style={{height: "100%", aspectRatio: 1, }}/>
          <div style={{height: 2, opacity: 1, width: '45%', backgroundColor: colors.grey}}></div>
        </div>
  )
}

export default HorizontalSpacer