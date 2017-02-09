/* @flow */
import React from 'react';
import './item.css';

const Item = ({ comment, command }: { comment: string, command: string }) => (
  <div className="item">
    <div className="comment">{`# ${comment}`}</div>
    <div className="command">{command}</div>
  </div>
);

export default Item;
