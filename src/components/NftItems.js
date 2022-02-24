import React, { Component } from 'react';
import  Attributes  from './Attributes';
import RarityItems from './RarityItems';
import '../styles/Attributes.css';
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

const bounceAnimation = keyframes`${slideInUp}`;

const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;

class NftItems extends Component {
    render() {
        
        let nft = this.props.nft[0]

        if(nft !== undefined) {
            
            if(nft.symbol !== "BC" && nft.name.includes("Bulliz Crew")) {
                return (
                    <div style={styles.error}>Not from our collection</div>
                )
            }
        
            return (
                <BouncyDiv>
                <div className='nft-info-container'>
    
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
                </BouncyDiv>
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
        backgroundColor: 'gray'
        
      },
      video : {
        padding: 20
        
      },
      images_container: {
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap"
      },
      error: {
          fontSize: 30,
          margin: 20,
          padding: 20
      },
      rarity_items_container: {
          display: "flex",
          justifyContent: "center",
      }
      
   
}
       

export default NftItems