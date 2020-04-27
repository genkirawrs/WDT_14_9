import React from 'react';


class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { who:'world' }
  }

  handleButtonClick(who) {
    this.setState({ who: who })
  }

  render() {
    return (
      <div>
	<p>Hello,  {this.state.who}!</p>
	<button onClick={ () => this.handleButtonClick('friend')} >friend</button>
        <button onClick={ () => this.handleButtonClick('world')} >world</button>
        <button onClick={ () => this.handleButtonClick('React')} >React</button>
      </div>
    )
  }
}

export default HelloWorld
