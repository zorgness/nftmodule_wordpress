import React, { Component } from 'react';
import NftInfoJson from '../API/Connection';
import NftItems from './NftItems';
import '../styles/SearchBar.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class SeachBar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nft : [],
            searchToken : '',
            
        }  
        this._searchTokenInputChanged = this._searchTokenInputChanged.bind(this)
        this._loadNftInfo = this._loadNftInfo.bind(this)  
    }

    
    _loadNftInfo(event) {
        event.preventDefault();
        if(this.state.searchToken.length === 44 ) {
            
            NftInfoJson(this.state.searchToken)
            .then(result => { 
                this.setState({
                    nft: [result.data],
                    
                })
            })
            this.setState({searchToken:''})   
        } else {
            
            this.setState({searchToken:''})
        } 
    }


    _searchTokenInputChanged(event) {
        this.setState({searchToken: event.target.value})
        
      }

      
     _resetInputField = () => {
            document.querySelector(".search-bar").value = '';
        };
    
    
    render() {
        
        return (
            
        <div>

        <form onSubmit={this._loadNftInfo} onClick={this._resetInputField} style={styles.form}>
        
            <input type="text" style={styles.field} className='search-bar' placeholder=' enter token address'  onChange={this._searchTokenInputChanged} />
        
            <input type="submit" style={styles.button} className='search-button' value="CHECK RARITY"/>

        </form>

         <div> <NftItems nft={this.state.nft}/> </div> 

       
        </div>
   
        );
    }
}

const styles = {
    loader_container: {
        display: "flex",
        justifyContent: "center"
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 20,
        rowGap: 10,
        columnGap: 10

    },
    field: {
        
        fontSize: 20,
        color: 'white',
        width: 500,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'transparent',
        // border: 'solid white 1px',
        // padding: 10
        
      },
      button: {
        //   margin: 10,
        // fontSize: 20,
        // height: 40,
        // background: 'grey',
        // color: 'white',
        // border: 'solid white 4px'
      }
}

export default SeachBar