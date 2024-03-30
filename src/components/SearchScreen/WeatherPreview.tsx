import { Image, StyleSheet, Text, View } from "react-native";

export default function({ temp, weather, weatherImg, local } : any){
    return(
        <View style={styles.container}>
            <View style={styles.topInfo}>
                <Text style={styles.temp}>{temp}</Text>
                <Image style={styles.image} source={weatherImg}/>
            </View>
            <Text style={styles.weather}>
                {weather}
            </Text>
            <Text style={styles.local}>
                {local}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: "#212428",
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 10
    },
    image:{
        width: 32,
        height: 32
    },
    temp:{
        fontSize: 30,
        lineHeight: 37,
        fontFamily: "Overpass_700Bold",
        color: "white"
    },
    weather:{
        fontSize: 18,
        lineHeight: 22,
        fontFamily: "Overpass_400Regular",
        color: "#AFAFAF"
    },
    local:{
        fontSize: 16,
        lineHeight: 22,
        fontFamily: "Overpass_400Regular",
        color: "white"
    },
    topInfo:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
});