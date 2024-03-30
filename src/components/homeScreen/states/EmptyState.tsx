import { View, Image, Text, StyleSheet } from "react-native"
import earth from "../../assets/imgs/earth.png";

export default function () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Find<Text style={styles.bold}>Weather</Text>
            </Text>
            <Image style={styles.earthImage} source={earth} />
            <Text style={styles.text}>Selecione aqui um local e encontre o clima em tempo real</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B1D22",
        justifyContent: 'space-evenly'
    },
    title: {
        fontFamily: "Overpass_400Regular",
        lineHeight: 41,
        fontSize: 33,
        color: "white"
    },
    bold: {
        fontFamily: "Overpass_600SemiBold"
    },
    earthImage: {
        width: 222,
        height: 214
    },
    text: {
        fontFamily: "Overpass_400Regular",
        color: "white",
        lineHeight: 27,
        fontSize: 22,
        textAlign: "center"
    }
});