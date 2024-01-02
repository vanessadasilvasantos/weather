import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
    position: "relative",
  },
  descriptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityName: {
    color: "#FAFAFA",
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 12,
    color: "#FAFAFA",
    marginBottom: 150,
  },
  tempCity: {
    fontSize: 48,
    color: "#FFFFFF",
    fontWeight: "800",
    marginBottom: 15,
  },
  containerTemp: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 100,
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
    fontSize: 14,
    borderLeftWidth: 1,
    fontWeight: "700",
    marginLeft: 10,
    paddingRight: 180,
  },
  containerDesc: {
    gap: 50,
    backgroundColor: "#16161F",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: "center",
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
  },
  week: {
    backgroundColor: "#16161F",
    flexDirection: "row",
    padding: 10,
    borderRadius: 12,
    gap: 30,
  },
  tempContainer: {
    position: "absolute",
    top: 70,
    left: 60,
    padding: 10,
    marginBottom: 50,
  },
});
