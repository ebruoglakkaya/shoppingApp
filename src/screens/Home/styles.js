
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#acefr1',
        },
        loadingContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        backButton: {
            padding: 20,
            color: 'red'
        },
        image: {
            width: '16%',
            height: 2.4,
            
        },
        productBrandContainer: {
            padding:100,
        },
        optionButtons: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            backgroundColor: 'white',
            padding: 10,
            marginTop: -5,
        },
        contentView: {
            justifyContent: 'flex-end',
            margin: 0,
        },
        content: {
            backgroundColor: 'white',
            paddingHorizontal: 20,
            alignItems: 'center',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            height: Dimensions.get('window').height * 0.9,
            
        },
        modalHeader: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 15,
            alignItems: 'center',
            width: '100%',
        }
       
});