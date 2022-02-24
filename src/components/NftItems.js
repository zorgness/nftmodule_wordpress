import React, { Component } from 'react';
import  Attributes  from './Attributes';
import RarityItems from './RarityItems';
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


class NftItems extends Component {
    render() {
        
        let nft = this.props.nft[0]

        if(nft !== undefined) {
           
        
            return (
                <SlideDiv>{nft.symbol !== "BC" && !nft.name.includes("Bulliz Crew")
                ? <TadaDiv style={{display:"flex", justifyContent:"center"}}>
                     <div style={styles.error}>Not from our collection</div>
                </TadaDiv> 
                :<div className='nft-info-container'>
    
                    <div>
                        <h2>{nft.name}</h2>
                        <h3>{nft.symbol}</h3>
                    </div>

                    <div style={styles.images_container}>
                        <img src={nft.image} style={styles.image} alt="nft" />
                    

                        <video width="330" height="180" controls style={styles.video} >
                            <source src={nft.animation_url} type="video/mp4"/>
                        </video>
                    </div>

                    <div style={styles.rarity_items_container}>

                        <RarityItems metadata={nft.attributes} />

                    </div>

                    <div className='attributes-container'>
                        
                            <Attributes elements={nft.attributes} />

                    </div>

                </div>
         } </SlideDiv>
            );
        } 
        else {
            return (
                <div></div>
            )
        }
    } 

        }

const styles = {
    image: {
        width: 180,
        height: 180,
        margin:10,
        backgroundColor: 'gray'
        
        
      },
      video : {
        margin:10
        
      },
      images_container: {
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: 20
      },
      error: {
          fontFamily: "serial",
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
      }
      
   
}
       

export default NftItems