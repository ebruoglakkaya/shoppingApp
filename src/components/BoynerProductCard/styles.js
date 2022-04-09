
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acefr1',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: -5,
            height:5,
        },
        elevation: 20,
    },

    image: {
        height: Dimensions.get('window').height /3,
        
    },
    title: {
        marginVertical: 5,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    stock: {
    color: 'red',
    fontWeight: 'bold',
    },
    footer: {
        flex: 1,
    justifyContent: 'flex-end',
    },
});