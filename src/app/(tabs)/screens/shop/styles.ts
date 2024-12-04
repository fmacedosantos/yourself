import { COLORS } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLORS.GRAY, 
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center", 
    paddingHorizontal: 20,
    paddingTop: 10, 
  },
  noItemsText: {
    color: COLORS.WHITE, 
    textAlign: 'center',
    fontSize: 16,
    marginTop: '35%', 
    fontFamily: 'Itim-Regular'
  }, 
});
