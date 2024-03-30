import { Image, StyleSheet, Text, View } from "react-native";

export default function({ temp, icon, hour } : any){
    return (
        <View style={styles.container}>
            <Text style={styles.temp}>{temp}</Text>
            <Image style={styles.image} source={icon}/>
            <Text style={styles.hour}>{hour}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 3,
        backgroundColor:"#33383E",
        alignItems:"center",
        borderWidth: 3,
        borderColor: "#4D4D4D",
        borderRadius: 16,
        
    },
    image:{
        width: 64,
        height: 64
    },
    temp:{
        fontFamily:"Overpass_700Bold",
        fontSize: 18,
        lineHeight: 22,
        color: "white"
    },
    hour:{
        color: "#AFAFAF",
        fontSize: 12,
        lineHeight: 15,
        fontFamily: "Overpass_700Bold"
    }
});