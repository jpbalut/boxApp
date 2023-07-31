import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import useOrientation from '../../hooks/useOrientation';
import { COLORS } from '../../themes';
import { useGetCategoriesQuery } from '../../store/categories/api';

function Categories({ navigation }) {
  const {data, error, isLoading} = useGetCategoriesQuery()
  const orientation = useOrientation();
  const onSelectCategory = ({ categoryId, color }) => {
    navigation.navigate('Products', { categoryId, color });
  };

  if(isLoading) return (
    <View style={styles.loaderContainer}><ActivityIndicator size='large' color={COLORS.primary}/></View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
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
