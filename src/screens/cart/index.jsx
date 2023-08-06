import { Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';
import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from '../../store/cart/cartSlice';
import { useCreateOrderMutation } from '../../store/orders/api';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [createOrder, {data, error, isError, isLoading}] = useCreateOrderMutation()
  console.warn('useCreateOrderMutation',{data, isError, error, isLoading})
  const onIncreaseCartItem = (id) => {
    dispatch(increaseItemQuantity({ id }));
  };

  const onDecreaseCartItem = (id) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  const onRemoveCartItem = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  const onCreateOrder = async() => {
    const newOrder = {
      id: Math.floor(Math.random()*1000),
      items: cart,
      total,
      user:{
        id:1,
        name: 'john doe',
        address: '123 street',
        phone: '123457789',
        email: 'johndoe@gmail.com',
      },
      payment:{
        method:'VISA',
      },
      delivery: {
      method: 'UPS',
      trackingNumber: Math.floor(Math.random()*1000),
      },
      createdAt: Date.now(),
      finishedAt: '',
    };
    try {
      await createOrder(newOrder)
      dispatch(clearCart())
      navigation.navigate('TrainingTab')
    } catch (e){
      console.warn({error, e})
    }

  }

  if(cart.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your Cart is Empty</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItem
            {...item}
            onIncreaseCartItem={onIncreaseCartItem}
            onDecreaseCartItem={onDecreaseCartItem}
            onRemoveCartItem={onRemoveCartItem}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={onCreateOrder} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPriceText}>USD {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
