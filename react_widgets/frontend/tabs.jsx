import React from 'react';
import TabHeader from './tab_header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
    // this.click = this.click.bind(this);
  }

  click(idx) {
    return () => this.setState({ tabIndex: idx });
  }

  render() {
    return (
      <div className={ "tabs" }>
        <div className={ "tab-headers" }>
          {
            this.props.tabs.map( (obj, idx) => (
              <div onClick={ this.click(idx) }
                   className={ "tab-header" }>
                <TabHeader
                  key={ obj.title }
                  title = { obj.title }
                  idx = { idx }
                  currentTab = { this.state.tabIndex }
                />
            </div>
            ))

          }
        </div>

        <article className={ "tab-content" }>
          { this.props.tabs[this.state.tabIndex].content }
        </article>
      </div>
    );
  }
}

export default Tabs;
