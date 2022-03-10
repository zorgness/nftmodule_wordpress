import ProgressBar from "@ramonak/react-progress-bar";
import '../styles/RarityBar.css'
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




const RarityBar = ({metadata}) => (
    
       

        <div style={styles.rarity_}>

        <div style={styles.progressStep}>
            <div style={styles.text}>COMMON</div>
            <div style={styles.text}>UNCOMMON</div>
            <div style={styles.text}>RARE</div>
            <div style={styles.text}>EPIC</div>
            <div style={styles.text}>LEGENDARY</div>
        </div>

        <div style={styles.progressBar}>

            
        
            <ProgressBar
             completed={100 - parseInt((rarityTotal(metadata)))}
             isLabelVisible={false}
             ariaValuemin={0}
             ariaValuemax={100}
             height='40px'
            //  bgColor={'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 25%, rgba(252,176,69,1) 75%, rgba(56,253,29,1) 100%)'}
             bgColor={'#bd3535'}
             baseBgColor={'transparent'}
             transitionDuration= '2s'
             transitionTimingFunction= 'linear'
             animateOnRender={true} 
             
              />


        </div>

        <div style={styles.step}>
            <div style={styles.text}>|</div>
            <div style={styles.text}>|</div>
            <div style={styles.text}>|</div>
            <div style={styles.text}>|</div>
            
            
        </div>
        
        </div>

    

    
)



const styles = {
    
    step: {
        display: "flex",
        justifyContent: "space-around",
        top: -47,
        position: 'relative',
        fontSize: 40

    },
    progressStep: {
        display: "flex",
        justifyContent: "space-between",
        

    },
    text: {
        fontFamily:'Times New Roman, Times, serif',
        color: 'white'
    },

    rarity_: {
        margin: 40,
        
        
    },
    progressBar: {
        height: 40,
        border: "solid 1px white",
        borderRadius: 40
    }
  
}


   


export default RarityBar