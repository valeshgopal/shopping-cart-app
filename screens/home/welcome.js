import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CartIcon } from '../../assets/svgIcons/cartIcon';
import { useNavigation } from '@react-navigation/native';
import { useGlobalStyle } from '../../globalStyle';
import { useCart } from '../../context/cart';
import { CartItemsCounter } from '../../components/cartItemsCounter';

const Welcome = () => {
    const navigation = useNavigation();
    const { globalStyle } = useGlobalStyle();
    const { quantity } = useCart();
    return (
        <View
            style={[styles.container, { backgroundColor: globalStyle.color.primary }]}
        >
            <View style={styles.header}>
                <View>
                    <Text
                        style={[
                            styles.welcomeText,
                            { fontFamily: globalStyle.font.semibold },
                        ]}
                    >
                        Hey, Valesh
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
                    <View style={{ position: 'relative', marginRight: 5 }}>
                        <CartIcon stroke={'#fff'} />
                        <CartItemsCounter
                            quantity={quantity}
                            borderColor={globalStyle.color.primary}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    welcomeText: {
        width: 150,
        fontSize: 22,
        color: '#fff',
    },
});

export default Welcome;
