import { StyleSheet, View, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function () {
    return (
        <View>
        <View style={styles.topText}>
                <Ionicons name="location" color="white" size={32} />
                <Text style={styles.title}>
                    Várzea Grande
                </Text>
            </View>
            <Text style={styles.subtitle}>Domingo, 01 Jan de 2023</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    topText:{
        marginTop: "10%",
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        lineHeight: 22,

        fontFamily: "Overpass_600SemiBold",
        color: "white"
    },
    subtitle: {
        color: "#AFAFAF",
    }
});