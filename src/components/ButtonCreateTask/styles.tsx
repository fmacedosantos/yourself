import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
    buttonCreateTask: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: COLORS.WINTER.ICON.RED,
        elevation: 10,
    },
      textCreateTask: {
        color: COLORS.WHITE,
        fontSize: 18,
    }
});