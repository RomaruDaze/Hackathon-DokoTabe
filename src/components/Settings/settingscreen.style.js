import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: "5%",
    },

    card: {
        borderRadius: 10,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignSelf: 'center',
    },
    profileimage: {
        width: 150,
        height: 150,
        borderRadius: 75,
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
    },
    settingsSection: {
        width: '100%',
        alignItems: 'center',
    },
    settingItem: {
        backgroundColor: 'rgba(255, 165, 0, 0.5)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center',
    },
    settingText: {
        fontSize: 18,
        alignSelf: 'center',
    }
})

export default styles;
