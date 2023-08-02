import React from 'react'
import colors from './constants'
import {useRef} from 'react';
import RedPressable from './RedPressable';


export default function HomePage(props) {

  const Width = useRef(window.innerWidth);
  const Height = useRef(window.innerHeight);

  console.log('height: ', Height.current);
  console.log('width: ', Width.current);

  const foodArray = [
  {name: 'Würstchen', pic: require('./images/rachel-clark-MhI8HVjqJf8-unsplash.jpg')},
  {name: 'Hahnchen', pic: require('./images/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg')},
  {name: 'Schwein', pic: require('./images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg')},
  {name: 'Rind', pic: require('./images/luis-santoyo-IePWXTF3-0Y-unsplash.jpg')},
  ]

  const styles = {
  navButton: {
    height: "100%",
    width:"8%",
    backgroundColor: 'transparent',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: Height.current/70,
    borderWidth: 0,
    marginLeft: "2%",
    //display: 'flex',
    flexWrap: 'nowrap',
  },
  section: {
    height: Height.current/1.2,
    width: "100%",
    backgroundColor: colors.almostBlack,
    display: 'flex',
    flexDirection: 'row',

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
 
}

    
  return (
    <div style={{ height: Height.current/10, width: "100%", backgroundColor: 'transparent', }}>
      <div style={{ height: '75%', width: "100%",  justifyContent: 'center', alignItems: 'center', backgroundColor: colors.redNavBG, borderWidth: 0}}>
        <div style={{ height: "100%", width: "80%", flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', paddingLeft: 300, backgroundColor: colors.redNavBG, borderWidth: 0}}>
           
            <img src={require('./images/logo.png')} alt='logo' style={{position: 'absolute', height: Height.current/8, aspectRatio: 1, left: Width.current/12 , }}/>
           
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
              style={styles.navButton}>
                  <img src={require('./images/Frame.png')}  alt='pdf' style={{height: "30%", aspectRatio: 1, paddingRight: 10, }}/>

                     download 
            </button>
        </div>
    
      </div>
      <div style={{ height:'25%', width: "100%",  backgroundColor: colors.grey, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', }}>
        <img src={require('./images/clock.png')}  alt='clock' style={{height: "60%", aspectRatio: 1.2 }}/>
          <div style={{ height:'100%', width: "40%", display: 'flex', alignItems: 'center', marginLeft: 10,  backgroundColor: colors.grey, color: colors.white }}>

            Opentime:   Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30

         </div>
    
      </div>

      <div style={{height: Height.current/1.2, width:"100%", }}>
        
        <div style={{height: '50%', width:"35%", position: 'absolute', backgroundColor: '#00000050' ,  top: Height.current/4, display: 'flex', justifyContent: 'flex-end'}}>
          <div style={{height:'100%', width: '50%', }}>
            <div style={{color: colors.white, fontWeight: 750, fontSize: Height.current/25, display: 'flex', textAlign: 'left', justifyContent: 'flex-start', marginTop: 150, letterSpacing: 2  }}>
              Heiko Brath <br/>
              Metzgermeister
            </div>
            
            <div style={{color: colors.white, fontWeight: 300, fontSize: Height.current/50, maxWidth: '80%', display: 'flex', textAlign: 'left', justifyContent: 'flex-start', marginTop: 30, flexWrap: 'wrap', letterSpacing: 1  }}>
              Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.
            </div>
          </div>
        </div>

        <img src={require('./images/image 14.jpg')}  alt='boss' style={{height: "100%", width: "100%", }}/>
      </div>

      <div>
        
      </div>

      <div style={styles.section}>
        
        <div style={styles.fiftyPercentLeft}>
          <div style={styles.thirdyPercent}>
              <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 150}}>
                  Dry aged
              </div>
              <div style={{fontSize: Height.current/35, color: colors.white, fontWeight: 650, marginBottom: 70, }}>
                  Alte Wutz, Dry Aged
              </div>

              <div style={{color: colors.white, fontWeight: 300, fontSize: Height.current/50, maxWidth: '80%', display: 'flex', textAlign: 'left', justifyContent: 'flex-start', marginTop: 30, flexWrap: 'wrap', letterSpacing: 1  }}>
                Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.<br/><br/>
                id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
              </div>

              <RedPressable color={colors.redButtons} props={'Dry Aged'}/>
              <RedPressable color={colors.redButtons} props={'Alte Wurtz'}/>


          </div>
        </div>
        
        <div style={styles.fiftyPercentRight}>
            <div style={{...styles.thirdyPercent, ...{display: 'flex',  flexDirection: 'column', justifyContent: 'space-between', marginTop: 50,}}}>
                <div style={{ height: '65%', width: "100%",}}>
                 
                  <img src={require('./images/287e4a29fb95622355c7023ec0f765ff@2x 1.png')}  alt='meat1' style={{height: "100%", width: "100%", }}/>

                </div>

                <div style={{display: 'flex',  flexDirection: 'row', justifyContent: 'space-between', height: '30%', width:'100%',  }}>
                  
                  <img src={require('./images/93567ed87a1475783cc3a90355825a87@2x 1.png')}  alt='meat2' style={{height: "100%", width: "30%", }}/>

                  <img src={require('./images/d368bea5bcb8ed88cfcf994b7a518068@2x 1.png')}  alt='meat3' style={{height: "100%", width: "30%", }}/>

                  <img src={require('./images/1c78d243bd195e6ff002f8fdbc24e5d0@2x 1.png')}  alt='meat4' style={{height: "100%", width: "30%", }}/>

                </div>



            </div>
        </div>
      </div>
      
      <div style={{...styles.section, ...{ backgroundColor: colors.redButtons}}}>
        <div style={styles.fiftyPercentLeft}>
          <div style={styles.thirdyPercent}>
            <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 150, marginBottom: 100}}>
                 Buchen Sie den <br/>
                 Grillkurs jetzt
            </div>
            <ul style={{height: "30%", width: '60%'}}>
              <li style={styles.listItem}>professioneller Lehrer</li>
              <li style={styles.listItem}>ausgezeichneter Metzger</li>
              <li style={styles.listItem}>1 Tag</li>
              <li style={styles.listItem}>lernen Sie die Kunst des Grillens</li>

            </ul>

            <RedPressable color={colors.white} props={'Grillkurs'}/>


          </div>
        </div>
        
        <div style={styles.fiftyPercentRight}>
            
            <img src={require('./images/victoria-shes-UC0HZdUitWY-unsplash copy@2x 1.jpg')} style={{width: "100%", height: '100%'}} alt='raznjic'/>
        </div>

        
      </div>

      <div style={{...styles.section, ...{display: 'flex', alignItems: 'center', flexDirection: 'column' }}}>
        
        <div style={{fontSize: Height.current/22, color: colors.white, fontWeight: 750, marginTop: 150, marginBottom: 0}}>
                  Das Handwerk
        </div>

        <div style={{fontSize: Height.current/30, color: colors.white, fontWeight: 550, marginTop: 50, marginBottom: 50}}>
                  alles über unsere Hausgemachte Produkte
        </div>

        <div style={{fontSize: Height.current/60, color: colors.white, fontWeight: 350, marginTop: 50, maxWidth: '40%', letterSpacing: 1, textAlign: 'center', }}>
                  Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.
                 <br/><br/> Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart. <br/><br/>
                  id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior
        </div>

        <div style={{height:"10%", width: "30%"}}>
          <RedPressable color={colors.redButtons} props={'Das Handwerk'}/>
        </div>



       
      </div>
      <div style={{...styles.section, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <div style={{height: "10%", width: "60%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{height: 2, opacity: 1, width: '45%', backgroundColor: colors.grey}}></div>
            <img src={require('./images/Group1.png')} style={{height: "100%", aspectRatio: 1, }}/>
          <div style={{height: 2, opacity: 1, width: '45%', backgroundColor: colors.grey}}></div>
        </div>

          <div style={{height: "40%", width: "70%", marginTop: 250, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          {
            foodArray.map((e, i)=>(
              <div key={e.name} style={{height: "100%", width: "20%", }}>
                  <img src={e.pic} alt='i' style={{width:"100%", height: "100%"}}/>
                  <div style={{position: 'absolute', fontSize: Height.current/60, backgroundColor: '#00000050',  color: colors.white, height:"40%", width: "100%",  }}>
                     {e.name}
                  </div>
              </div>        
            ))
          }
        </div>

      </div>

      




    
    </div>
  )
}

