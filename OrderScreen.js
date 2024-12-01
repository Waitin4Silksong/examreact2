import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { OrdersContext } from '../context/OrdersContext';

const OrderScreen = ({ navigation }) => {
  const { addOrder } = useContext(OrdersContext);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Очікує');

  const handleAddOrder = () => {
    const newOrder = {
      id: Date.now(),
      name,
      phone,
      status,
    };
    addOrder(newOrder);
    navigation.navigate('Orders');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ім'я клієнта:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Телефон:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Додати замовлення" onPress={handleAddOrder} color="#8d6e63" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e3f2fd',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default OrderScreen;
