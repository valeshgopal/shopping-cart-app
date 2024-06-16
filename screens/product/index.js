import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackIcon } from '../../assets/svgIcons/backIcon';
import { CartIcon } from '../../assets/svgIcons/cartIcon';
import { useGlobalStyle } from '../../globalStyle';
import { useCart } from '../../context/cart';
import { CartItemsCounter } from '../../components/cartItemsCounter';

const { width } = Dimensions.get('window');

const Product = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { globalStyle } = useGlobalStyle();
    const { product } = route.params;

    const { addToCart, quantity } = useCart();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <View style={{ position: 'relative', marginRight: 5 }}>
                        <CartIcon stroke='#000' />
                        <CartItemsCounter quantity={quantity} borderColor={'#fff'} />
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        style={{
                            fontFamily: globalStyle.font.semibold,
                            fontSize: 20,
                            marginBottom: 24,
                        }}
                    >
                        {product.attributes.name}
                    </Text>
                </View>
                <Image
                    source={{ uri: product.attributes.image }}
                    style={{ width, height: 250, objectFit: 'contain' }}
                />
                <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
                    <View style={styles.priceContainer}>
                        <Text
                            style={{
                                fontFamily: globalStyle.font.bold,
                                color: globalStyle.color.primary,
                                fontSize: 16,
                            }}
                        >
                            ${product.attributes.price}
                        </Text>
                    </View>

                    <View>
                        <Text
                            style={{
                                fontFamily: globalStyle.font.regular,
                                fontSize: 16,
                                color: 'rgba(30, 34, 43, 1)',
                                marginBottom: 6,
                            }}
                        >
                            Description
                        </Text>
                        <Text
                            style={{
                                fontFamily: globalStyle.font.regular,
                                fontSize: 16,
                                color: 'rgba(136, 145, 165, 1)',
                            }}
                        >
                            {product.attributes.description}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            { backgroundColor: globalStyle.color.primary },
                        ]}
                        onPress={() => addToCart(product)}
                    >
                        <Text
                            style={{
                                fontFamily: globalStyle.font.semibold,
                                color: '#fff',
                            }}
                        >
                            Add To Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 26,
        marginBottom: 30,
    },
    button: {
        height: 56,
        borderRadius: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
});

export default Product;
