import './App.css';
import SeachBar from './components/SeachBar';

function App() {
  return (
    <div style={styles.App}>
     {/* <h1 style={{color:'white', fontSize: 40, textAlign:"center", margin:'10px'}}>RARITY CHECK</h1> */}

     <SeachBar />
     
    </div>
  );
}


const styles = {
  App: {
    background: 'transparent',
    
    
  }
}
export default App;
