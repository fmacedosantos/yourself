import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GRAY,
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.RED,
  },
  label: {
    fontSize: 20,
    color: COLORS.WHITE,
    marginVertical: 5,
  },
  value: {
    fontSize: 18,
    color: COLORS.WHITE, 
    marginVertical: 5,
    padding: 8, 
    borderWidth: 1,
    borderColor: COLORS.WHITE, 
    borderRadius: 5, // Cantos arredondados
    width: '100%', // Para ocupar toda a largura disponível
  },
});
