import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { useGetOrdersQuery } from '../../store/orders/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OrderItem } from '../../components';

function Training() {
  const {data, error, isLoading} = useGetOrdersQuery()
  console.warn('aaa', {data, error, isLoading})

  const renderItem = ({item}) => (<OrderItem {...item}/>)
  
  const keyExtractor = (item) => item.id.toString()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data = {data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
}

export default Training;
