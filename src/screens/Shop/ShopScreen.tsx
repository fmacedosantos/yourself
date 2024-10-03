// screens/ShopScreen.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Shop.styles';
import { SummaryStats } from '../../components/SummaryStats';
import ItemSection from '../../components/LojaComponents/ItemSection'; // Importe o novo componente

const ShopScreen = () => {
  // Itens para a seção de frutas
  const fruitItems = [
{ icon: require('../../../assets/icons/cenoura.png'), name: "Cenoura", cost: "40 XP" },
{ icon: require('../../../assets/icons/abacaxi.png'), name: "Abacaxi", cost: "60 XP" },
{ icon: require('../../../assets/icons/uva.png'), name: "Uva", cost: "80 XP" },
{ icon: require('../../../assets/icons/morango.png'), name: "Morango", cost: "50 XP" },
{ icon: require('../../../assets/icons/pera.png'), name: "Pêra", cost: "90 XP" },
{ icon: require('../../../assets/icons/melancia.png'), name: "Melancia", cost: "100 XP" },
{ icon: require('../../../assets/icons/kiwi.png'), name: "Kiwi", cost: "55 XP" },
{ icon: require('../../../assets/icons/ameixa.png'), name: "Ameixa", cost: "70 XP" },
{ icon: require('../../../assets/icons/coco.png'), name: "Côco", cost: "85 XP" },
{ icon: require('../../../assets/icons/laranja.png'), name: "Laranja", cost: "95 XP" },
{ icon: require('../../../assets/icons/maracuja.png'), name: "Maracujá", cost: "110 XP" },
{ icon: require('../../../assets/icons/pessego.png'), name: "Pêssego", cost: "65 XP" },

  ];

  // Itens para a seção de roupas (adicione seus próprios ícones)
  const clothingItems = [
{ icon: require('../../../assets/icons/jaqueta.png'), name: "Jaqueta", cost: "120 XP" },
{ icon: require('../../../assets/icons/tenis.png'), name: "Tênis", cost: "80 XP" },
{ icon: require('../../../assets/icons/oculos.png'), name: "Óculos", cost: "60 XP" },
{ icon: require('../../../assets/icons/chapeu.png'), name: "Chapéu", cost: "90 XP" },
{ icon: require('../../../assets/icons/luvas.png'), name: "Luvas", cost: "50 XP" },
{ icon: require('../../../assets/icons/saia.png'), name: "Saia", cost: "70 XP" },
{ icon: require('../../../assets/icons/cachecol.png'), name: "Cachecol", cost: "40 XP" },
{ icon: require('../../../assets/icons/meias.png'), name: "Meias", cost: "30 XP" },
{ icon: require('../../../assets/icons/relogio.png'), name: "Relógio", cost: "110 XP" },
{ icon: require('../../../assets/icons/cinto.png'), name: "Cinto", cost: "55 XP" },
{ icon: require('../../../assets/icons/mochila.png'), name: "Mochila", cost: "130 XP" },
{ icon: require('../../../assets/icons/bermuda.png'), name: "Bermuda", cost: "95 XP" },

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
