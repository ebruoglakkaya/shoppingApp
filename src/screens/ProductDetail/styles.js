
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acefr1',
        // padding: 10,
        // margin: 10,
        // borderRadius: 5,
        // shadowOpacity: 0.3,
        // shadowOffset: {
        //     width: -5,
        //     height:5,
        // },
        // elevation: 20,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 15,
        zIndex: 99999,
    },
    backButtonText: {
    },
    productBrandContainer: {
      padding:20,
      shadowOpacity: 0.3, 
    },

    image: {
        height: Dimensions.get('window').height /1.5,
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
    discountPrice: {
        color: 'red',
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position:'absolute',
        bottom: 0,
        width: '100%',
        height: '10%'
    },
    basketContainer: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    basketText: {
        color: 'white',
    }
});