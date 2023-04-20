import React,{ Component }  from 'react';
import './App.css';
import Home from './Home';

class App extends Component {
  // state={
  //   profil:[
  //     {firstname:"fatma",lastname:"karkach"},
  //     {firstname:"fatma",lastname:"llll"},
  //     {firstname:"fatma",lastname:"ppppp"}
  //   ]
  // }
  // state={
  
  //   className:'green'
  // }
  state={
    style:{
      color:"red",
      fontSize:"50px"
    }
  }
  handlcolor=(e)=>{
    e.preventDefault()
    this.setState({
      className:'red'
    })
  }
 render(){
  return (
    <div className="App"> 
        <h1 style={{color:"blue"}}>sanlam maroc</h1>
        <h1 className={this.state.className}>my city is tangier</h1>
        <Home name="fatma" />
        {/* {this.state.profil.map((item,index)=>
    
        <li key={index}>{index}-{item.firstname}</li>
  
       )} */}
       {/* <button onClick={this.handlcolor}>clique me</button> */}
       <h1 style={this.state.style}>germany</h1>
    </div>
    
  );

 } 

}

export default App;
