import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 25
    },
    heading: {
        fontSize: 50,
        color: "darkorchid"
    },
    main: {
        flex: .75,
        backgroundColor:"white",
        alignSelf: "stretch",
        justifyContent: "space-evenly"
    },
    mainInput: {
        backgroundColor: "gainsboro",
        height: 70,
        padding: 15,
        borderRadius: 15
    },
    signInButton: {
        backgroundColor: "darkorchid",
        padding: 20,
        height: 90,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    signInButtonText: {
        color: "white",
        fontSize: 20
    },
    forgotPasswordButton: {
        backgroundColor: "gainsboro",
        padding: 20,
        height: 70,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    newAccount: {
        flexDirection: "row",
        backgroundColor: "gainsboro",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        gap: 10
    },
    newAccountButton: {
        backgroundColor: "darkorchid",
        padding: 5,
        borderRadius: 10,
    },
    newAccountButtonText: {
        color: "white",
        fontSize: 15
    }
})