import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
 return (
  <View
  style={styles.container}
>
  <Text>Configurações</Text>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})