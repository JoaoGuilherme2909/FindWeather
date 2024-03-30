import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import WeatherHour from "./WeatherHour";

import sun from "../../../assets/imgs/sun.png";
import rainsun from "../../../assets/imgs/rainsun.png";
import numb from "../../../assets/imgs/numbMini.png";
import rain from "../../../assets/imgs/numbrain.png"

export default function(){
    return(
        <View style={{marginTop: 25}}>
            <View style={styles.top}>
                <Text style={styles.mainText}>Hoje</Text>
                <Text style={styles.textBtn}>Próximos 5 dias <Ionicons name="arrow-forward-sharp"/></Text>
            </View>
            <View style={styles.weatherHours}>
                <WeatherHour icon={rain} temp={"23º"} hour={"9:00"}/>
                <WeatherHour icon={numb} temp={"18º"} hour={"13:00"}/>
                <WeatherHour icon={sun} temp={"8º"} hour={"17:00"}/>
                <WeatherHour icon={rainsun} temp={"28º"} hour={"23:00"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    top:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    mainText:{
        color: "white",
        fontSize: 20,
        lineHeight: 25,
        fontFamily: "Overpass_400Regular"
    },
    textBtn:{
        color: "#AFAFAF",
        fontFamily: "Overpass_600SemiBold",
        fontSize: 16,
        lineHeight: 20
    },
    weatherHours:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    }
});