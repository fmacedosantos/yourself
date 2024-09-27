import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { styles } from './Home.styles';
import { TituloComponent } from '../../components/HistoricoComponents/TituloComponent';
import { SummaryStats } from '../../components/SummaryStats';
import { AtividadeComponent } from '../../components/HistoricoComponents/AtividadesComponent';

export function Home({ navigation }: any) {
  const [showMore, setShowMore] = useState(false);
  const [title, setTitle] = useState('Últimas atividades');

  const handleShowMore = () => {
    setShowMore(!showMore);
    setTitle(showMore ? 'Últimas atividades' : 'Histórico de atividades');
  };

  return (
    <View style={styles.container}>
      {/* SummaryStats ajustado com 100% de largura */}
      <View style={styles.summaryContainer}>
        <SummaryStats />
      </View>

      {/* Título dinâmico */}
      <View style={styles.titleContainer}>
        <TituloComponent title={title} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Atividades iniciais */}
        <AtividadeComponent minutos={40} nome="Node.js" nivel="II" corNivel="#F7A800" />
        <AtividadeComponent minutos={20} nome="React Native" nivel="I" corNivel="#5DB075" />
        <AtividadeComponent minutos={25} nome="HTML" nivel="I" corNivel="#5DB075" />

        {/* Botão "Ver mais" ou "Ver menos" controlado por showMore */}
        {showMore ? (
          <>
            {/* Atividades extras */}
            <AtividadeComponent minutos={55} nome="Spring Boot" nivel="III" corNivel="#FF5733" />
            <AtividadeComponent minutos={30} nome="CSS" nivel="I" corNivel="#5DB075" />
            <AtividadeComponent minutos={60} nome="JavaScript" nivel="II" corNivel="#F7A800" />
            <AtividadeComponent minutos={35} nome="TypeScript" nivel="II" corNivel="#F7A800" />
            <AtividadeComponent minutos={25} nome="Python" nivel="I" corNivel="#5DB075" />
            <AtividadeComponent minutos={12} nome="Ruby" nivel="I" corNivel="#5DB075" />
            <AtividadeComponent minutos={45} nome="Django" nivel="III" corNivel="#FF5733" />
            <AtividadeComponent minutos={38} nome="Go" nivel="II" corNivel="#F7A800" />
            <AtividadeComponent minutos={27} nome="PHP" nivel="I" corNivel="#5DB075" />
            <AtividadeComponent minutos={55} nome="C++" nivel="II" corNivel="#F7A800" />

            {/* Exibe o botão "Ver menos" abaixo das atividades extras */}
            <TouchableOpacity onPress={handleShowMore} style={styles.verMais}>
              <Text style={styles.verMais}>Ver menos</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={handleShowMore} style={styles.verMais}>
            <Text style={styles.verMais}>Ver mais...</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
