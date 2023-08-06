import { StyleSheet } from 'react-native';

import { COLORS,  } from '../../themes';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 40,
  },
  label: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    paddingVertical: 5,
    color: COLORS.text,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    paddingVertical: 5,
    color: COLORS.text,
  },
});