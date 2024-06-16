import { View, Text, StyleSheet } from 'react-native';
import { useGlobalStyle } from '../globalStyle';

export const CartItemsCounter = ({ quantity, borderColor }) => {
    const { globalStyle } = useGlobalStyle();
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: globalStyle.color.secondary, borderColor },
            ]}
        >
            <Text
                style={{
                    fontFamily: globalStyle.font.bold,
                    color: '#000',
                    fontSize: 12,
                }}
            >
                {quantity}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 22,
        height: 22,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -10,
        left: 7,
        borderWidth: 2,
    },
});
