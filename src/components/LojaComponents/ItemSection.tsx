// components/LojaComponents/ItemSection.tsx
import ItemFrame from './ItemFrame';
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

interface ItemSectionProps {
  title: string; // Título da seção
  items: { icon: any; name: string; cost: string }[]; // Array de itens
}

const ItemSection: React.FC<ItemSectionProps> = ({ title, items }) => {
  return (
    <View style={styles.sectionContainer}>
      {/* Título da seção com espaçamento */}
      <Text style={styles.sectionTitle}>{title}</Text>
      
      {/* ScrollView horizontal */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemWrapper}>
            <ItemFrame icon={item.icon} name={item.name} cost={item.cost} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20, // Adiciona espaço à esquerda e à direita
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  itemWrapper: {
    marginRight: 10, // Espaço entre os itens
  },
});

export default ItemSection;
