import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon } from '../../assets/svgIcons/backIcon';
import { useCart } from '../../context/cart';
import { useGlobalStyle } from '../../globalStyle';
import { useNavigation } from '@react-navigation/native';
import { CounterButton } from '../../components/counterButton';
import BillingDetails from './billingDetails';

const { height } = Dimensions.get('window');

const Cart = () => {
    const { globalStyle } = useGlobalStyle();
    const navigation = useNavigation();
    const { cartState, quantity, totalPrice } = useCart();
    const [headerHeight, setHeaderHeight] = React.useState(0);
    const [footerHeight, setFooterHeight] = React.useState(0);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                    flexShrink: 1,
                }}
            >
                <Image
                    source={{ uri: item.attributes.image }}
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        objectFit: 'contain',
                    }}
                />
                <View>
                    <Text
                        style={{
                            fontFamily: globalStyle.font.medium,
                            color: 'rgba(30, 34, 43, 1)',
                        }}
                    >
                        {item.attributes.name.length > 20
                            ? item.attributes.name.slice(0, 20) + '...'
                            : item.attributes.name}
                    </Text>
                    <Text
                        style={{
                            fontFamily: globalStyle.font.regular,
                            color: 'rgba(30, 34, 43, 1)',
                        }}
                    >
                        ${item.attributes.price}
                    </Text>
                </View>
            </View>
            <CounterButton
                product={item}
                productId={item.id}
                itemQuantity={item.quantity}
            />
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top']}>
            <View
                style={styles.header}
                onLayout={(event) => {
                    const { height } = event.nativeEvent.layout;
                    setHeaderHeight(height);
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={{ fontFamily: globalStyle.font.semibold, fontSize: 16 }}>
                    Shopping Cart ({quantity ? quantity : 0})
                </Text>
            </View>
            {cartState.cartItems.length > 0 ? (
                <>
                    <View
                        style={{
                            paddingHorizontal: 20,
                            height: height - (headerHeight + footerHeight),
                        }}
                    >
                        <FlatList
                            data={cartState.cartItems}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                            initialNumToRender={10}
                        />
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            zIndex: 99,
                        }}
                        onLayout={(event) => {
                            const { height } = event.nativeEvent.layout;
                            setFooterHeight(height);
                        }}
                    >
                        <BillingDetails totalPrice={totalPrice} />
                    </View>
                </>
            ) : (
                <Text
                    style={{
                        fontFamily: globalStyle.font.medium,
                        fontSize: 16,
                        paddingHorizontal: 20
                    }}
                >
                    Cart is empty! Add some items.
                </Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 21,
        padding: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 18,
        marginBottom: 18,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(235, 235, 251, 1)',
    },
});

export default Cart;
