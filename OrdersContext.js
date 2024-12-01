import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const storedOrders = await AsyncStorage.getItem('orders');
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      } else {
        setOrders([]);
      }
    };
    loadOrders();
  }, []);

  const addOrder = async (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const deleteOrder = async (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
    await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const updateOrder = async (updatedOrder) => {
    const updatedOrders = orders.map(order =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, deleteOrder, updateOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
