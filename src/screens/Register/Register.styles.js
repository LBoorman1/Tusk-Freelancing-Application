import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
    },
    heading: {
        fontSize: 50,
        color: "darkorchid"
    },
    inputContainer: {
        backgroundColor: "white",
        flex: .6,
        alignSelf: "stretch",
        justifyContent: "space-evenly",
        gap: 5
    },
    input: {
        padding: 20,
        backgroundColor: "gainsboro",
        borderRadius: 15,
        height: 65,
    },
    loginSection: {
        flexDirection: "row",
        backgroundColor: "gainsboro",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        gap: 10
    },
    loginSectionText: {
        fontSize: 15
    },
    loginButton: {
        backgroundColor: "darkorchid",
        padding: 5,
        borderRadius: 10,
    },
    loginButtonText: {
        color: "white",
        fontSize: 15
    },
    signupButton:{
        backgroundColor: "darkorchid",
        padding: 25,
        width: 150,
        alignItems: "center",
        borderRadius: 20,
        margin: 10
    },
    signupButtonText: {
        color: "white",
        fontSize: 20
    }
})