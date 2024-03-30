import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EmptyState from "../components/homeScreen/states/EmptyState";
import SelectedState from "../components/homeScreen/states/SelectedState";
import SearchScreen from "./SearchScreen";
import Ionicons from "@expo/vector-icons/Ionicons"

const tabs = createBottomTabNavigator();

export default function ({ route, navigation }: any) {
    return (
        <tabs.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: "#1B1D22",
                borderTopWidth: 0,

            },
            tabBarLabel: "",
            tabBarActiveTintColor: "white",
        }}>
            <tabs.Screen options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => {
                    return <Ionicons name="home-outline" size={32} color={color} />;
                },
            }} name="Home" component={SelectedState} />
            <tabs.Screen options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => {
                    return <Ionicons name="search-outline" size={32} color={color} />;
                },
            }
            }
                name="Pesquisar" component={SearchScreen} />
        </tabs.Navigator>

    )
}

