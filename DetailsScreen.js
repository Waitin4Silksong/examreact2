import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { OrdersContext } from '../context/OrdersContext';

const DetailsScreen = ({ route, navigation }) => {
  const { order } = route.params;
  const { updateOrder } = useContext(OrdersContext); 

  const [name, setName] = useState(order.name);
  const [phone, setPhone] = useState(order.phone);
  const [status, setStatus] = useState(order.status);

  const handleSave = async () => {
    const updatedOrder = { ...order, name, phone, status };
    await updateOrder(updatedOrder); 
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ім'я клієнта"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Статус"
        value={status}
        onChangeText={setStatus}
      />
      <Button title="Зберегти" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
});

export default DetailsScreen;
