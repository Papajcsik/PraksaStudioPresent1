import React from 'react'
import {useRef} from 'react';
import colors from './constants'
import './Media.css'



const RedPressable = ({setModal, color, props}) => {

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

    <button className='button' onClick={()=>{}} style={{height: Height.current/18, width: "40%", backgroundColor: color, borderWidth: 0,
                    borderRadius: 50, marginTop: 50, color: getColor(color), fontSize: Height.current/65, letterSpacing: 1, fontWeight: 550,
                    marginLeft: 0, }}>
        {props}
    </button>
  )
}

export default RedPressable