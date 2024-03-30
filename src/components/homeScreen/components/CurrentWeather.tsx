import { StyleSheet, View, Image, Text } from "react-native";
import RainNumb from "../../../assets/imgs/raining.png";

export default function(){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={RainNumb}/>
            <Text style={styles.temp}>
                23º
            </Text>
            <Text style={styles.weather}>Chuva moderada</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
    },
    img:{
        marginTop: "10%",
        width: 250,
        height: 214
    },
    temp:{
        lineHeight: 96,
        fontSize: 76,
        fontFamily: "Overpass_700Bold",
        color: "white" 
    },
    weather:{
        lineHeight: 37,
        fontSize: 30,
        fontFamily: "Overpass_400Regular",
        color: "#AFAFAF" 
    }
});