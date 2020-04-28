import React from "react";
import './Accordion.css';


class Accordion extends React.Component {
  static defaultProps = { sections: [] };

  state = {
    currentSectionIndex: null
  };

  handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
  }

  renderSections() {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button type='button' onClick={() => this.handleButtonClick(index)}>{section.title}</button>
	{this.state.currentSectionIndex === index && this.renderContent()}	
      </li>
    ))
  }

  renderContent() {
    const currentSection = this.props.sections[this.state.currentSectionIndex]
    return (
      <p className='content'>
        {currentSection.content}
      </p>
    )
  }

  render() {
    return (
      <div>
	<ul className='accordion-list'>
        {this.renderSections()}
	</ul>
      </div>
    )
  }

}

export default Accordion;
