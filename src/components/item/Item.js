/* @flow */
import React from 'react';
import './item.css';

const Item = ({ comment, command }: { comment: string, command: string }) => (
  <div className="item">
    <div className="comment">{`# ${comment}`}</div>
    <div className="command">{command}</div>
  </div>
);

Item.propTypes = {
  comment: React.PropTypes.string,
  command: React.PropTypes.string.isRequired
};

export default Item;
