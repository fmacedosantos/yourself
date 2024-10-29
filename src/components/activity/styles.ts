import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    atividadeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      width: '90%',
      alignSelf: 'center',
      minHeight: 60,
    },
    pontosContainer: {
      backgroundColor: '#4A90E2',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    pontosText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily: 'Itim-Regular',
    },
    infoContainer: {
      flex: 1,
      marginLeft: 10,
    },
    tituloText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      fontFamily: 'Itim-Regular',
    },
    categoriaText: {
      fontSize: 14,
      color: '#777',
      fontFamily: 'Itim-Regular',
    },
    nivelContainer: {
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    nivelText: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Itim-Regular',
    },
  });