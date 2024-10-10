import { StyleSheet, Text, View } from "react-native";

export default function Shop() {
  return (
    <View
      style={styles.container}
    >
      <Text>Shop</Text>
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
