import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
        top: "10%",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    cardContainer: {
        width: 350,
        alignSelf: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    name: {
        fontSize: 24,
    },
})

export default styles;
