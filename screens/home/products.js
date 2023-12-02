import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useGlobalStyle } from '../../globalStyle';
import ProductCard from '../../components/productCard';
import { useProducts } from '../../context/products';

const Products = () => {
    const { globalStyle } = useGlobalStyle();

    const { products, isLoading } = useProducts()

    const renderProduct = ({ item, index }) => (
        <ProductCard product={item} index={index} />
    );

    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontFamily: globalStyle.font.regular,
                    fontSize: 30,
                    lineHeight: 38,
                    marginBottom: 12
                }}
            >
                Recommended
            </Text>

            {isLoading ?
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color={globalStyle.color.primary} />
                    <Text style={{ fontFamily: globalStyle.font.medium, marginTop: 8 }}>Loading Products...</Text>
                </View> :
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderProduct}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={10}
                />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 27,
    },
    loader: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Products;
