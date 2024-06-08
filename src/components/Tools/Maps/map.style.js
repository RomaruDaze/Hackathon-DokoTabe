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
    buttonImage: {
        width: 50,
        height: 50,
        borderRadius: 25,

    }
})

export default styles;
