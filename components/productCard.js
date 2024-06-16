import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { FavoriteIcon } from '../assets/svgIcons/favoriteIcon';
import { useGlobalStyle } from '../globalStyle';
import { useNavigation } from '@react-navigation/native';
import { PlusIconTwo } from '../assets/svgIcons/plusIcon2';
import { useCart } from '../context/cart';
import { useFavorites } from '../context/favorites';

const ProductCard = ({ product, index }) => {
    const { globalStyle } = useGlobalStyle();
    const navigation = useNavigation();
    const { addToCart } = useCart();
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

    const isFavorite = favorites.some(
        (item) => item.id === product.id && item.isFavorite
    );

    const handleAddToCart = (product) => {
        addToCart(product);
    };
    const handleAddToFavorites = (product) => {
        if (isFavorite) {
            removeFromFavorites(product);
        } else {
            addToFavorites(product);
        }
    };

    return (
        <View
            style={[styles.productCard, { marginRight: index % 2 === 0 ? 15 : 0 }]}
        >
            <TouchableWithoutFeedback onPress={() => handleAddToFavorites(product)}>
                <View style={styles.iconContainer}>
                    <FavoriteIcon
                        fill={isFavorite ? '#FF8181' : 'none'}
                        stroke={isFavorite ? 'none' : '#323743'}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Product', { product })}
            >
                <View>
                    <Image source={{ uri: product.attributes.image }} style={styles.image} />
                    <View style={{ marginTop: 30, paddingHorizontal: 17 }}>
                        <Text
                            style={{ fontFamily: globalStyle.font.semibold, marginBottom: 4 }}
                        >
                            ${product.attributes.price}
                        </Text>
                        <Text
                            style={{
                                fontFamily: globalStyle.font.regular,
                                fontSize: 12,
                                color: 'rgba(97, 106, 125, 1)',
                            }}
                            numberOfLines={1}
                        >
                            {product.attributes.name}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity
                style={styles.plusIcon}
                onPress={() => handleAddToCart(product)}
            >
                <PlusIconTwo fill={globalStyle.color.primary} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    productCard: {
        flex: 1,
        height: 194,
        maxWidth: '48%',
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'rgba(248, 249, 251, 1)',
        backgroundColor: '#fff',
        shadowColor:
            'rgba(1,1,1,0.2)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1.0,
        shadowRadius: 5.0,
        elevation: 5,
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 12,
        objectFit: 'contain',
        alignSelf: 'center',
    },
    plusIcon: {
        position: 'absolute',
        bottom: 34,
        right: 20,
    },
    iconContainer: {
        padding: 13,
    },
});

export default ProductCard;
