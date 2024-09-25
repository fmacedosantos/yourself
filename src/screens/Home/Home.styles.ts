import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373435',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexGrow: 1, // Permite que o ScrollView cresça
  },
  verMais: {
    color: '#00AEEF',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  summaryContainer: {
    width: '100%', // Para cobrir toda a largura da tela
    justifyContent: 'flex-start',
    marginBottom: 10, // Mantém um espaço abaixo do SummaryStats
    paddingHorizontal: 0, // Removendo preenchimento lateral
  },
  titleContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 80, // Adiciona espaço acima do título
  },
});
