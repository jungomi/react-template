import test from 'ava';
import { h } from 'preact';
import { shallow } from 'enzyme';
import Item from '../../src/components/item/Item.js';

test('has .item class name', t => {
  const item = shallow(<Item />);
  t.true(item.hasClass('item'));
});
