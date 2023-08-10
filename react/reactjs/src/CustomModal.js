import React, { useEffect } from 'react'
import colors from './constants'

const CustomModal = ({ closeModal, enable }) => {



  return (
    <div style={{ position: 'absolute', height: '100%', width:"100%", top: 80, zIndex: 100, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: colors.black }}>
        <div style={{  height: '60%', aspectRatio: 2, backgroundColor: colors.black, borderRadius: 15, borderWidth: 1, borderColor: colors.grey}}>

           <div style={{height: "15%", width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 0, paddingRight: 0, color: colors.white, }}> 
              <div style={{paddingLeft: 50, paddingTop: 15, fontSize: 20}} > Special offer</div> 
        
                <button style={{paddingRight: 25, paddingTop: 0, fontSize: 20, backgroundColor: 'transparent', borderWidth: 0, color: colors.white}} 
                        onClick={()=>{ enable(false); window.localStorage.setItem('modalMode', JSON.stringify(false)); closeModal(false)}}>X</button></div>
            <div style={{paddingLeft: 50, paddingTop: 15, fontSize: 20, color: colors.white}} >
                Content
            </div>
        </div>
    </div>
  )
}

export default CustomModal