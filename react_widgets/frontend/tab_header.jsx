import React from 'react';

class TabHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  selected() {
    if (this.props.idx === this.props.currentTab) {

    }
  }

  render() {
    return(
      <h4>{ this.props.title }</h4>
    );
  }
}

export default TabHeader;
