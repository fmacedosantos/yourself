// ButtonComponent.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isPrimary?: boolean; // Para diferenciar os estilos dos botões
}

export const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress, isPrimary = true }) => {
  return (
    <TouchableOpacity
      style={isPrimary ? styles.primaryButton : styles.secondaryButton}
      onPress={onPress}
    >
      <Text style={isPrimary ? styles.primaryButtonText : styles.secondaryButtonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#F7A800', // Cor semelhante ao amarelo/laranja
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
