// Shop.styles.ts
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY,
    paddingBottom: 20, // Espaçamento inferior
  },
  summaryContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center', // Centraliza o conteúdo
  },
  titleContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 80, // Adiciona espaço acima do título
  },
  title: {
    fontSize: 30,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
