import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "#FAFAFA",
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 12,
    color: "#FAFAFA",
    marginBottom: "40%",
  },
  tempCity: {
    fontSize: 48,
    color: "#FFFFFF",
    fontWeight: "800",
    marginBottom: 15,
  },
  tempContainer: {
    position: "absolute",
    top: "5%",
    left: "14%",
    justifyContent: "center",
  },
  containerTemp: {
    flexDirection: "row",
    gap: 80,
  },
  imgTemp: {
    width: 100,
    height: 100,
  },
  maxMinTemp: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  descriptionTemp: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  containerDesc: {
    gap: 50,
    backgroundColor: "#16161F",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
    height: "35%",
    width: "89%",
    justifyContent: "center",
    alignItems: "center",
  },
  week: {
    width: "89%",
    marginBottom: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16161F",
    flexDirection: "row",
    padding: 10,
    borderRadius: 12,
  },
});
