import React from 'react';
import './item.css';

class Item extends React.Component {
  static propTypes = {
    comment: React.PropTypes.string,
    command: React.PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="item">
        <div className="comment">{`# ${this.props.comment}`}</div>
        <div className="command">{this.props.command}</div>
      </div>
    );
  }
}

export default Item;
