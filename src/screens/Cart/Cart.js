import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import BasketCard from '../../components/BasketCard/BasketCard';
import { addToBasket } from '../../redux/user/user.actions';


function Cart() {
  const dispatch = useDispatch();
  const boxBasket = useSelector(state => state.user.boxBasket);

  console.log(boxBasket)
  const handleRemoveFromBasket = () => {
      const newBasket =boxBasket.map((item,index)=>{
        if(!item == product) {
          return item;
        }
      })
      dispatch(addToBasket(newBasket));
   
  };
  return (
    <SafeAreaView>
      {boxBasket.map((item,index) => {
        return <BasketCard product={item} key={index} onPress={() => handleRemoveFromBasket()}/>
      })}
    </SafeAreaView>
  );
}

export default Cart;
