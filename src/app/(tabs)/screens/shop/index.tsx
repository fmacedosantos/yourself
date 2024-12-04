// src/screens/shop/index.tsx
import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { SummaryStats } from "@/src/components/summaryStats";
import LoadingScreen from "@/src/components/loadindScreen";
import { buyItem, carregarResumoEstatisticas, getAllItems } from "@/src/services/api/user";
import { Title } from "@/src/components/title";
import { Item } from "@/src/components/item";
import { MessageAlert } from "@/src/components/messageAlert";

interface ResumoEstatisticas {
  ofensiva: number;
  pontos: number;
}

interface ItemLoja {
  id: string;
  icone: string;
  nome: string;
  preco: number;
}

export default function Shop() {
  const [resumoEstatisticas, setResumoEstatisticas] = useState<ResumoEstatisticas>({
    ofensiva: 0,
    pontos: 0,
  });

  const [itens, setItens] = useState<ItemLoja[]>([]); 
  const [loading, setLoading] = useState(true);
  
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<1 | 2>(2);
  const [itemIdToBuy, setItemIdToBuy] = useState<string | null>(null);
  const [itemPriceToBuy, setitemPriceToBuy] = useState<number | null>(null);

  useEffect(() => {
    async function carregarDados() {
      await carregarResumoEstatisticas(setResumoEstatisticas);
      await getAllItems(setItens); // Carrega os itens da loja
      setLoading(false);
    }
    carregarDados();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  async function handleTouchItem(name: string, id:string, price: number) {
    setType(2);
    setItemIdToBuy(id);
    setitemPriceToBuy(price);
    setVisible(true);
    setMessage(`Deseja comprar \"${name}\" por ${price} pontos?`); 
  }

  async function handleBuyItem() {
    if (itemIdToBuy && itemPriceToBuy) {
      const response = await buyItem(itemIdToBuy, itemPriceToBuy);
      if (response.success) {
        setItens(itens.filter((item) => item.id !== itemIdToBuy)); // não funciona ainda
        setVisible(false);
      } else {
        setType(1);
        setMessage(response.message || "Erro ao comprar o item.");
      }
      setItemIdToBuy(null); 
      setitemPriceToBuy(null); 
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SummaryStats
          ofensiva={resumoEstatisticas.ofensiva}
          pontos={resumoEstatisticas.pontos}
        />
        <Title
          title="Loja de itens"
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {itens.length === 0 ? (
          <Text style={styles.noItemsText}>Nenhum item disponível...</Text>
        ) : (
          itens.map((item) => (
            <Item
              key={item.id}
              icon={item.icone + ".png"}
              name={item.nome}
              price={item.preco}
              action={() => handleTouchItem(item.nome, item.id, item.preco)}
            />
          ))
        )}
      </ScrollView>
      <MessageAlert
        type={type}
        message={message}
        visible={visible}
        onConfirm={() => handleBuyItem()}
        onCancel={() => setVisible(false)}
        confirmText="Comprar"
      />
    </View>
  );
}
