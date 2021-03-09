/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ContactListItem from '../../src/Components/ContactListItem';

it('ContactListItem component renders correctly', () => {
  const tree = renderer.create(<ContactListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
