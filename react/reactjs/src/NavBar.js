import React from 'react'
import colors from './constants'
import {useRef} from 'react';


const NavBar = ({ Width, hamburgerMenu, setHamburgerMenu, setIsHover, darkMode, isHover}) => {

      const Height = useRef(window.innerHeight);


      const styles = {
  navButton: {
    height: "100%",
    width:"8%",
    // backgroundColor: 'transparent',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: Height.current/70,
    borderWidth: 0,
    marginLeft: 2,
    //display: 'flex',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    backgroundColor: 'transparent' ,
  },
  section: {
    height: Height.current/1.2,
    width: "100%",
    minWidth: "100%",
    backgroundColor: colors.almostBlack,
    display: 'flex',
    //flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',

  },
  smallSection: {

    width: "100%",
    backgroundColor: colors.almostBlack,
    display: 'flex',
    height: Height.current/1.4, 
    //flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',  

  },
  fiftyPercentLeft: {
    height: "100%",
    width: "50%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
 fiftyPercentRight: {
    height: "100%",
    width: "50%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-Start',

  },
  thirdyPercent: {
    height: "80%",
    width: "60%",
    textAlign: 'left',

  },
  listItem: {
    fontSize: Height.current/45, 
    textAlign: 'left',
    fontWeight: 300, 
    color: colors.white, 
    marginTop: 30,

  },
  footer: {
    height: Height.current/5,
    width: "100%",
    backgroundColor: ( darkMode ? colors.black : colors.redNavBG ),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  footerColumn: {
    height: "100%",
    width: "25%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'left',

  },
  hamburger: {
    height: "8%",
    aspectRatio: 4, 
    maxWidth: "80%",
    minWidth: Width/20 , 
    backgroundColor: colors.white, 
    borderRadius: 10, 

  },
 
}


  return (
          <div style={{ width: "100%",  justifyContent: 'center', alignItems: 'center', backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG ), borderWidth: 0}}>
        <div style={{ width: '75%', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-start', paddingLeft: "25%", backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG ), borderWidth: 0}}>
           
            <img src={require('./images/logo.png')} alt='logo' style={{position: 'absolute', height: Height.current/6, aspectRatio: 1, left: Width/12 , zIndex: 10, }}/>
            
           { Width >= 1000 &&
              <div style={{height:'100%', width:"90%", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'flex-end', alignItems: 'center', flexWrap: 'nowrap', marginTop: 20, marginBottom: 20}}>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      die Metzgerei
              </button>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      Dry Aged
              </button>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      Fleischversand
              </button>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      Events/Kurse
              </button>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      Partyservice
              </button>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      Tagesessen 
              </button>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      Impressum 
              </button>
              <button onClick={()=>{}}         
                style={styles.navButton}>
                      Kontakt 
              </button>
            
              <button onClick={()=>{}}         
                style={{...styles.navButton, ...{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}}>
                    <img src={require('./images/Frame.png')}  alt='pdf' style={{height: "30%", aspectRatio: 1, paddingRight: 10,  }}/>

                      download 
              </button>
            </div>
           }
           { Width < 1000 &&
              <div style={{height:'100%', width:"90%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'nowrap'}}>
                <button onClick={()=>{}}         
                style={{...styles.navButton, ...{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginRight:"15%", }}}>
                    <img src={require('./images/Frame.png')}  alt='pdf' style={{height: "30%", aspectRatio: 1, paddingRight: 10,  }}/>

                      download 
              </button>
                <button onClick={()=>{setHamburgerMenu(!hamburgerMenu)}} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}     
                  style={{...styles.navButton, ...{flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor: (isHover ? colors.white : 'transparent' ) }}}>
                  <div style={{...styles.hamburger, ...{backgroundColor: (isHover ?  colors.redNavBG : colors.white ),  }}}></div>
                  <div style={{...styles.hamburger, ...{backgroundColor: (isHover ?  colors.redNavBG : colors.white ),  }}}></div>
                  <div style={{...styles.hamburger, ...{backgroundColor: (isHover ?  colors.redNavBG : colors.white ),  }}}></div>
                </button>
              </div>
           }
           
        </div>
    
      </div>
  )
}

export default NavBar