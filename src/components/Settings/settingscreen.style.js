import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        height: 700,
    },
    body: {
        padding: 20,
    },
    card: {
        borderRadius: 10,
        backgroundColor: "orange",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    profileimage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "white",
    },
    carddesc: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    profname: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
    profemail: {
        fontSize: 15,
        alignSelf: "center",
    }
})

export default styles;

