import React from 'react'
import colors from './constants'

const HorizontalSpacer = () => {
  return (
        <div style={{height: "10%", width: "60%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{height: 2, opacity: 1, width: '45%', backgroundColor: colors.grey}}></div>
            <img src={require('./images/Group1.png')} alt='meat' style={{height: "100%", aspectRatio: 1, }}/>
          <div style={{height: 2, opacity: 1, width: '45%', backgroundColor: colors.grey}}></div>
        </div>
  )
}

export default HorizontalSpacer