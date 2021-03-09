/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../../src/Components/ListItem';

it('ListItem component renders correctly', () => {
  const tree = renderer
    .create(<ListItem label="Mobile" value="Number" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
