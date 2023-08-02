import React from 'react'
import {useRef} from 'react';
import colors from './constants'



const RedPressable = ({color, props}) => {

  const Width = useRef(window.innerWidth);
  const Height = useRef(window.innerHeight);

  const getColor = (kolor) => {
      if( kolor == colors.redButtons )
      {
        return colors.white;
      }
      return colors.black; 
    };

  return (

    <button style={{height: Height.current/18, width: "35%", backgroundColor: color, 
                    borderRadius: 50, marginTop: 100, color: getColor(color), fontSize: Height.current/65, letterSpacing: 1, fontWeight: 550,
                    marginLeft: 30, }}>
        {props}
    </button>
  )
}

export default RedPressable