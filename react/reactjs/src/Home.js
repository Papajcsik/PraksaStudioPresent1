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

import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './NavBar';



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
  {name: 'Würstchen', pic: require('./images/webp/rachel-clark-MhI8HVjqJf8-unsplash.webp')},
  {name: 'Hahnchen', pic: require('./images/webp/claudio-schwarz-4qJlXK4mYzU-unsplash.webp')},
  {name: 'Schwein', pic: require('./images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg')},
  {name: 'Rind', pic: require('./images/webp/luis-santoyo-IePWXTF3-0Y-unsplash.webp')},
  {name: 'Würstchen', pic: require('./images/webp/rachel-clark-MhI8HVjqJf8-unsplash.webp')},
  {name: 'Hahnchen', pic: require('./images/webp/claudio-schwarz-4qJlXK4mYzU-unsplash.webp')},
  {name: 'Schwein', pic: require('./images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg')},
  {name: 'Rind', pic: require('./images/webp/luis-santoyo-IePWXTF3-0Y-unsplash.webp')},
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
    //height: Height.current/1.2,
    width: "100%",
    minWidth: "100%",
    backgroundColor: colors.almostBlack,
    display: 'flex',
    //flexDirection: 'row',
    flex: 1,
    flexWrap: 'no-wrap',

  },
  smallSection: {

    width: "100%",
    backgroundColor: colors.almostBlack,
    display: 'flex',
    //height: Height.current/1.4, 
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
   
    width: "50%",
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-Start',

  },
  thirdyPercent: {
    //height: "80%",
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
    //height: Height.current/5,
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

      AOS.init();
      AOS.refresh();

      setTimeout(() => {
          if(modalEnabled){
            setModalState(true)
          }
        }, 5000);

    },[]);
    
  return (
    <div style={{ height: '100%', width: "100%", backgroundColor: 'transparent', display: 'flex', flexWrap: 'wrap', }}>
          
          <NavBar Width={Width.current} hamburgerMenu={hamburgerMenu} setHamburgerMenu={setHamburgerMenu} setIsHover={setIsHover} darkMode={darkMode} isHover={isHover}/>
      
      <div style={{ width: "100%",  backgroundColor: colors.grey, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'nowrap' }}>
        <img src={require('./images/webp/clock.webp')}  alt='clock' style={{ aspectRatio: 1, marginRight: 10, zIndex: 10, }}/>
          <div className='openTime' style={{ width: "40%", fontSize: Height.current/65, display: 'flex',  alignItems: 'center', flexWrap: 'nowrap', marginLeft: 1,  backgroundColor: colors.grey, color: colors.white }}>

            Opentime:   Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30
            <button 
            style={{height: '100%', aspectRatio: 3, zIndex: 10, borderWidth: 0, borderLeftWidth: 1, marginLeft: 10, backgroundColor: 'transparent', color: colors.white, fontSize: Height.current/70, fontWeight: 500, }}
            onClick={()=>{window.localStorage.setItem('darkMode', JSON.stringify(!darkMode)); setDarkMode(!darkMode); }}>
            Dark Mode
           </button>

         </div>
         { hamburgerMenu &&
            <div style={{position: 'absolute', right: 10, top: "8%", height: '50%', maxWidth: "40%", aspectRatio: 1, backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG ), display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', zIndex: 20, marginBottom: 10, marginTop: 10}}>
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

      <div style={{ width:"100%", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.almostBlack }}>

          <CustomSlider />

              { modalState && modalEnabled &&
                <CustomModal closeModal={setModalState} enable={setModalEnabled} />
              }

      </div>

      <div>
        
      </div>
      { Width.current <= 1400 &&
        <div style={{...styles.smallSection, ...{ }}}>
              <div style={{width:"60%", position: 'relative', backgroundColor: 'transparent' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{color: colors.white, fontWeight: 750, fontSize: Height.current/25, display: 'flex', textAlign: 'center', justifyContent: 'center', marginTop: 20, letterSpacing: 2  }}>
                    Heiko Brath <br/>
                    Metzgermeister
                  </div>
                  
                  <div style={{color: colors.white, maxHeight: "80%", fontWeight: 300, fontSize: Height.current/50, marginTop: "10%", maxWidth: '80%', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', letterSpacing: 1  }}>
                    Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.
                  </div>
                </div>
              </div>
      </div>
      }

      <div className='section' style={styles.section}>
        
        <div className='fiftyPercent' data-aos="fade-up" style={{...styles.fiftyPercentLeft}}>
          <div className='thirdyPercent' style={{...styles.thirdyPercent, ...{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}}>
              <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 20}}>
                  Dry aged
              </div>
              <div style={{fontSize: Height.current/35, color: colors.white, fontWeight: 650, marginBottom: 20, }}>
                  Alte Wutz, Dry Aged
              </div>

              <div style={{color: colors.white, fontWeight: 300, fontSize: Height.current/50, maxWidth: '80%', display: 'flex', textAlign: 'left', justifyContent: 'flex-start', marginTop: 15, flexWrap: 'wrap', letterSpacing: 1  }}>
                Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.<br/><br/>
                id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
              </div>

              <div style={{display: 'flex', width: "80%", flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 }}>
                <RedPressable setModal={setModalState} color={colors.redButtons} props={'Dry Aged'}/>
                <RedPressable setModal={setModalState} color={colors.redButtons} props={'Alte Wurtz'}/>
              </div>


          </div>
        </div>
        
        <div className='fiftyPercent' data-aos="fade-up" style={{...styles.fiftyPercentRight, margin: 25 }}>
            <div className='thirdyPercent' style={{...styles.thirdyPercent, ...{display: 'flex',  flexDirection: 'column', justifyContent: 'space-between', marginTop: 15, marginBottom: 20,}}}>
                <div style={{ marginBottom: 5}}>
                 
                  <img src={require('./images/webp/287e4a29fb95622355c7023ec0f765ff@2x 1.webp')}  alt='meat1' style={{display: 'flex', flex: "100%", aspectRatio: 1 }}/>

                </div>

                <div style={{display: 'flex',  flexDirection: 'row', justifyContent: 'space-between', }}>
                  
                  <img src={require('./images/webp/93567ed87a1475783cc3a90355825a87@2x 1.webp')}  alt='meat2' style={{ display: 'flex', flex: '30%', aspectRatio: 1,  margin: 5 }}/>

                  <img src={require('./images/webp/d368bea5bcb8ed88cfcf994b7a518068@2x 1.webp')}  alt='meat3' style={{ display: 'flex', flex: '30%', aspectRatio: 1,  margin: 5 }}/>

                  <img src={require('./images/webp/1c78d243bd195e6ff002f8fdbc24e5d0@2x 1.webp')}  alt='meat4' style={{ display: 'flex', flex: '30%', aspectRatio: 1,  margin: 5 }}/>

                </div>



            </div>
        </div>
      </div>
      
      <div  className='section' style={{...styles.section, ...{ backgroundColor: ( darkMode ? colors.almostBlack : colors.redButtons ), flexWrap: 'nowrap' }, }} >
        <div className='fiftyPercent' style={{...styles.fiftyPercentLeft, }}>
          <div className='thirdyPercent'  data-aos="fade-right" style={styles.thirdyPercent}>
            <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750, marginTop: 0, marginBottom: 5}}>
                 Buchen Sie den <br/>
                 Grillkurs jetzt
            </div>
            <ul style={{ width: '60%', marginBottom: 0, }}>
              <li style={styles.listItem}>professioneller Lehrer</li>
              <li style={styles.listItem}>ausgezeichneter Metzger</li>
              <li style={styles.listItem}>1 Tag</li>
              <li style={styles.listItem}>lernen Sie die Kunst des Grillens</li>

            </ul>

              <div style={{display: 'flex', width: "70%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>

                <RedPressable setModal={setModalState} color={colors.white} props={'Grillkurs'}/>
              </div>


          </div>
        </div>
        
        <div className='fiftyPercent' style={{...styles.fiftyPercentRight, ...{alignItems: 'end'} }}>
            
            <img  data-aos="fade-left" src={require('./images/victoria-shes-UC0HZdUitWY-unsplash copy@2x 1.jpg')} style={{width: "100%"}} alt='raznjic'/>
        </div>

        
      </div>

      <div className='section' style={{...styles.section, ...{display: 'flex', alignItems: 'center', flexDirection: 'column' }}}>
        
        <div data-aos="fade-up" style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 70, marginBottom: 0}}>
                  Das Handwerk
        </div>

        <div data-aos="fade-up" style={{fontSize: Height.current/30, color: colors.white, fontWeight: 550, marginTop: 10, marginBottom: 50}}>
                  alles über unsere Hausgemachte Produkte
        </div>

        <div data-aos="fade-up" style={{fontSize: Height.current/55, color: colors.white, fontWeight: 350, marginTop: 20, maxWidth: '40%', letterSpacing: 1, textAlign: 'center', }}>
                  Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.
                 <br/><br/> Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart. <br/><br/>
                  id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior
        </div>

        <div data-aos="fade-up" style={{ width: "50%", marginTop: 50,}}>
          <RedPressable setModal={setModalState} color={colors.redButtons} props={'Das Handwerk'}/>
        </div>



       
      </div>
      <div style={{...styles.section, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20,}}>

          <HorizontalSpacer />
        </div>

        <CardSlider array={foodArray}/>

      </div>

      <div style={{...styles.section, ...{ backgroundColor: ( darkMode ? colors.almostBlack : colors.redNavBG )}}} className='section'>
        <div className='fiftyPercent' data-aos="fade-right" style={{...styles.fiftyPercentLeft, ...{alignItems: 'flex-start'}}}>
          <img src={require('./images/4541cc99083f618a22b772228f8a9698@2x 1.jpg')} style={{width: "100%", resizeMode: 'contain' }} alt='fuszer'/>
        </div>
        <div className='fiftyPercent'  style={{...styles.fiftyPercentRight, ...{display: 'flex', alignItems: 'center'}}}>
            <div data-aos="fade-left" style={{...styles.thirdyPercent, ...{ marginLeft: 100, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}}>


                  <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750, marginTop: 30 }}>
                            Custome spices for your meat
                  </div>

                  <div style={{fontSize: Height.current/29, color: colors.white, fontWeight: 550,  marginTop: 10,  }}>
                            Turnbeutel nostrud exercitation ullamco <br/>
                            Sprechen Sie deutsch
                  </div>

                  <div style={{fontSize: Height.current/50, color: colors.white, fontWeight: 350, marginTop: 20, marginBottom: 30, maxWidth: '90%', letterSpacing: 1,  }}>
                            Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.<br/><br/>
                            Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. 
                  </div>
                                      
            </div>
        </div>

      </div>
      
      <div style={{...styles.smallSection, ...{}}}>

        {/* <MyParallax /> */}
          <div style={{backgroundImage: `url(${plateImage})` , backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover', width: "100%", height: Height.current,
                      backgroundRepeat: 'no-repeat',}}>

                        <div style={{height:"100%", width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                              <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750, }}>
                                  Fleischversand
                              </div>
                              <div style={{height: "10%", width:"50%", }}>
                                  <RedPressable color={colors.white} props={'Jetzt bestellen'}/>
                              </div>
                        </div>

          </div>

      </div>


      <div className='section2' style={{ ...styles.smallSection, ...{ flexDirection: 'column', justifyContent: 'space-evenly', flexWrap: 'no-wrap'  }}}>
              
        <div className='rowToColumn' style={{ width: "100%", display: 'flex', flexDirection: 'row'}}>

        
          <div className='fiftyPercent' style={{...styles.fiftyPercentLeft, ...{paddingTop: 30, paddingBottom: 50}}}>
           
           <div style={{...styles.thirdyPercent, ...{display: 'flex', alignItems: 'center', justifyContent: 'center'}}}>
            <img src={require('./images/genussnetz logo 1.png')} style={{ aspectRatio: 2}} alt='genustnetz'/>
           </div>

          </div>
          <div className='fiftyPercent' style={{...styles.fiftyPercentRight, ...{}}}>
            <div style={{...styles.thirdyPercent, ...{}}}>
              
              <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 70, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  Metzgerei Brath ist Mitglied <br/>
                  im Genussnetzwerk
              </div>
              <div style={{ width: "100%", display: 'flex', justifyContent: 'center', marginBottom: 10}}>
                <RedPressable setModal={setModalState} color={colors.redButtons} props={'Gehen zu site'}/>
              </div>

            </div>
        </div>
        
      </div>
      
      <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>

        <HorizontalSpacer/>

      </div>

      </div>


      <div className='section2' style={{ ...styles.smallSection, ...{ flexDirection: 'column', justifyContent: 'space-evenly', }}}>
        <div className='rowToColumn' style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div className='fiftyPercent' style={{...styles.fiftyPercentLeft, ...{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}}>
            
            <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginBottom: 20 }}>
                  Auszeichnungen
              </div>
           
          </div>
          <div className='fiftyPercent' style={{...styles.fiftyPercentRight, ...{ display: 'flex', alignItems: 'center', flex: 2}}}>
            
            <div className='wrapAwards' style={{ width: "90%", marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 50, marginTop: 30, }}>
              {
                awardArray.map((e, i)=>(
                  <div className='awardContainer' key={i} style={{ maxWidth:"40%", margin: 10, display: 'flex', flexDirection: 'column', flex: 4,  }}>
                  <img src={(`${e.pic}`)} style={{ aspectRatio: 1}}  alt='i'/>
                  {/* <div style={{ width: "100%", backgroundImage: `url(${e.pic})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex', }}>
                      
                    </div> */}
                      {/* <img src={e.pic} alt='i' style={{width:"100%", height: "100%", zIndex: 1}}/> */}
                      <div style={{ fontSize: Height.current/50, marginTop: 15, paddingTop: 10, color: colors.almostWhite, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                          {e.name}
                      </div>
                  </div>        
                ))
              }
            </div>

          </div>
        </div>
        
        <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          <HorizontalSpacer/>
        </div>

      </div>


      <div style={{...styles.section , ...{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}}>
             <div style={{position: 'relative', zIndex: 2, fontSize: Height.current/60, marginTop: 15, marginBottom: 15, color: colors.almostWhite, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                Empfehlungs
             </div>
             <div style={{fontSize: Height.current/24, color: colors.white, fontWeight: 750, marginBottom: 25, }}>
                         Was die Leute über uns sagen   
              </div>

              <div style={{ width: "80%", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  {/* <button onClick={()=>{scroll('left')}} style={{height:"6%", aspectRatio: 1.5, backgroundColor: 'transparent', borderWidth: 0 }}>
                    <img src={require('./images/goLeft.png')}  style={{height:"100%", width:"100%"}} alt='left'/>
                  </button> */}
                
                <CommentSlider array={commentArray}/>

                  {/* <button onClick={()=>{scroll('right')}} style={{height:"6%", aspectRatio: 1.5, backgroundColor: 'transparent', borderWidth: 0 }}>
                    <img src={require('./images/goRight.png')}  style={{height:"100%", width:"100%"}} alt='left'/>
                  </button> */}
              </div>
            <div style={{ width:"50%", marginBottom: 20, marginTop: -60}}>
              <RedPressable setModal={setModalState} color={colors.redButtons} props={'Alle Berichte'}/>
              <br/>
            </div>              

      </div>

      <div className='footer' style={styles.footer}>
          <div className='alignText' style={{...styles.footerColumn, ...{alignItems: 'left'}}}>
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
          <div className='' style={styles.footerColumn}>
                  <img src={require('./images/logo.png')} style={{ aspectRatio: 1, }} alt='logo'/>
          </div>
          <div className='rowToColumn textSize'  style={{...styles.footerColumn, ...{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}}>
                <div style={{ width:"100%", fontSize: Height.current/50, color: colors.white, fontWeight: 250, marginTop: 2,  maxWidth: '90%', letterSpacing: 1, marginBottom: 10, display: 'flex', justifyContent: 'center'  }}>
                  Besuchen Sie uns auf:   
                </div>
                <img className='textSize' src={require('./images/Group 628 1.png')} style={{height:"30%", aspectRatio: 4.5, marginBottom: 10 }} alt='logo'/>

          </div>
      </div>
      <div className='bottomFooter footer' style={{ width: '100%', backgroundColor: colors.deepRed, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly'}}>
                <div style={{fontSize: Height.current/65, color: colors.almostWhite, fontWeight: 250, marginTop: 2, marginLeft: 0,  maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
                  © 2020 by Metzgerei Heiko Brath  GmbH, Deutschland                
                </div>
                <div style={{fontSize: Height.current/65, color: colors.almostWhite, fontWeight: 250, marginTop: 2, marginRight: 0,  maxWidth: '90%', letterSpacing: 1, marginBottom: 2,  }}>
                Code and design by: <button onClick={()=>{window.location.href = 'https://www.studiopresent.rs/';}} style={{borderWidth: 0, backgroundColor: 'transparent', color: colors.white, fontSize:  Height.current/65, fontWeight: 100, textDecorationLine: 'underline'}}>StudioPresent</button>
                </div>
      </div>
      

    </div>
  )
}

