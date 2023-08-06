import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
  orderItemContainer: {
    flex: 1,
    height: 145,
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  orderHeaderContainer: {
    flex: 1,
  },
  orderItemDate: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
    color: COLORS.text,
  },
  orderBody: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  orderItemTotal: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
    color: COLORS.text,
  },
  orderItemId: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    color: COLORS.text,
  },
});