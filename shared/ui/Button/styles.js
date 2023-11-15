import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  primary: {
    container: {
      borderWidth: 4,
      borderColor: "#ffd33d",
      borderRadius: 18,
    },
    button: {
      backgroundColor: "#fff",
    },
    buttonLabel: {
      color: "#25292e",
    },
  },
});

export default styles;
