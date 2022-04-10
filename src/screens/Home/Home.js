import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';
import {BoynerProductCard} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';
import styles from './styles';
import Modal from 'react-native-modal';

function Home({navigation}) {
  const [boynerProductList, setBoynerProductList] = useState();
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [boynerCatalogList, setBoynerCatalogList] = useState();
  const [loadingCatalogState, setLoadingCatalogState] = useState(true);

  const renderProduct = ({item}) => (
    <BoynerProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetail', item)}
    />
  );

  useEffect(() => {
    axios
      .get('https://www.mockachino.com/42a008d9-66a2-41/products')
      .then(function (response) {
        // handle success
        setBoynerProductList(response.data.ProductList);
        setLoadingState(false);
      })
      .catch(function (error) {
        // handle error
        setErrorState(true);
      });
    axios
      .get('https://www.mockachino.com/42a008d9-66a2-41/filter')
      .then(function (response) {
        // handle success
        setBoynerCatalogList(response.data.Context.FilterModules);
        setLoadingCatalogState(false);
      })
      .catch(function (error) {
        // handle error
        setErrorState(true);
      });
  }, []);

  if (loadingState) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  if (errorState) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.optionButtons}>
          <TouchableOpacity>
            <Text>SIRALA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text>FİLTRELE</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          ListEmptyComponent={<Text>Ürün buunamadı</Text>}
          // ListHeaderComponent={<SearchBar onSearch={searchProduct} />}
          keyExtractor={(item, index) => index.toString()}
          data={boynerProductList}
          renderItem={renderProduct}
          numColumns={2}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        swipeDirection="down"
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        style={styles.contentView}>
        <View style={styles.content}>
          <View style={styles.modalHeader}>
            <Icon
              onPress={() => setModalVisible(false)}
              name={'close'}
              size={30}
            />
            <Text>Filtrele</Text>
            {/* {boynerCatalogList.length > 0 && Object.keys(boynerCatalogList).forEach((key, index)=>{
            return (
              <TouchableOpacity>
                <Text>{boynerCatalogList[key].Name}</Text>
              </TouchableOpacity>
            )
          }) } */}

            {/* {boynerCatalogList && Object.keys(boynerCatalogList).forEach((key,index) => {
            return(boynerCatalogList[key].Name)
          }).map((item) => {
            return (
              <TouchableOpacity>
                <Text>{item}</Text>
              </TouchableOpacity>
            )
          })} */}

            
          </View>
          <TouchableOpacity style={styles.filterItem}>
              <Text>{boynerCatalogList['100'].Name}</Text>
              <Icon size={20} name= 'arrow-right-drop-circle-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem}>
              <Text>{boynerCatalogList['1056'].Name}</Text>
              <Icon size={20} name= 'arrow-right-drop-circle-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem}>
              <Text>{boynerCatalogList['1057'].Name}</Text>
              <Icon size={20} name= 'arrow-right-drop-circle-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem}>
              <Text>{boynerCatalogList['1059'].Name}</Text>
              <Icon size={20} name= 'arrow-right-drop-circle-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem}>
              <Text>{boynerCatalogList['1060'].Name}</Text>
              <Icon size={20} name= 'arrow-right-drop-circle-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem}>
              <Text>{boynerCatalogList['1064'].Name}</Text>
              <Icon size={20} name= 'arrow-right-drop-circle-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem}>
              <Text>{boynerCatalogList['Price'].Name}</Text>
              <Icon size={20} name= 'arrow-right-drop-circle-outline' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text>Ürünleri Gör</Text>
            </TouchableOpacity>

        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Home;
