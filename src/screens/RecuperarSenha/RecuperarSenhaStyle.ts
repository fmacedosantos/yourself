import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#373435",
  },
  boxTop: {
    height: Dimensions.get("window").height / 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    paddingHorizontal: 37,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
  },
  titleInput: {
    marginLeft: 10,
    color: "white",
    marginTop: 20,
    fontSize: 16,
  },
  BoxInput: {
    width: "60%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    backgroundColor: "white",
  },
  input: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  buttonEntrar: {
    width: "60%",
    height: 40,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonEntrarText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  voltarLogin: {
    fontSize: 18,
    color: "orange",
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
