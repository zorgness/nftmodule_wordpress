import ReactSpeedometer from "react-d3-speedometer"
const rarityChart = require('../Data/raritychart.json')



function rarityTotal(data) {
    let type = [];
    let sum = [];
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

    const sumTotal = sum.reduce((a,b) => a + b);
    return (sumTotal / type.length).toFixed(2)

}

const RarityItems = ({metadata}) => (
    <div style={styles.rarity_items}>
        <h3>Rarity indice</h3>
        <h3 style={{color:"yellow"}}>{rarityTotal(metadata)} %</h3> 

        <div>
            

  <ReactSpeedometer
    minValue ={100}
    maxValue ={0}
    value={parseInt((rarityTotal(metadata)))}
    currentValueText=" "
    customSegmentLabels={[
      {
        text: "Very Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Ok",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "Good",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Very Good",
        position: "INSIDE",
        color: "#555",
      },
    ]}
  />
        </div>

    </div>

    
)
    

const styles = {
    rarity_items: {
        width: "auto",
        backgroundColor: "black",
        color: "white",
        borderRadius: 20
    
        
    }
}


   


export default RarityItems