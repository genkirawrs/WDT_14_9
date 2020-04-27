import React from 'react';
  

class Bomb extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { 
	count:0 

    }
  }

  componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({
      count: this.state.count + 1
    })

  }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
	let bomb = 'tick';
        if(this.state.count % 2 === 0){
            bomb = 'tick';
        }

        if(this.state.count %2 !== 0){
	    bomb = 'tock';
        }

        if(this.state.count >= 8 ){
	    bomb = 'boom!';
            clearInterval(this.interval)
        }
    return (
      <div>
        <p>{bomb}</p>
      </div>
    )
  }
}

export default Bomb
