import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;  // Nova propriedade para o valor do campo
  onChangeText: (text: string) => void;  // Nova função para manipular a mudança de texto
}

export const InputComponent: React.FC<InputProps> = ({ 
  placeholder, 
  secureTextEntry = false, 
  value, 
  onChangeText 
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa" // Placeholder cinza claro
        secureTextEntry={secureTextEntry}
        value={value}  // Bind do valor
        onChangeText={onChangeText}  // Manipulador de mudança de texto
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20, // Mesma margem inferior do login
    width: '100%', // Mesma largura dos inputs da tela de login
  },
  input: {
    backgroundColor: '#fff', // Fundo branco como na tela de login
    height: 50, // Mesma altura dos inputs da tela de login
    borderRadius: 25, // Borda arredondada
    paddingHorizontal: 20, // Espaçamento interno
    fontSize: 16,
    color: '#000', // Texto preto
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
