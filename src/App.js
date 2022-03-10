import './App.css';
import SeachBar from './components/SeachBar';

function App() {
  return (
    <div style={styles.App}>
     {/* <h1 style={{fontFamily:"revert"}}>Find Your Nft's</h1> */}

     <SeachBar />
     
    </div>
  );
}


const styles = {
  App: {
    background: 'black',
    textAlign: 'center',
    
  }
}
export default App;
