import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {ProductCard, SearchBar, BoynerProductCard} from './components';
import axios from 'axios';

function Main() {
  const [boynerProductList, setBoynerProductList] = useState();
  const [loadingState, setLoadingState] = useState(true);


const renderProduct = ({item}) => <BoynerProductCard product={item} />;

  useEffect(() => {
    axios
      .get('https://www.mockachino.com/42a008d9-66a2-41/products')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setBoynerProductList(response.data.ProductList);
        setLoadingState(false);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
 
  if(loadingState){
      return(
        <SafeAreaView style= {styles.loadingContainer}>
            <ActivityIndicator size='large'/>
        </SafeAreaView>
      );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
         <FlatList
          ListEmptyComponent={<Text>Ürün buunamadı</Text>}
        //   ListHeaderComponent={<SearchBar onSearch={searchProduct} />}
          keyExtractor={(item, index) => index.toString()}
          data={boynerProductList}
          renderItem={renderProduct}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#acefr1',
  },
  loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default Main;
