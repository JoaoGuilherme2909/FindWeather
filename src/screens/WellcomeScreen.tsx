import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import numb from "../assets/imgs/numb.png";

export default function({ navigation } : any){
  return(
    <>
        <View style={styles.container}>
            {/*imagem*/}
            <Image source={numb} style={styles.numbImage}/>
            {/* Texto Principal */}
            <Text style={styles.title} >Descubra o clima na sua cidade</Text>
            {/* Texto secundário */}
            <Text style={styles.subTitle}>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão </Text>
            {/* Botão */}
            <TouchableOpacity onPress={()=> {navigation.navigate('HomeScreen')}}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Iniciar</Text>
                </View>
            </TouchableOpacity>
        </View>
    </>
  );  
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B1D22",
    },
    numbImage: {
        marginTop:"30%",
        width: 222,
        height: 214
    },
    title: {
        marginTop:"10%",
        fontFamily: "Overpass_600SemiBold",
        color: "#fff",
        fontSize: 33,
        lineHeight: 41,
        textAlign: "center",
    },
    subTitle: {
        marginTop: "10%",
        fontFamily: "Overpass_600SemiBold",
        color: "#AFAFAF",
        fontSize: 22,
        lineHeight: 27,
        textAlign: "center",
    },
    btn:{
        marginTop: "30%",
        borderColor: "#838384",
        borderWidth: 1,
        backgroundColor: "#23262B",
        alignItems: "center",
        justifyContent: "center",
        width: 328,
        height: 54,
        borderRadius: 18
    },
    btnText:{
        fontFamily: "Overpass_400Regular",
        fontSize: 24,
        color: "#fff"
    }
});
