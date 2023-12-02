import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useGlobalStyle } from '../../globalStyle';

const BillingDetails = ({ totalPrice }) => {
    const { globalStyle } = useGlobalStyle();

    const DELIVERY_FEE = 2;
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text
                    style={{
                        fontFamily: globalStyle.font.regular,
                        color: 'rgba(97, 106, 125, 1)',
                    }}
                >
                    Subtotal
                </Text>
                <Text
                    style={{
                        fontFamily: globalStyle.font.medium,
                        color: 'rgba(30, 34, 43, 1)',
                    }}
                >
                    ${totalPrice.toFixed(2)}
                </Text>
            </View>
            <View style={styles.row}>
                <Text
                    style={{
                        fontFamily: globalStyle.font.regular,
                        color: 'rgba(97, 106, 125, 1)',
                    }}
                >
                    Delivery
                </Text>
                <Text
                    style={{
                        fontFamily: globalStyle.font.medium,
                        color: 'rgba(30, 34, 43, 1)',
                    }}
                >
                    ${DELIVERY_FEE.toFixed(2)}
                </Text>
            </View>
            <View style={styles.row}>
                <Text
                    style={{
                        fontFamily: globalStyle.font.regular,
                        color: 'rgba(97, 106, 125, 1)',
                    }}
                >
                    Total
                </Text>
                <Text
                    style={{
                        fontFamily: globalStyle.font.semibold,
                        color: 'rgba(30, 34, 43, 1)',
                        marginTop: 4
                    }}
                >
                    ${(totalPrice + DELIVERY_FEE).toFixed(2)}
                </Text>
            </View>
            <TouchableOpacity style={[styles.checkoutBtn, { backgroundColor: globalStyle.color.primary }]}>
                <Text style={{ fontFamily: globalStyle.font.semibold, color: '#fff' }}>Proceed To Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(248, 249, 251, 1)',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 32,
        borderRadius: 30,
        marginHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    checkoutBtn: {
        height: 56,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    }
});

export default BillingDetails;
