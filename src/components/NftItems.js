import React, { Component } from 'react';
import  Attributes  from './Attributes';
import RarityItems from './RarityItems';
import RarityBar from './RarityBar';
import NftModel from './NFTModel';
import '../styles/Attributes.css';
import styled, { keyframes } from 'styled-components';
import { slideInUp, tada } from 'react-animations';

const slideAnimation = keyframes`${slideInUp}`;
const tadaAnimation = keyframes`${tada}`

const SlideDiv = styled.div`
  animation: 2s ${slideAnimation};
`;

const TadaDiv = styled.div`
  animation: 2s ${tadaAnimation};
`;

const jsonModel = require('../Data/modele.json');

const Image = styled.img`

    width: 450px;
    height: 450px;
    
    background-color: 'gray';

    @media (max-width: 600px) {
        width: 350px;
        height: 350px;
    }
`


const Video = styled.video`
    width: 450px;   
    height: 450px;

    background-color: 'gray';
    
    @media (max-width: 600px) {
        width: 350px;
        height: 350px;
}

`
const ImageContainer = styled.div`
width: 450px;
height: 450px;
border: solid 20px rgba(0, 0, 0, 0.4);
border-radius: 20px;

@media (max-width: 600px) {
    width: 350px;
    height: 350px;
}
@media (max-width: 400px) {
    border: solid 20px rgba(0, 0, 0, .0);
}

`






class NftItems extends Component {
    render() {
        
        let nft = this.props.nft[0]

        if(nft !== undefined) {
           
        
            return (
                <div>{nft.symbol !== "BC" && !nft.name.includes("Bulliz Crew")
                ? <SlideDiv><TadaDiv style={{display:"flex", justifyContent:"center", textAlign:"center"}}>
                     <div style={styles.error}>Not from our Crew <br /> 凸( ಠ益ಠ)凸</div>
                </TadaDiv></SlideDiv> 
                :<div className='nft-info-container'>
    
                    {/* <div style={styles.text}>
                        <h2 style={styles.text}>{nft.name}</h2>
                        <h3 style={styles.text}>{nft.symbol}</h3>
                    </div> */}

                    <div style={styles.images_container}>
                        
                    <ImageContainer >

                        <Image src={nft.image}  alt="" />

                    </ImageContainer>



                    <ImageContainer >

                        <Video
                            controls
                            autoPlay
                            loop
                            src={nft.animation_url}
                            />  

                    </ImageContainer>

                    </div>

                    <div style={styles.rarity_items_container}>

                        <RarityItems metadata={nft.attributes} />

                    </div>

                    <div>

                        <RarityBar metadata={nft.attributes}/>

                    </div>

                    <div className='attributes-container'>
                        
                            <Attributes elements={nft.attributes} />

                    </div>

                </div>
         } </div>
            );
        } 
        else {
            return (
                
               
                   <NftModel metadata={jsonModel} />
               
            )
        }
    } 

        }

const styles = {
    
      video : {
        
        width: 450,
        maxWidth: '100%'
        
        
        
      },
      images_container: {
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: 20,
          gap: '10px 10px'
      },
      error: {
        //   fontFamily: "serial",
          fontSize: 30,
          margin: 100,
          padding: 20,
          width: 300,
          backgroundColor: "purple",
          color: "white",
          borderRadius: 20,
      },
      rarity_items_container: {
          display: "flex",
          justifyContent: "center",
      },
      text: {
        color: 'white',
        textAlign: 'center'

    }
      
   
}
       

export default NftItems