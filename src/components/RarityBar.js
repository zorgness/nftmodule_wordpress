import ProgressBar from "@ramonak/react-progress-bar";
import '../styles/RarityBar.css'
import styled, { keyframes } from 'styled-components';
import { slideInUp, tada, zoomIn, fadeIn } from 'react-animations';

const rarityChart = require('../Data/raritychart.json')

const slideAnimation = keyframes`${slideInUp}`;
const tadaAnimation = keyframes`${tada}`;
const zoomInAnimation = keyframes`${zoomIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;


const SlideDiv = styled.div`
  animation: 2s ${slideAnimation};
`;

const TadaDiv = styled.div`
  animation: 2s ${tadaAnimation};
`;

const ZoomInDiv = styled.div`
    animation: 10s ${zoomInAnimation};
`;

const FadeInDiv = styled.div`
    animation: 13s ${fadeInAnimation}
`;



function selectValue(value) {

        let res = "";
    
        if(value >= 1 && value <= 24) {
            res = "COMMON"
        }
        if(value >= 25 && value <= 49) {
            res = "UNCOMMON"
        }
        if(value >= 50 && value <= 69) {
            res = "RARE"
        }
        if(value >= 70 && value <= 89) {
            res = "EPIC"
        } 
        if(value >= 90 && value <= 99) {
            
            res = "LEGENDARY"
        } 
         
        return res
  
  }






function rarityTotal(data) {
    let type = [];
    let sum = [];
    let sumTotal = "";
    data.forEach(element => {
       type.push(element.trait_type) 
    });
    for(let i = 0; i < type.length; i++) {
    
        rarityChart[type[i]].forEach(element => {
            
            if(data[i].value === element.name && data[i].value !== "None") {
                sum.push(element.value[1])
            } 
        }) 
    }
    if(typeof(sum) !== undefined && sum.length > 0) {
      sumTotal = sum.reduce((a,b) => a + b);
      return (sumTotal / type.length).toFixed(2);

    } else {
      sumTotal = 1000;
      return (sumTotal / type.length).toFixed(2);
    }

}

const RarityLevel = styled.div`
        display: flex;
        justify-content: center;       
        color: white;
        font-size: 14px;
        
        @media (max-width: 600px) {
            display: flex;
            justify-content: flex-start; 
            font-size: 8px;
        }     
    
`



const RarityBar = ({metadata}) => (


    

        <div style={styles.rarity_} className="progressBar">

            {/* <FadeInDiv><ZoomInDiv><div style={styles.text}>{selectValue(100 - rarityTotal(metadata))}</div></ZoomInDiv></FadeInDiv> */}
            

        

        <div style={styles.progressBar}>

            
        
            <ProgressBar
             completed={100 - rarityTotal(metadata)}
             isLabelVisible={false}
             ariaValuemin={0}
             ariaValuemax={100}
             height='40px'
             bgColor={'#ab4d4d'}
             baseBgColor={'transparent'}
             borderRadius={10}
             transitionDuration= '2s'
             transitionTimingFunction= 'linear'
             animateOnRender={true} 
             
             
              />


        </div>

        <div style={styles.step}>
            <div style={styles.item0}>|</div>
            <div style={styles.item1}>|</div>
            <div style={styles.item2}>|</div>
            <div style={styles.item3}>|</div>
            
            
        </div>

        <div style={styles.progressStep} >
        <RarityLevel style={{width: '25%'}}>COMMON</RarityLevel>
        <RarityLevel style={{width: '25%'}}>UNCOMMON</RarityLevel>
        <RarityLevel style={{width: '20%'}}>RARE</RarityLevel>
        <RarityLevel style={{width: '20%'}}>EPIC</RarityLevel>
        <RarityLevel style={{width: '10%'}}>LEGENDARY</RarityLevel>
        </div>
        
        </div>

    

    
)



const styles = {
    
    step: {
        display: "flex",
        marginTop: -42,
        position: 'relative',
        fontSize: 44,
        color: 'white',
        

    },
    progressStep: {
        display: "flex",
        justifyContent: "space-between",
        margin: 20
        

    },
    text: {
        color: 'white',
        fontSize: 25,
        padding: 10,
        textAlign: 'center'
    },
    rarity_: {
        margin: 40,
        
        
    },
    progressBar: {
        height: 48,
        border: "solid 4px white",
        borderRadius: 10
    },
    item0: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '25%',
        // background: 'white',
        // border: 'solid 1px pink',
        
        
    },
    item1: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '25%',
        // background: 'white',
        // border: 'solid 1px green'
    },
    item2: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '20%',
        // background: 'white',
        // border: 'solid 1px blue'
    },
    item3: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '20%',
        // background: 'white',
        // border: 'solid 1px red'
    }
    


  
} 





   


export default RarityBar