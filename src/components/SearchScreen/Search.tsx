import { StyleSheet, TextInput, TouchableWithoutFeedback, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import NotFound from "./NotFound";
import WeatherPreview from "./WeatherPreview";
import numbMini from "../../assets/imgs/numbMini.png";

export default function () {

    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [country, setCountry] = useState("");
    const [cloud, setCloud] = useState("");
    const [condicion, setCondition] = useState("");

    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.container}>
                <View style={styles.searchArea}>
                    <Ionicons name="search-outline" size={32} color={"white"} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCity}
                        value={city}
                        placeholder="Digite o nome de uma cidade"
                        placeholderTextColor={"#fff"}
                    />
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.searchBtn}>
                        <Ionicons name="location" size={32} color={"white"} />
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <WeatherPreview weatherImg={numbMini} temp="13º" local="Várzea Grande, Brasil" weather="nublado" />

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        color: "white"
    },
    searchArea: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#212428",
        borderRadius: 16,
        paddingHorizontal: 10
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    searchBtn: {
        marginLeft: 15,
        backgroundColor: "#212428",
        padding: 10,
        borderRadius: 15
    },
    citiesFound: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
});