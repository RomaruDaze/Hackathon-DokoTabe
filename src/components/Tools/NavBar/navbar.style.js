import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 50,
        height: 130,
        backgroundColor: 'orange',
        borderRadius: 10,
    },
    button: {
        backgroundColor: "white",
        height: 80,
        width: 80,
        borderRadius: 10,
        padding: 15,
        margin: 5,
    },
    image: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    }

})

export default styles;

