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
    backgroundColor: '#F7A800', // Laranja/Amarelo do botão de login
    height: 50, // Mesma altura do botão de login
    borderRadius: 25, // Borda arredondada
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', // Largura total
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', // Largura total
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
