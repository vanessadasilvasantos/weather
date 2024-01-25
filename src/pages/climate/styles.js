import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptions: {
    justifyContent: "space-between",
    width: "92%",
    height: "6%",
    flexDirection: "row",
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
  descriptionText: {
    color: "#BFBFD4",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 10,
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
  valueDesc: {
    color: "#FAFAFA",
  },
  descName: {
    flexDirection: "row",
  },
  textDay: {
    color: "#BFBFD4",
    fontSize: 14,
    fontWeight: "700",
  },
  tempMaxDay: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FAFAFA",
  },
  tempMinDay: {
    fontSize: 14,
    fontWeight: "700",
    color: "#7F7F98",
  },
  dayTemp: {
    flexDirection: "column",
    alignItems: "center",
    width: "10%",
  },
  week: {
    width: "89%",
    marginBottom: "20%",
    justifyContent: "center",
    backgroundColor: "#16161F",
    flexDirection: "row",
    padding: 10,
    borderRadius: 12,
    gap: 40,
  },
});
