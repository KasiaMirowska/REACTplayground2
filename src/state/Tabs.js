import React from 'react';

export default class Tabs extends React.Component {
    static defaultProps = {
       tabs: [],
    }
   
    state = {
       currentTabIndex: 0,
    }

    handleButtonClick = (index)=> {
        this.setState({
            currentTabIndex: index,
        }) 
      }
    
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
      }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
        <div className='current-tab'>
            {currentTab.content}
        </div>
        )
    }
    
    render(props){
        console.log(props);
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
    
}