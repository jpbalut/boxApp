import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { Address, Profile, Settings } from '../screens';
import { COLORS } from '../themes';
const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Settings"
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: COLORS.primary,
        height: 80,
      },
      headerTitleStyle: {
        fontFamily: "Inter-Bold",
        fontSize: 16,
      },
      headerTintColor: COLORS.white,
      animation: 'fade_from_bottom',
      headerLeft: () => (
        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
        </TouchableOpacity>
      ),
    })}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
});

export default SettingsNavigator;
