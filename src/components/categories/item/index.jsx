import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight, Text, View } from 'react-native/';

import { styles } from './styles';
import { COLORS } from '../../../themes';

const CategoryItem = ({
  id,
  name,
  backgroundColor,
  iconName,
  // backgroundImage,
  onSelectCategory,
  style,
}) => {
  // const { width, height } = useWindowDimensions();
  // const isTablet = width > 650;

  return (
    <TouchableHighlight
      onPress={() => {onSelectCategory(id)}}
      style={[styles.container]}
      underlayColor={COLORS.primary}>
      <View style={[styles.contentContainer, style]}>
        <Ionicons name={iconName} size={80} color={COLORS.secondary} style={styles.icon} />
        <Text style={styles.categoryName}>{name}</Text>
      </View>
      {/* </ImageBackground> */}
    </TouchableHighlight>
  );
};

export default CategoryItem;
