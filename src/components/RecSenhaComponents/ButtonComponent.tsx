import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonComponentProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export function ButtonComponent({
  title,
  onPress,
  backgroundColor = "orange", // Cor padrão do botão
  textColor = "white", // Cor padrão do texto
}: ButtonComponentProps) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "60%",
    height: 40,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
