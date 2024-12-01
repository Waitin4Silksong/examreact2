import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { OrdersContext } from '../context/OrdersContext';
import { useNavigation } from '@react-navigation/native';

const ListScreen = () => {
  const { orders, deleteOrder } = useContext(OrdersContext);
  const navigation = useNavigation();

  const handleEdit = (order) => {
    navigation.navigate('Details', { order });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.clientName}>{item.name}</Text>
            <Text style={styles.clientPhone}>{item.phone}</Text>
            <Text style={styles.orderStatus}>{item.status}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item)}>
                <Text style={styles.buttonText}>Редагувати</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteOrder(item.id)}>
                <Text style={styles.buttonText}>Видалити</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB99',
    padding: 20,
  },
  orderCard: {
    backgroundColor: '#FFF1E1',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8B4513',
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clientPhone: {
    fontSize: 16,
    color: '#555',
  },
  orderStatus: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ListScreen;
