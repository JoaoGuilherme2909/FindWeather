import { View, StyleSheet } from "react-native";
import { Divider } from '@rneui/themed';
import CardsInfo from "./CardsInfo";

import drop from "../../../assets/imgs/drop.png";
import wind from "../../../assets/imgs/wind.png";
import rainMini from "../../../assets/imgs/rainMini.png";


export default function(){
    return(
        <View style={styles.container}>
            <CardsInfo image={drop} valor={"24%"} dado={"umidade"}/>
            <Divider style={{marginRight: 15, marginLeft: 15}} orientation="vertical" />
            <CardsInfo image={wind} valor={"20km/h"} dado={"Veloc. Vento"}/>
            <Divider style={{marginRight: 15, marginLeft: 15}} orientation="vertical" />
            <CardsInfo image={rainMini} valor={"76%"} dado={"chuva"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderColor: "#4D4D4D",
        borderRadius: 18,
        flexDirection: "row",
        marginTop: 10,
        width: "90%",
        paddingHorizontal: 25,
        paddingVertical: 10,
        justifyContent: "space-between"
    }
});
