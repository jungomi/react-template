/* @flow */
import { h } from 'preact';
import Item from './Item';

const items = [
  {
    id: 1,
    command: 'npm install',
    comment: 'Installs dependencies'
  },
  {
    id: 2,
    command: 'npm run dev',
    comment: 'Server with hot reload on http://localhost:8080'
  },
  {
    id: 3,
    command: 'npm run build',
    comment: 'Build app for production'
  }
];

const ItemList = () => {
  const itemNodes = items.map(it => {
    return <Item key={it.id} command={it.command} comment={it.comment} />;
  });
  return (
    <div className="item-list">
      {itemNodes}
    </div>
  );
};

export default ItemList;
