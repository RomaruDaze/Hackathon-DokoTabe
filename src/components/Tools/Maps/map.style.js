import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    marker: {
        height: 20,
        width: 20,
        backgroundColor: "blue",
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    markershop: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        borderRadius: "50%",
        borderWidth: 4,
        borderColor: "white",
    },

    mapview: {
        flex: 1
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    callout: {
        minWidth: 140,
        padding: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    picker: {
        position: "absolute",
        left: "50%",
        top: -50,
        transform: [{ translateX: -75 }],
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerButton: {
        height: 150,
        width: 150,

    }
})

export default styles;
