import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

/**
 *
 * @param {string} label - Left Text
 * @param {string} value - Right Text
 */
export default function ListItem({label, value, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
