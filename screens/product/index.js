import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackIcon } from '../../assets/svgIcons/backIcon';
import { CartIcon } from '../../assets/svgIcons/cartIcon';
import { useGlobalStyle } from '../../globalStyle';
import StarRating from 'react-native-star-rating';
import Carousel from 'react-native-reanimated-carousel';
import CarouselDots from './carouselDots';
import { getDiscount } from '../../utils/getDiscount';
import { FavoriteIcon } from '../../assets/svgIcons/favoriteIcon';
import { useCart } from '../../context/cart';
import { CartItemsCounter } from '../../components/cartItemsCounter';
import { useFavorites } from '../../context/favorites';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const Product = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { globalStyle } = useGlobalStyle();
    const { product } = route.params;

    const carouselRef = React.useRef();
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const { addToCart, quantity } = useCart();
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites()

    const isFavorite = favorites.some((item) => item.id === product.id && item.isFavorite);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleAddToFavorites = (product) => {
        if (isFavorite) {
            removeFromFavorites(product)
        } else {
            addToFavorites(product)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top']}>
            <View style={styles.container}>
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
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: globalStyle.font.light, fontSize: 50 }}>
                            {product.title}
                        </Text>
                        <Text
                            style={{ fontFamily: globalStyle.font.extraBold, fontSize: 50 }}
                        >
                            {product.brand}
                        </Text>
                    </View>
                    <View style={styles.starRating}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={product.rating}
                            starSize={16}
                            fullStarColor={globalStyle.color.secondary}
                            containerStyle={{ width: 90 }}
                        />
                        <Text
                            style={{
                                fontFamily: globalStyle.font.regular,
                                color: 'rgba(161, 161, 171, 1)',
                            }}
                        >
                            854 reviews
                        </Text>
                    </View>

                    <View style={{ position: 'relative' }}>
                        <Carousel
                            ref={carouselRef}
                            loop
                            width={width}
                            height={210}
                            autoPlay={true}
                            data={product.images}
                            scrollAnimationDuration={2000}
                            onProgressChange={(_offsetProgress, absoluteProgress) => {
                                if (
                                    carouselRef.current &&
                                    (absoluteProgress > 0.5 ||
                                        carouselRef.current?.getCurrentIndex() === 0)
                                ) {
                                    setCurrentImageIndex(carouselRef.current.getCurrentIndex());
                                }
                            }}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Image
                                            source={{ uri: item }}
                                            style={{ width, height: '100%', objectFit: 'cover' }}
                                        />
                                    </View>
                                );
                            }}
                        />
                        <TouchableWithoutFeedback onPress={() => handleAddToFavorites(product)} containerStyle={styles.favoriteIcon}>
                            <FavoriteIcon size={20} fill={isFavorite ? '#FF8181' : 'none'} stroke={isFavorite ? 'none' : '#323743'} />
                        </TouchableWithoutFeedback>
                        <View style={styles.carouselDots}>
                            <CarouselDots
                                currentIndex={currentImageIndex}
                                totalDots={product.images?.length}
                            />
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
                        <View style={styles.priceContainer}>
                            <Text
                                style={{
                                    fontFamily: globalStyle.font.bold,
                                    color: globalStyle.color.primary,
                                    fontSize: 16,
                                }}
                            >
                                ${product.price}
                            </Text>
                            <View
                                style={{
                                    backgroundColor: globalStyle.color.primary,
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 70,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: globalStyle.font.regular,
                                        fontSize: 12,
                                        color: 'rgba(250, 251, 253, 1)',
                                    }}
                                >
                                    ${getDiscount(product.price, product.discountPercentage)} OFF
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={[
                                    styles.leftButton,
                                    { borderColor: globalStyle.color.primary },
                                ]}
                                onPress={() => handleAddToCart(product)}
                            >
                                <Text
                                    style={{
                                        fontFamily: globalStyle.font.semibold,
                                        color: globalStyle.color.primary,
                                    }}
                                >
                                    Add To Cart
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.rightButton,
                                    { backgroundColor: globalStyle.color.primary },
                                ]}
                            >
                                <Text
                                    style={{
                                        fontFamily: globalStyle.font.semibold,
                                        color: '#fff',
                                    }}
                                >
                                    Buy Now
                                </Text>
                            </TouchableOpacity>
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
                                Details
                            </Text>
                            <Text
                                style={{
                                    fontFamily: globalStyle.font.regular,
                                    fontSize: 16,
                                    color: 'rgba(136, 145, 165, 1)',
                                }}
                            >
                                {product.description}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
    starRating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 8,
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    buttons: {
        flexDirection: 'row',
        gap: 24,
        marginBottom: 30,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 26,
        marginBottom: 30,
    },
    leftButton: {
        height: 56,
        borderWidth: 1,
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButton: {
        height: 56,
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    favoriteIcon: {
        position: 'absolute',
        width: 58,
        height: 58,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        top: 14,
    },
    carouselDots: {
        position: 'absolute',
        bottom: 12,
        left: 12,
    },
});

export default Product;
