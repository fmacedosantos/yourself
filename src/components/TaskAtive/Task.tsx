import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './Task.style';

export function Task({ route, navigation }: any) {
  const { title, description, difficulty, category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Tarefa</Text>

      <Text style={styles.label}>Título:</Text>
      <Text style={styles.value}>{title}</Text>

      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.value}>{description}</Text>

      <Text style={styles.label}>Nível de Dificuldade:</Text>
      <Text style={styles.value}>{difficulty}</Text>

      <Text style={styles.label}>Categoria:</Text>
      <Text style={styles.value}>{category}</Text>

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
