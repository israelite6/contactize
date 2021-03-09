/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ListWithAvatar from '../../src/Components/ListWithAvatar';

it('ListWithAvatar component renders correctly', () => {
  const tree = renderer.create(<ListWithAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
