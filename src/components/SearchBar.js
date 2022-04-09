import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function SearchBar(props) {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Search..." onChangeText={props.onSearch}/>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        margin: 10,
        borderBottomWidth: 1,
        borderColor: '#erderf',
        paddingBottom: 5,
    },
});
export {SearchBar}