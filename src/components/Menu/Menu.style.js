import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 20,
        marginLeft: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
    item: {
        width: "80%",
        height: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        margin: 10,
        flexDirection: "row",
        alignContent: "flex-start",
    },
    itemimage: {
        width: 80,
        height: 80,
    },
    itemInfo: {
        flex: 1,
        justifyContent: "center",
        marginLeft: "10%",
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    itemPrice: {
        fontSize: 16,
    },
})

export default styles;
