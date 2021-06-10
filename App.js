import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import Item from './components/Item';
import AddItem from './components/AddItem';

const App = () => {

  // Initial Items 
  const [items, setItems] = useState([]);

  // Checked Items
  const [checkedItems, checkedItemChange] = useState([]);

  // Delete Item function
  const deleteItem = id => {
    // set items where id is not of the deleted one
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  // Add Item Function
  const addItem = text => {
    // If text field is empty return alert
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        { cancelable: true },
      );
    } else {
      // Add a new item with an id
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };


  // Check Item Function
  const itemChecked = (id, text) => {
    const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
    isChecked.length
      ? // Uncheck
      checkedItemChange(prevItems => {
        return [...prevItems.filter(item => item.id !== id)];
      })
      : // Check
      checkedItemChange(prevItems => {
        return [...prevItems.filter(item => item.id !== id), { id, text }];
      });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <View style={styles.space}></View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item
            item={item}
            deleteItem={deleteItem}
            itemChecked={itemChecked}
            checkedItems={checkedItems}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F2F'
  },
  space: {
    height: 30,
  }
});

export default App;