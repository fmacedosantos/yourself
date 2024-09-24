import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#373435", // Fundo da tela
    paddingHorizontal: 20, // Adiciona padding nas laterais
  },
  boxTop: {
    height: Dimensions.get("window").height / 5, // 1/5 da altura da tela para o logo
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 48, // Tamanho grande da fonte do título
    color: "white",
  },
  titleInput: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 15,
  },
  BoxInput: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: "white",
    fontSize: 16,
  },
  buttonEntrar: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F7A800", // Cor laranja/amarela do botão "Entrar"
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonEntrarText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonCadastrar: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "transparent", // Fundo transparente para o botão "Cadastrar"
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCadastrarText: {
    color: "white",
    fontSize: 18,
  },
  esqueceu: {
    fontSize: 14,
    color: "white",
    marginTop: 20,
  },
  senha: {
    color: "#F7A800", // Cor laranja/amarela para o link "senha"
    fontWeight: "bold",
  },
});
