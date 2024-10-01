// components/LojaComponents/ItemFrame.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ItemFrameProps {
  icon: any; // A imagem do ícone
  name: string; // Nome do item
  cost: string; // Custo do item
}

const ItemFrame: React.FC<ItemFrameProps> = ({ icon, name, cost }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemCost}>{cost}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100, // Definindo largura fixa para os itens
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemCost: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ItemFrame;
