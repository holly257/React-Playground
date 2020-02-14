import React from 'react';
import { render } from '@testing-library/react';

class Accordion extends React.Component {
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index}>
            {tab.name}
          </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[0]
        return (
          <li className='content'>
            {currentTab.content}
          </li>
        )
      }
    
      render() {
        return (
          <ul>
            {this.renderButtons()}
            {this.props.sesctions.length && this.renderContent()}
          </ul>
        )
    }
}


export default Accordion;