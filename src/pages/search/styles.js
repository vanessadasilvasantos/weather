import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: 200,
    height: 32,
    top: 50,
    position: "absolute",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
  titleBlue: {
    fontWeight: "700",
    color: "#8FB2F5",
  },
  text: {
    color: "#BFBFD4",
    fontSize: 15,
    marginTop: 10,
  },
  search: {
    alignItems: "center",
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 360,
    height: 56,
    marginTop: 40,
    backgroundColor: "#1E1E29",
  },
  inputText: {
    color: "#FAFAFA",
    textAlign: "left",
    width: 311,
    height: 30,
  },
});
