import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#acefr1',
  },
  buttonsHeaderContainer: {
    position: 'absolute',
    top: 50,
    left: 15,
    zIndex: 99999,
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
  },
  butonsRight: {
    flexDirection: 'row',
  },
  backButtonText: {},
  productBrandContainer: {
    padding: 20,
    shadowOpacity: 0.3,
  },

  image: {
    height: Dimensions.get('window').height / 1.5,
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
  },
  basketContainer: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  basketText: {
    color: 'white',
  },
  backButtonText: {
    color: 'white',
  },
});
