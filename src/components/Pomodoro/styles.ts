import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: { // fundo
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GRAY,
    padding: 16,
  },
  backButton: { // botão de sair
    position: 'absolute',
    top: 80,
    left: 20,
  },
  icon: { // icone
    height: '40%',
    width: '100%',
    resizeMode: 'center',
  },
  textTitle: { // texto Superior
    fontSize: 35,
    fontWeight: 'bold',
    color: COLORS.RED,
  },
  textTimer: { // contagem do timer
    fontSize: 25,
    marginTop: 10,
    color: COLORS.WHITE,
  },
  input: {// parte de colocar o tempo
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: COLORS.WHITE, 
  },
  count: {// contagem
    fontSize: 48,
    marginBottom: 20,
  },
  paragraph: {// paragrafo entre iniciar e resetar
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center', 
  },
});
