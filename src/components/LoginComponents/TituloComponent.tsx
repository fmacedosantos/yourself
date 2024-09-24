// LogoComponent.tsx
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const TituloComponent: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>
        Y🔥ourself
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40, // Espaço embaixo do logo
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});
