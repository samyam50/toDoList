import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Item Field
const Item = ({
  item,
  deleteItem,
  itemChecked,
  checkedItems,
}) => {
  // Mark item as checked if in list
  const checked = checkedItems.filter(
    checkedItem => checkedItem.id === item.id,
  );
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text
          style={
            checked.length ? styles.checkedItemText : styles.listItemText
          }>
          {item.text}
        </Text>
        <View style={styles.iconView}>
          <Icon
            name="check"
            size={30}
            color="green"
            onPress={() => itemChecked(item.id, item.text)}
          />

          <Icon
            name="remove"
            size={30}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          />
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#202021',
    borderBottomWidth: 1,
    borderColor: '#202021',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    color: 'white'
  },
  checkedItemText: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 100,
  },
});

export default Item;