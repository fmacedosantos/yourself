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
        placeholderTextColor="#aaa" // Placeholder color in light gray
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
    backgroundColor: '#fff', // White background
    padding: 15,
    borderRadius: 25, // Rounded borders
    fontSize: 16,
    color: '#000', // Black text color
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
  },
});
