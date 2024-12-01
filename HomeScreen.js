import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Керуйте своїми замовленнями легко!</Text>
      <Button
        title="Список замовлень"
        onPress={() => navigation.navigate('Orders')}
        color="#8d6e63"
      /> 
      <Button
        title="Додати нове замовлення"
        onPress={() => navigation.navigate('AddOrder')}
        color="#8d6e63"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#5d4037',
  },
});

export default HomeScreen;
