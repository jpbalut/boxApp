import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { addToCart } from '../../store/cart/cartSlice';
import { useGetProductsByIdQuery } from '../../store/products/api';
import { COLORS } from '../../themes';

function ProductDetails({ navigation, route }) {
  const dispatch = useDispatch();
  const { color, productId } = route.params;
  const {data, isLoading, error} = useGetProductsByIdQuery(productId)
  const product = data?.find((product) => product.id === productId);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  if(isLoading) return (
    <View style={styles.loaderContainer}><ActivityIndicator size='large' color={COLORS.primary}/></View>
  )
  return (
    <View style={styles.container}>
      <View style={[styles.containerImage, { backgroundColor: color }]}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>USD {product.price}</Text>
        <Text style={styles.tagTitle}>Tags</Text>
        <View style={styles.containerTags}>
          {product.tags.map((tag) => (
            <TouchableOpacity key={tag} style={[styles.containerTag, { backgroundColor: color }]}>
              <Text style={styles.tag}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductDetails;

// import { Ionicons } from '@expo/vector-icons';
// import { View, Text, TouchableOpacity, ImageBackground, TouchableHighlight } from 'react-native';
// import { useSelector } from 'react-redux';

// import { styles } from './styles';
// import { COLORS } from '../../themes';

// function ProductsDetails({ navigation, route }) {
//   const { color, productId } = route.params;
//   const products = useSelector((state) => state.product.data);
//   const product = products.find((product) => product.id === productId);
//   return (
//     <View style={styles.container}>
//       <Text>Detalles Producto</Text>
//       <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
//         <Ionicons name="arrow-back-circle" size={25} color={COLORS.black} />
//         <Text style={styles.goBackText}>Go Back</Text>
//       </TouchableOpacity>
//       <ImageBackground source={{ uri: producto[0].image }} style={styles.productImage} />
//       <View style={styles.productTitle}>
//         <Text style={styles.productTitleText}>{producto[0].name}</Text>
//       </View>
//       <View style={styles.productDescription}>
//         <Text style={styles.productDescriptionText}>{producto[0].description}</Text>
//       </View>
//       <View style={styles.productPrice}>
//         <Text style={styles.productPriceText}>
//           {producto[0].currency.code}${producto[0].price}
//         </Text>
//       </View>
//       <TouchableHighlight>
//         <Text>Comprar</Text>
//       </TouchableHighlight>
//       <View style={styles.tagContainer}>
//         {producto[0].tags.length !== 0 && (
//           <Text>
//             Tags:
//             {producto[0].tags.map((elem) => (
//               <View style={styles.productTag}>
//                 <Text>{elem} </Text>
//               </View>
//             ))}
//           </Text>
//         )}
//       </View>
//     </View>
//   );
// }

// //TODO: ver lo del profe, arreglar y optimizar.

// export default ProductsDetails;
