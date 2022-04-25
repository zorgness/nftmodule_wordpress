import '../styles/Attributes.css'
import RarityAttributes from './RarityAttributes'

const Attributes = ({elements}) => (
    <div  style={styles.attributesBox}>
      {elements.map(element => (
        
       element.value !== "None" 
       && element.trait_type !== "generation" 
       && element.trait_type !== "sequence" 
       ? <div style={styles.attributesItem} key={element.trait_type}>
           
               <div style={styles.attributesType}><strong>{element.trait_type}</strong><RarityAttributes metadata={element} /> </div>
              {element.value === "null" ? <div style={styles.attributesNull}>{element.value}</div>
               : <div style={styles.attributesValue}>{element.value}</div>} 
               
           
           </div>
        : null
      ))}
    </div>
  ); 


  const styles = {
    attributesBox: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap", 
    },
    attributesItem: {
      width: 200,
      margin: 10,
      padding: 10,
      backgroundColor: "#C3AD81FF",
      textTransform: "capitalize",
      borderRadius: 5,
      opacity: 0.8,
      border: 'solid white 1px'
  },
  attributesType: {
    display: "flex",
    justifyContent: "space-between",
    color: 'black'
  },
  attributesValue: {
    color: 'black'
  },
  attributesNull: {
    color: 'grey',
    
  }
  
  }

  export default Attributes