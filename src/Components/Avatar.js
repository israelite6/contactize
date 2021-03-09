import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image} from 'react-native';

/**
 *
 * @param {string} source - Avatar url
 */
export default function Avatar({source, ...props}) {
  return (
    <View style={styles.root}>
      {source && (
        <Image
          source={source ? {uri: source} : null}
          resizeMode="contain"
          style={styles.root}
        />
      )}
    </View>
  );
}

Avatar.propTypes = {
  source: PropTypes.string,
};

Avatar.defaultProps = {
  source: null,
};

const styles = StyleSheet.create({
  root: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
