import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  categoryContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  listCategory: {
    gap: 15,
    paddingBottom: 20,
  },
  categoryItemLandscape: {
    height: 100,
  },
  loaderContainer:{
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
