/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Startup from '../../src/Containers/Startup/Index';

it('Startup container renders correctly', () => {
  const tree = renderer.create(<Startup />).toJSON();
  expect(tree).toMatchSnapshot();
});
