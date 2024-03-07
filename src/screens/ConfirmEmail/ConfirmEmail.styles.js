import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20
  },
  heading: {
    color: "darkorchid",
    fontSize: 38,
    fontWeight: "bold"
  },
  subHeading: {
    color: "grey",
    fontSize: 15,
    fontWeight: "600"
  },
  inputFormContainer: {
    flex: 0.75,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    gap: 10,
  },
  confirmInput: {
    padding: 25,
    height: 70,
    backgroundColor: "gainsboro",
    borderRadius: 15,
    color: "black"
  },
  confirmButton: {
    backgroundColor: "darkorchid",
    height: 70,
    alignItems: "center",
    borderRadius: 15,
    color: "black",
    justifyContent: "center",
    textAlignVertical: "center"
  },
  confirmButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  resendCodeButton: {
    backgroundColor: "gainsboro",
    height: 70,
    alignItems: "center",
    borderRadius: 15,
    color: "black",
    justifyContent: "center",
    borderColor: "darkorchid",
    borderStyle: "solid",
    borderWidth: 5
  },
  resendCodeButtonText: {
    color: "darkorchid",
    fontSize: 20,
    fontWeight: "bold"
  }
});
