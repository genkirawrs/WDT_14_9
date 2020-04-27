import React from 'react';
  

class RouletteGun extends React.Component {
  constructor(props) { 
    super(props) 
    this.state = { 
        chamber: null,
	spinningTheChamber: false
    }
  } 


  handleButtonClick() {
	
    this.setState({ spinningTheChamber: true })
	let timeout = setTimeout(this.spinGun, 2000);
  }

  spinGun = ()=>{
	let chamber = Math.ceil(Math.random() * 8);
    this.setState({
	spinningTheChamber: false,
	chamber: chamber
    })
  }

  render() {
	let result = '';
        if(this.state.spinningTheChamber === true){
            result = 'spinning the chamber and pulling the trigger! ...';
        }else if( this.state.spinningTheChamber === false && this.state.chamber === this.props.bulletInChamber){
		result = 'BANG!';
	}else if( this.state.spinningTheChamber === false && this.state.chamber !== this.props.bulletInChamber){
		result = 'you\'re safe!';
	}
    return (
      <div>
        <p>{result}</p>
	<button onClick={ () => this.handleButtonClick()} >Pull the trigger!</button>	
      </div>
    )
  }
}

export default RouletteGun
