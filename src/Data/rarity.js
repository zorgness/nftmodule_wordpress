let metadata =  require('../Data/0.json')
let rarityChart = require('../Data/raritychart.json')




let type = [];

metadata.attributes.forEach(x => {
    type.push(x.trait_type)
    
})


for(let i = 0; i < type.length; i++) {
    
    rarityChart[type[i]].forEach(el => {
        
        if(metadata.attributes[i].value === el.name && metadata.attributes[i].value !== "None" ) {
            console.log(metadata.attributes[i].value)
            console.log(el.value[1])
        }
        
    } )
    
    
}



