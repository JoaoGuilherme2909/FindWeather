import { Image, StyleSheet, Text, View } from "react-native";
import NotFound from "../../assets/imgs/notFound.png"

export default function(){
    return (
        <View>
            <Image style={styles.image} source={NotFound} />
            <Text style={styles.text}>OPS!</Text>
            <Text style={styles.text}>Não foi possível encontrar o local desejado!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        marginTop:"10%",
        width: 306,
        height: 257,
    },
    text:{
        fontFamily: "Overpass_600SemiBold",
        fontSize: 16,
        lineHeight: 20,
        color: "#AFAFAF",
        textAlign: "center"
    }
});