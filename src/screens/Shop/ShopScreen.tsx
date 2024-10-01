// screens/ShopScreen.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Shop.styles';
import { SummaryStats } from '../../components/SummaryStats';
import ItemSection from '../../components/LojaComponents/ItemSection'; // Importe o novo componente

const ShopScreen = () => {
  // Itens para a seção de frutas
  const fruitItems = [
    { icon: require('../../../assets/icons/cenoura.png'), name: "Cenoura", cost: "30 XP" },
    { icon: require('../../../assets/icons/abacaxi.png'), name: "Abacaxi", cost: "75 XP" },
    { icon: require('../../../assets/icons/uva.png'), name: "Uva", cost: "75 XP" },
    { icon: require('../../../assets/icons/cenoura.png'), name: "Cenoura", cost: "30 XP" },
    { icon: require('../../../assets/icons/abacaxi.png'), name: "Abacaxi", cost: "75 XP" },
    { icon: require('../../../assets/icons/uva.png'), name: "Uva", cost: "75 XP" },
    { icon: require('../../../assets/icons/cenoura.png'), name: "Cenoura", cost: "30 XP" },
    { icon: require('../../../assets/icons/abacaxi.png'), name: "Abacaxi", cost: "75 XP" },
    { icon: require('../../../assets/icons/uva.png'), name: "Uva", cost: "75 XP" },
    { icon: require('../../../assets/icons/cenoura.png'), name: "Cenoura", cost: "30 XP" },
    { icon: require('../../../assets/icons/abacaxi.png'), name: "Abacaxi", cost: "75 XP" },
    { icon: require('../../../assets/icons/uva.png'), name: "Uva", cost: "75 XP" },
  ];

  // Itens para a seção de roupas (adicione seus próprios ícones)
  const clothingItems = [
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Camiseta", cost: "50 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Calça", cost: "100 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Camiseta", cost: "50 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Calça", cost: "100 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Camiseta", cost: "50 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Calça", cost: "100 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Camiseta", cost: "50 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Calça", cost: "100 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Camiseta", cost: "50 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Calça", cost: "100 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Camiseta", cost: "50 XP" },
    { icon: require('../../../assets/icons/jaqueta.png'), name: "Calça", cost: "100 XP" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <SummaryStats />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Loja</Text>
      </View>

      {/* Seção de frutas */}
      <ItemSection title="Itens" items={fruitItems} />

      {/* Seção de roupas */}
      <ItemSection title="Personalizáveis" items={clothingItems} />
    </View>
  );
};

export default ShopScreen;
