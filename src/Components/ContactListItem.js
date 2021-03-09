import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import ListItem from './ListItem';
import ListWithAvatar from './ListWithAvatar';

/**
 *
 * @param {string} thumbnailPath - Photo url
 * @param {string} displayName - Contact name
 * @param {Object[]} phoneNumbers - List of numbers
 * @param {*} onPress - callback function when a number is selected
 */
export default function ContactListItem({
  thumbnailPath,
  displayName,
  phoneNumbers,
  onPress,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback((toggle) => {
    setIsOpen(toggle);
  }, []);

  const handlePress = useCallback(
    (number) => (event) => {
      onPress(number);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <View style={styles.root}>
      <ListWithAvatar
        source={thumbnailPath.length > 0 ? thumbnailPath : null}
        label={displayName}
        onChange={handleChange}
      />
      {isOpen && (
        <View style={styles.phoneNumbersContainer}>
          {phoneNumbers.map(({number, label}) => (
            <ListItem
              label={label}
              value={number}
              onPress={handlePress(number)}
            />
          ))}
        </View>
      )}
    </View>
  );
}

ContactListItem.propTypes = {
  thumbnailPath: PropTypes.string,
  name: PropTypes.string.isRequired,
  phoneNumbers: PropTypes.array.isRequired,
  onPress: PropTypes.func,
};

ContactListItem.defaultProps = {
  thumbnailPath: '',
  name: 'Israel Alegbeleye',
  phoneNumbers: [],
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
    paddingHorizontal: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  phoneNumbersContainer: {
    paddingLeft: 70,
  },
});
