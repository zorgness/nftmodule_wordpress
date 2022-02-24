const rarityChart = require('../Data/raritychart.json')



const RarityAttributes = ({metadata}) => (


    <div >
            
    {rarityChart[metadata.trait_type].map(element => (
        metadata.value === element.name
        && metadata.value !== "None" 
        ? <div key={element.name} style={styles.rarityNumber}>{element.value[1]} %</div>
        : null 

    ))}
            
    </div>

)


const styles = {
    rarityNumber: {
        color: "yellow",
    }
}

    
export default RarityAttributes   