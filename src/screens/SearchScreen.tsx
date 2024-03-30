import { View, StyleSheet, Text} from "react-native";
import Search from "../components/SearchScreen/Search";

export default function(){
    return(
        <View style={styles.container}>
            <Text style={styles.mainText}>Buscar</Text>
            <Search />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B1D22",
    },
    mainText:{
        margin: "15%",
        color: "white",
        lineHeight: 20,
        fontSize: 16,
        fontFamily: "Overpass_400Regular"
    }
});