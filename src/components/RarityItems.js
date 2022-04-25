import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

const rarityChart = require('../Data/raritychart.json')



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

const RarityItems = ({metadata}) => 
(
    <div style={styles.rarity_items}>
          <div style={styles.text}><h3 style={styles.text}>RARITY</h3></div>     
          
          <div style={{width: 150, position: 'relative'}}>
         

        <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 100 - rarityTotal(metadata) : 0;
              return (
                <CircularProgressbarWithChildren
                value={percentage} 
                minValue={0} 
                maxValue={100} 
                // text={<tspan dy={needDominantBaselineFix ? 15 : 0}>{rarityTotal(metadata) == 100.00 ? '0 %' : `${Math.round(rarityTotal(metadata))}%`}</tspan>}
                styles={buildStyles({
                 pathColor: `rgba(195, 173, 129, ${100 - rarityTotal(metadata)})`,
                 textColor: 'white',
                 trailColor: 'white',
                 backgroundColor: 'grey"',
                 pathTransitionDuration: 1.5,
             
                
               })}
              >
                <div  style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              marginTop: '-10%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}><h3 style={styles.text2}>{rarityTotal(metadata) == 100.00 ? '0 %' : `${rarityTotal(metadata)} %`}</h3></div>
                </CircularProgressbarWithChildren>
                
              );
            }}
          </VisibilitySensor>
         
         
          </div>
          <div style={styles.text}><h3 style={styles.text}>SCORE</h3> </div>

     
    </div>

    
)
    

const styles = {
    rarity_items: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "auto",
        
        
    
        
    },

    text: {
      // fontFamily:'Times New Roman, Times, serif',
      margin: 10,
      fontSize: 25,
      color: 'white'

    },
    text2: {
      // fontFamily:'Times New Roman, Times, serif',
      fontSize: 25,
      color: 'white',
      
      // top: -12

    }
}


   


export default RarityItems