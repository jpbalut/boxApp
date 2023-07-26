import { FlatList, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import ORIENTATION from '../../constants/data/orientation';
import useOrientation from '../../hooks/useOrientation';
import { COLORS } from '../../themes';

function Categories({ navigation }) {
  const categories = useSelector((state) => state.categories.data);
  const orientation = useOrientation();
  const onSelectCategory = ({ categoryId, color }) => {
    navigation.navigate('Products', { categoryId, color });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categories}
          style={styles.categoryContainer}
          numColumns={2}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({ categoryId: item.id, color: COLORS.primary })
              }
              style={orientation === 'LANDSCAPE' ? styles.categoryItemLandscape : {}}
            />
          )}
          contentContainerStyle={styles.listCategory}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
