import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import ORIENTATION from '../../constants/data/orientation';
import useOrientation from '../../hooks/useOrientation';

function Training({ navigation }) {
  const orientation = useOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>TO DO TRAINING SCREEN</Text>
      </View>
    </SafeAreaView>
  );
}

export default Training;
