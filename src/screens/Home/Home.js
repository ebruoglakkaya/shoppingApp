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
  ScrollView,
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
  const [filterItemsList, setfilterItemsList] = useState([]);
  const [selectedModalHeader, setSelectedModalHeader] = useState('Filtrele');

  const renderProduct = ({item}) => (
    <BoynerProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetail', item)}
    />
  );
  const handleSelectCatalog = (list, name) => {
    setfilterItemsList(list);
    setSelectedModalHeader(name);
  };

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
        console.log(error.response);
      });
    axios
      .get('https://www.mockachino.com/42a008d9-66a2-41/filter')
      .then(function (response) {
        // handle success
        setBoynerCatalogList(response.data.Context.FilterModules);
        // setBoynerCatalogList(

        //   Object.keys(response.data.Context.FilterModules).forEach((key,index) => {
        //     return(response.data.Context.FilterModules[key])
        //   })

        // );
        setLoadingCatalogState(false);
      })
      .catch(function (error) {
        // handle error
        setErrorState(true);
        console.log(error.response);
      });
  }, []);

  if (loadingState || loadingCatalogState) {
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
            {filterItemsList.length > 0 ? (
              <Icon
                onPress={() => {
                  setfilterItemsList([]);
                  setSelectedModalHeader('Filtrele');
                }}
                name={'arrow-left-drop-circle-outline'}
                size={30}
              />
            ) : (
              <Icon
                onPress={() => setModalVisible(false)}
                name={'close'}
                size={30}
              />
            )}
            <Text>{selectedModalHeader}</Text>

            {filterItemsList.length > 0 ? (
              <TouchableOpacity>
                <Text style={styles.selectAllText}>Tümünü Seç</Text>
              </TouchableOpacity>
            ) : (
              <View style={{width: 30}}></View>
            )}

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
          {filterItemsList.length > 0 ? (
            <ScrollView style={{width: '100%'}}>
              {filterItemsList.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.filterItemsList}>
                    <Text>{item.Name}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : (
            <>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  handleSelectCatalog(
                    boynerCatalogList['100'].FilterModuleItems,
                    boynerCatalogList['100'].Name,
                  );
                }}>
                <Text>{boynerCatalogList['100'].Name}</Text>
                <Icon size={20} name="arrow-right-drop-circle-outline" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  handleSelectCatalog(
                    boynerCatalogList['1056'].FilterModuleItems,
                    boynerCatalogList['1056'].Name,
                  );
                }}>
                <Text>{boynerCatalogList['1056'].Name}</Text>
                <Icon size={20} name="arrow-right-drop-circle-outline" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  handleSelectCatalog(
                    boynerCatalogList['1057'].FilterModuleItems,
                    boynerCatalogList['1057'].Name,
                  );
                }}>
                <Text>{boynerCatalogList['1057'].Name}</Text>
                <Icon size={20} name="arrow-right-drop-circle-outline" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  handleSelectCatalog(
                    boynerCatalogList['1059'].FilterModuleItems,
                    boynerCatalogList['1059'].Name,
                  );
                }}>
                <Text>{boynerCatalogList['1059'].Name}</Text>
                <Icon size={20} name="arrow-right-drop-circle-outline" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  handleSelectCatalog(
                    boynerCatalogList['1060'].FilterModuleItems,
                    boynerCatalogList['1060'].Name,
                  );
                }}>
                <Text>{boynerCatalogList['1060'].Name}</Text>
                <Icon size={20} name="arrow-right-drop-circle-outline" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  handleSelectCatalog(
                    boynerCatalogList['1064'].FilterModuleItems,
                    boynerCatalogList['1064'].Name,
                  );
                }}>
                <Text>{boynerCatalogList['1064'].Name}</Text>
                <Icon size={20} name="arrow-right-drop-circle-outline" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  handleSelectCatalog(
                    boynerCatalogList['Price'].FilterModuleItems,
                    boynerCatalogList['Price'].Name,
                  );
                }}>
                <Text>{boynerCatalogList['Price'].Name}</Text>
                <Icon size={20} name="arrow-right-drop-circle-outline" />
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity style={styles.filterButton}>
            <Text>Ürünleri Gör</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Home;
