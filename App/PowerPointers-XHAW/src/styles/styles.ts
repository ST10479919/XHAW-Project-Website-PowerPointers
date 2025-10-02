import { StyleSheet } from "react-native";

// Global styles

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 250,
        height: 250,
        padding: 10,
        marginLeft: 25,
    },

    groupButtons: {
        flexDirection: 'row',
        gap: 10,
    },

    button: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#4395d8ff",
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    },
});
