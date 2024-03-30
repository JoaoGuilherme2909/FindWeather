import { View, StyleSheet } from "react-native";
import TopText from "../components/topText";
import CurrentWeather from "../components/CurrentWeather";
import Info from "../components/Info";
import AfterWeather from "../components/AfterWeather";

export default function () {
    return (
        <View style={styles.container}>
            <TopText />
            <CurrentWeather />
            <Info />
            <AfterWeather />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B1D22",
    },
});