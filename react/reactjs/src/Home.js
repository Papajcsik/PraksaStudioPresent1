import React from 'react'
import colors from './constants'
import {useRef} from 'react';
import RedPressable from './RedPressable';
import HorizontalSpacer from './HorizontalSpacer';
import { useState, useEffect } from 'react';
import CustomSlider from './CustomSlider';
import { useSpring, animated } from '@react-spring/web';
import MyParallax from './Parallax';
import CardSlider from './CardSlider';
import CustomModal from './CustomModal';
import './Media.css';
import CommentSlider from './CommentSlider';




export default function HomePage(props) {

  const Width = useRef(window.innerWidth);
  const Height = useRef(window.innerHeight);

    const [isHover, setIsHover] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const [darkMode, setDarkMode] = useState(false);


  const plateImage = require('./images/bgImage1.png');

  console.log('height: ', Height.current);
  console.log('width: ', Width.current);

  const [modalState, setModalState] = useState(false);
  const [modalEnabled, setModalEnabled] = useState(true);


  const foodArray = [
  {name: 'Würstchen', pic: require('./images/rachel-clark-MhI8HVjqJf8-unsplash.jpg')},
  {name: 'Hahnchen', pic: require('./images/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg')},
  {name: 'Schwein', pic: require('./images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg')},
  {name: 'Rind', pic: require('./images/luis-santoyo-IePWXTF3-0Y-unsplash.jpg')},
  {name: 'Würstchen', pic: require('./images/rachel-clark-MhI8HVjqJf8-unsplash.jpg')},
  {name: 'Hahnchen', pic: require('./images/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg')},
  {name: 'Schwein', pic: require('./images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg')},
  {name: 'Rind', pic: require('./images/luis-santoyo-IePWXTF3-0Y-unsplash.jpg')},
  ]
  const awardArray = [
  {name: 'Tollit argumentum genau Saepe lobortis', pic: require('./images/nagrada1.png')},
  {name: 'Schneewittchen denique', pic: require('./images/nagrada2.png')},
  {name: 'Grimms Märchen expetenda', pic: require('./images/nagrada3.png')},
  {name: 'Mettwurst mei ullum gloriatur.', pic: require('./images/nagrada4.png')},
  ];

  const commentArray = [
    { name: 'Maria Kartofeln', position:'', comment: 'Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.'},
    { name: 'Halling Tobias', position:'Koch', comment: 'Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .'},
    { name: 'Rene Weinstein', position:'', comment: 'Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.'},
    { name: 'Maria Kartofeln', position:'', comment: 'Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.'},
    { name: 'Halling Tobias', position:'Koch', comment: 'Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .'},
    { name: 'Rene Weinstein', position:'', comment: 'Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.'},

  ];

  
  const springProps = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: false,   
    delay: 1500,

  });

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
    flexDirection: 'column', 
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
    minWidth: Width.current/20 , 
    backgroundColor: colors.white, 
    borderRadius: 10, 

  },
 
}
  useEffect(()=>{
    
    const mode = window.localStorage.getItem('darkMode');
    const modalMode = window.localStorage.getItem('modalMode');

    if(mode !== null)
    {
      setDarkMode(JSON.parse(mode));
    }
    if(modalMode !== null)
    {
      setModalEnabled(JSON.parse(modalMode));
    }


  },[]);

  const [focusedElement, setFocusedElement] =  useState(1);



 const scroll = (direction) => {

  if(direction === 'left' && focusedElement > 0)
  {
    return setFocusedElement(prev=> prev-1);
  }
  if(direction === 'right' && focusedElement < 2)
  {
    return setFocusedElement(prev=> prev+1);
  }
  return;

 };


     useEffect(()=>{
        setTimeout(() => {
          if(modalEnabled){
            setModalState(true)
          }
        }, 5000);
    },[]);
    
  return (
    <div style={{ height: Height.current/10, width: "100%", backgroundColor: 'transparent', display: 'flex', flexWrap: 'wrap', }}>
      <div style={{ height: '75%', width: "100%",  justifyContent: 'center', alignItems: 'center', backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG ), borderWidth: 0}}>
        <div style={{ height: "100%", width: '75%', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-start', paddingLeft: "25%", backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG ), borderWidth: 0}}>
           
            <img src={require('./images/logo.png')} alt='logo' style={{position: 'absolute', height: Height.current/6, aspectRatio: 1, left: Width.current/12 , zIndex: 10, }}/>
            
           { Width.current >= 1000 &&
              <div style={{height:'100%', width:"90%", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'flex-end', alignItems: 'center', flexWrap: 'nowrap'}}>
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
           { Width.current < 1000 &&
              <div style={{height:'100%', width:"90%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'nowrap'}}>
                <button onClick={()=>{}}         
                style={{...styles.navButton, ...{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginRight:"15%"}}}>
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
      <div style={{ height:'35%', width: "100%",  backgroundColor: colors.grey, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'nowrap' }}>
        <img src={require('./images/clock.png')}  alt='clock' style={{height: "60%", aspectRatio: 1.2, zIndex: 10, }}/>
          <div style={{ height:'100%', width: "40%", fontSize: Height.current/65, display: 'flex', alignItems: 'center', marginLeft: 10,  backgroundColor: colors.grey, color: colors.white }}>

            Opentime:   Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30
            <button 
            style={{height: '100%', aspectRatio: 3, zIndex: 10, borderWidth: 0, borderLeftWidth: 1, marginLeft: 10, backgroundColor: 'transparent', color: colors.white, fontSize: Height.current/70, fontWeight: 500, }}
            onClick={()=>{window.localStorage.setItem('darkMode', JSON.stringify(!darkMode)); setDarkMode(!darkMode); }}>
            Dark Mode
           </button>

         </div>
         { hamburgerMenu &&
            <div style={{position: 'absolute', right: 10, top: "8%", height: '50%', maxWidth: "40%", aspectRatio: 1, backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG ), display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', zIndex: 20,}}>
              <button onClick={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      die Metzgerei
              </button>
              <button onClick={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      Dry Aged
              </button>
              <button onClick={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      Fleischversand
              </button>
              <buttonon Click={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      Events/Kurse
              </buttonon>
              <button onClick={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      Partyservice
              </button>
              <button onClick={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      Tagesessen 
              </button>
              <button onClick={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      Impressum 
              </button>
              <button onClick={()=>{setHamburgerMenu(false)}}         
                style={styles.navButton}>
                      Kontakt 
              </button>
            </div> 
           }
      </div>

      <div style={{height: Height.current/1.2, width:"100%", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.almostBlack }}>

          <CustomSlider />

              { modalState && modalEnabled &&
                <CustomModal closeModal={setModalState} enable={setModalEnabled} />
              }

      </div>

      <div>
        
      </div>

      <div className='section' style={styles.section}>
        
        <animated.div style={{...styles.fiftyPercentLeft, ...springProps}}>
          <div style={styles.thirdyPercent}>
              <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 15}}>
                  Dry aged
              </div>
              <div style={{fontSize: Height.current/35, color: colors.white, fontWeight: 650, marginBottom: 70, }}>
                  Alte Wutz, Dry Aged
              </div>

              <div style={{color: colors.white, fontWeight: 300, fontSize: Height.current/50, maxWidth: '80%', display: 'flex', textAlign: 'left', justifyContent: 'flex-start', marginTop: 20, flexWrap: 'wrap', letterSpacing: 1  }}>
                Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.<br/><br/>
                id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
              </div>

              <div style={{display: 'flex', height: "10%", width: "80%", flexDirection: 'row', justifyContent: 'space-around'}}>
                <RedPressable setModal={setModalState} color={colors.redButtons} props={'Dry Aged'}/>
                <RedPressable setModal={setModalState} color={colors.redButtons} props={'Alte Wurtz'}/>
              </div>


          </div>
        </animated.div>
        
        <animated.div style={{...styles.fiftyPercentRight, ...springProps }}>
            <div style={{...styles.thirdyPercent, ...{display: 'flex',  flexDirection: 'column', justifyContent: 'space-between', marginTop: 10,}}}>
                <div style={{ height: '65%', width: "100%",}}>
                 
                  <img src={require('./images/287e4a29fb95622355c7023ec0f765ff@2x 1.png')}  alt='meat1' style={{height: "100%", width: "100%", }}/>

                </div>

                <div style={{display: 'flex',  flexDirection: 'row', justifyContent: 'space-between', height: '30%', width:'100%',  }}>
                  
                  <img src={require('./images/93567ed87a1475783cc3a90355825a87@2x 1.png')}  alt='meat2' style={{height: "100%", width: "30%", }}/>

                  <img src={require('./images/d368bea5bcb8ed88cfcf994b7a518068@2x 1.png')}  alt='meat3' style={{height: "100%", width: "30%", }}/>

                  <img src={require('./images/1c78d243bd195e6ff002f8fdbc24e5d0@2x 1.png')}  alt='meat4' style={{height: "100%", width: "30%", }}/>

                </div>



            </div>
        </animated.div>
      </div>
      
      <div  style={{...styles.section, ...{ backgroundColor: ( darkMode ? colors.almostBlack : colors.redButtons )}}} >
        <animated.div style={{...styles.fiftyPercentLeft, ...springProps}}>
          <div style={styles.thirdyPercent}>
            <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 10, marginBottom: 50}}>
                 Buchen Sie den <br/>
                 Grillkurs jetzt
            </div>
            <ul style={{height: "30%", width: '60%', marginBottom: 50,}}>
              <li style={styles.listItem}>professioneller Lehrer</li>
              <li style={styles.listItem}>ausgezeichneter Metzger</li>
              <li style={styles.listItem}>1 Tag</li>
              <li style={styles.listItem}>lernen Sie die Kunst des Grillens</li>

            </ul>

              <div style={{display: 'flex', height: "10%", width: "70%", flexDirection: 'row', justifyContent: 'center'}}>

                <RedPressable setModal={setModalState} color={colors.white} props={'Grillkurs'}/>
              </div>


          </div>
        </animated.div>
        
        <animated.div style={{...styles.fiftyPercentRight, ...springProps}}>
            
            <img src={require('./images/victoria-shes-UC0HZdUitWY-unsplash copy@2x 1.jpg')} style={{width: "100%",  height: '100%'}} alt='raznjic'/>
        </animated.div>

        
      </div>

      <div style={{...styles.section, ...{display: 'flex', alignItems: 'center', flexDirection: 'column' }}}>
        
        <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 70, marginBottom: 0}}>
                  Das Handwerk
        </div>

        <div style={{fontSize: Height.current/30, color: colors.white, fontWeight: 550, marginTop: 10, marginBottom: 50}}>
                  alles über unsere Hausgemachte Produkte
        </div>

        <div style={{fontSize: Height.current/55, color: colors.white, fontWeight: 350, marginTop: 20, maxWidth: '40%', letterSpacing: 1, textAlign: 'center', }}>
                  Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.
                 <br/><br/> Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart. <br/><br/>
                  id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior
        </div>

        <div style={{height:"10%", width: "30%", marginTop: 50,}}>
          <RedPressable setModal={setModalState} color={colors.redButtons} props={'Das Handwerk'}/>
        </div>



       
      </div>
      <div style={{...styles.section, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <HorizontalSpacer/>

        <CardSlider array={foodArray}/>

      </div>

      <div style={{...styles.section, ...{ backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG )}}} className='section'>
        <div style={styles.fiftyPercentLeft}>
          <img src={require('./images/4541cc99083f618a22b772228f8a9698@2x 1.jpg')} style={{height:"100%", width: "100%"}} alt='fuszer'/>
        </div>
        <div style={{...styles.fiftyPercentRight, ...{display: 'flex', alignItems: 'center'}}}>
            <div style={{...styles.thirdyPercent, ...{ marginLeft: 100, height: "60%", display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}}>


                  <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750,  }}>
                            Custome spices for your meat
                  </div>

                  <div style={{fontSize: Height.current/29, color: colors.white, fontWeight: 550, }}>
                            Turnbeutel nostrud exercitation ullamco <br/>
                            Sprechen Sie deutsch
                  </div>

                  <div style={{fontSize: Height.current/50, color: colors.white, fontWeight: 350, marginTop: 10, maxWidth: '90%', letterSpacing: 1,  }}>
                            Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.<br/><br/>
                            Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. 
                  </div>
                                      
            </div>
        </div>

      </div>
      
      <div style={{...styles.smallSection, ...{height: Height.current}}}>

        {/* <MyParallax /> */}
          <div style={{backgroundImage: `url(${plateImage})` , backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover', width: "100%", height: Height.current,
                      backgroundRepeat: 'no-repeat',}}>

                        <div style={{height:"100%", width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                              <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750, }}>
                                  Fleischversand
                              </div>
                              <div style={{height: "10%", width:"30%", }}>
                                  <RedPressable color={colors.white} props={'Jetzt bestellen'}/>
                              </div>
                        </div>

          </div>

      </div>


      <div style={{ ...styles.smallSection, ...{ }}}>
        <div style={{height: '80%', width: "100%", display: 'flex', flexDirection: 'row'}}>
          <div style={{...styles.fiftyPercentLeft, ...{}}}>
           
           <div style={{...styles.thirdyPercent, ...{display: 'flex', alignItems: 'center'}}}>
            <img src={require('./images/genussnetz logo 1.png')} style={{height: "50%", aspectRatio: 2}} alt='genustnetz'/>
           </div>

          </div>
          <div style={{...styles.fiftyPercentRight, ...{}}}>
            <div style={styles.thirdyPercent}>
              
              <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 70, marginBottom: 0}}>
                  Metzgerei Brath ist Mitglied <br/>
                  im Genussnetzwerk
              </div>
              <div style={{height: "30%", width: "80%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <RedPressable setModal={setModalState} color={colors.redButtons} props={'Gehen zu site'}/>
              </div>

            </div>
          </div>
        </div>
        

        <HorizontalSpacer/>
      </div>


      <div style={{ ...styles.smallSection, ...{ }}}>
        <div style={{height: '80%', width: "100%", display: 'flex', flexDirection: 'row'}}>
          <div style={{...styles.fiftyPercentLeft, ...{width:"35%", display: 'flex', alignItems: 'center', }}}>
            
            <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, }}>
                  Auszeichnungen
              </div>
           
          </div>
          <div style={{...styles.fiftyPercentRight, ...{width:'50%', display: 'flex', alignItems: 'center',}}}>
            
            <div style={{height: "80%", width: "90%", maxWidth:'80%', marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
              {
                awardArray.map((e, i)=>(
                  <div key={e.name} style={{width: "20%", aspectRatio: 1, maxWidth:"23%", margin: 10, display: 'block', }}>
                  <div style={{height: "100%", width: "100%", backgroundImage: `url(${e.pic})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex', }}>
                      
                    </div>
                      {/* <img src={e.pic} alt='i' style={{width:"100%", height: "100%", zIndex: 1}}/> */}
                      <div style={{position: 'relative', zIndex: 2, fontSize: Height.current/50, marginTop: 15, color: colors.almostWhite, height:"40%", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                          {e.name}
                      </div>
                  </div>        
                ))
              }
            </div>

          </div>
        </div>
        

        <HorizontalSpacer/>

      </div>


      <div style={{...styles.section , ...{height: Height.current, flexDirection: 'column', alignItems: 'center'}}}>
             <div style={{position: 'relative', zIndex: 2, fontSize: Height.current/60, marginTop: 5, color: colors.almostWhite, height:"10%", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                Empfehlungs
             </div>
             <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750, marginBottom: 25, }}>
                         Was die Leute über uns sagen   
              </div>

              <div style={{height:'65%', width: "80%", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  {/* <button onClick={()=>{scroll('left')}} style={{height:"6%", aspectRatio: 1.5, backgroundColor: 'transparent', borderWidth: 0 }}>
                    <img src={require('./images/goLeft.png')}  style={{height:"100%", width:"100%"}} alt='left'/>
                  </button> */}
                
                <CommentSlider array={commentArray}/>

                  {/* <button onClick={()=>{scroll('right')}} style={{height:"6%", aspectRatio: 1.5, backgroundColor: 'transparent', borderWidth: 0 }}>
                    <img src={require('./images/goRight.png')}  style={{height:"100%", width:"100%"}} alt='left'/>
                  </button> */}
              </div>
            <div style={{height: "10%", width:"30%", marginBottom: 20}}>
              <RedPressable setModal={setModalState} color={colors.redButtons} props={'Alle Berichte'}/>
              <br/>
            </div>              

      </div>

      <div style={styles.footer}>
          <div style={{...styles.footerColumn, ...{alignItems: 'left'}}}>
              <div style={{fontSize: Height.current/60, color: colors.white, fontWeight: 250, marginTop: 2, maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
              Klauprechtstraße  25 <br/>
              76137 Karlsruhe, Germany
              </div>
              <div style={{fontSize: Height.current/60, color: colors.white, fontWeight: 250, marginTop:2, maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
              +49 721 358060
              </div>
              <div style={{fontSize: Height.current/60, color: colors.white, fontWeight: 250, marginTop: 2, maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
              info@partyservice-brath.de
              </div>

          </div>
          <div style={styles.footerColumn}>
                  <img src={require('./images/Group 655.png')} style={{height:"90%", aspectRatio: 1, }} alt='logo'/>
          </div>
          <div  style={{...styles.footerColumn, ...{flexDirection: 'row', justifyContent: 'center'}}}>
                <div style={{fontSize: Height.current/50, color: colors.white, fontWeight: 250, marginTop: 2, marginRight: 10,  maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
                  Besuchen Sie uns auf:   
                </div>
                <img src={require('./images/Group 628 1.png')} style={{height:"30%", aspectRatio: 4.5, }} alt='logo'/>

          </div>
      </div>
      <div style={{height:"30%", width: '100%', backgroundColor: colors.deepRed, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div style={{fontSize: Height.current/65, color: colors.almostWhite, fontWeight: 250, marginTop: 2, marginLeft: 150,  maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
                  © 2020 by Metzgerei Heiko Brath  GmbH, Deutschland                
                </div>
                <div style={{fontSize: Height.current/65, color: colors.almostWhite, fontWeight: 250, marginTop: 2, marginRight: 150,  maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
                Code and design by: <button onClick={()=>{window.location.href = 'https://www.studiopresent.rs/';}} style={{borderWidth: 0, backgroundColor: 'transparent', color: colors.white, fontSize:  Height.current/65, fontWeight: 100, textDecorationLine: 'underline'}}>StudioPresent</button>
                </div>
      </div>
      

    </div>
  )
}

