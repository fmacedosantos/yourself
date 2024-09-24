// InputComponent.tsx
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

export const InputComponent: React.FC<InputProps> = ({ placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa" // Cor do placeholder em cinza claro
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    backgroundColor: '#fff', // Cor de fundo branco
    padding: 15,
    borderRadius: 25, // Bordas arredondadas
    fontSize: 16,
    color: '#000', // Texto em preto
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
  },
});
