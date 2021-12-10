import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "./shared/card";

export default function ReviewDetails( { route, navigation }) {
  const item = route.params
    const pressHandler = () => {
        navigation.navigate('Home');
    }
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{ item.title }</Text>
                <Text>{ item.body }</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating</Text>
                    <Image source={ images.rating[item.rating]} />
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
})
