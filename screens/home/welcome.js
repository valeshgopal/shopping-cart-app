import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CartIcon } from '../../assets/svgIcons/cartIcon';
import { useNavigation } from '@react-navigation/native';
import { useGlobalStyle } from '../../globalStyle';
import { TextInput } from 'react-native';
import { SearchIcon } from '../../assets/svgIcons/searchIcon';
import { DownArrowIcon } from '../../assets/svgIcons/downArrowIcon';
import { useCart } from '../../context/cart';
import { CartItemsCounter } from '../../components/cartItemsCounter';

const Welcome = () => {
    const navigation = useNavigation();
    const { globalStyle } = useGlobalStyle();
    const { addToCart, quantity } = useCart()
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
                        <CartIcon />
                        <CartItemsCounter quantity={quantity} borderColor={globalStyle.color.primary} />
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.searchBar}>
                <View style={styles.searchIcon}>
                    <SearchIcon size={16} />
                </View>
                <TextInput
                    style={[styles.input, { fontFamily: globalStyle.font.medium }]}
                    placeholder='Search Products or store'
                    placeholderTextColor='#8891A5'
                />
            </View>

            <View style={styles.deliveryInfo}>
                <View>
                    <Text
                        style={{
                            fontFamily: globalStyle.font.extraBold,
                            fontSize: 11,
                            color: 'rgba(248, 249, 251, 0.5)',
                        }}
                    >
                        DELIVERY TO
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text
                            style={{
                                fontFamily: globalStyle.font.medium,
                                fontSize: 14,
                                color: 'rgba(248, 249, 251, 1)',
                            }}
                        >
                            Green Way 3000, Sylhet
                        </Text>
                        <DownArrowIcon size={6} />
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            fontFamily: globalStyle.font.extraBold,
                            fontSize: 11,
                            color: 'rgba(248, 249, 251, 0.5)',
                        }}
                    >
                        WITHIN
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text
                            style={{
                                fontFamily: globalStyle.font.medium,
                                fontSize: 14,
                                color: 'rgba(248, 249, 251, 1)',
                            }}
                        >
                            1 Hour
                        </Text>
                        <DownArrowIcon size={6} />
                    </View>
                </View>
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
    searchBar: {
        position: 'relative',
        marginTop: 35,
    },
    input: {
        height: 56,
        width: '100%',
        color: '#fff',
        backgroundColor: '#153075',
        borderRadius: 50,
        paddingLeft: 54,
        paddingRight: 24,
    },
    searchIcon: {
        position: 'absolute',
        top: 20,
        left: 28,
        zIndex: 1,
    },
    deliveryInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
});

export default Welcome;
