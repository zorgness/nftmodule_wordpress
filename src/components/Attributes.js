import '../styles/Attributes.css'
import RarityAttributes from './RarityAttributes'

const Attributes = ({elements}) => (
    <div className='attributes-box'>
      {elements.map(element => (
        
       element.value !== "None" 
       && element.trait_type !== "generation" 
       && element.trait_type !== "sequence" 
       ? <div className="attributes-item" key={element.trait_type}>
           
               <div className="attributes-type">{element.trait_type}</div>
               <div className="attributes-value">{element.value}</div>
               <RarityAttributes metadata={element} /> 
           
           </div>
        : null
      ))}
    </div>
  ); 

  export default Attributes