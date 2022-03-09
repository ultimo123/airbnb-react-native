import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  adultsText: {
    fontWeight: "bold",
  },
  agesText: {
    color: "#8d8d8d",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#676767",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  counter: {
    fontSize: 20,
    color: "#ddd",
  },
});

export default styles;
