import { View, Image, Text, StyleSheet } from "react-native";

export default function({ image, valor, dado } : any){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.valor}>
                {valor}
            </Text>
            <Text style={styles.dado}>
                {dado}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center", 
    },
    image:{
        width: 32,
        height: 32
    },
    valor:{
        fontFamily:"Overpass_700Bold",
        fontSize: 16,
        lineHeight: 20,
        color: "white"
    },
    dado:{
        fontFamily:"Overpass_300Light",
        fontSize: 14,
        lineHeight: 17,
        color: "#7E7E7E"
    }
});