import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Header
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

// Default Header
Header.defaultProps = {
  title: 'ToDo List',
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    padding: 5,
    backgroundColor: '#202021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 28,
    textAlign: 'center',
  },
});

export default Header;