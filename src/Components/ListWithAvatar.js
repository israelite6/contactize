import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Avatar from './Avatar';

/**
 *
 * @param {string} label - Avatar directory
 */
export default function ListWithAvatar({source, label, onChange}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(
    (toggle) => () => {
      setIsOpen(toggle);
      onChange(toggle);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <TouchableOpacity style={styles.root} onPress={handleToggle(!isOpen)}>
      <Avatar source={source} />

      <Text style={styles.label}>{label}</Text>
      <Text style={{transform: [{rotate: isOpen ? '0deg' : '90deg'}]}}>^</Text>
    </TouchableOpacity>
  );
}

ListWithAvatar.propTypes = {
  source: PropTypes.string,
  label: PropTypes.string.isRequired,
};

ListWithAvatar.defaultProps = {
  source: null,
  label: 'Name',
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {paddingLeft: 10, flexGrow: 1},
});
