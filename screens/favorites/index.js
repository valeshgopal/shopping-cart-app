import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorites } from '../../context/favorites';
import ProductCard from '../../components/productCard';
import { useGlobalStyle } from '../../globalStyle';

const Favorites = () => {
    const { globalStyle } = useGlobalStyle();
    const { favorites } = useFavorites();
    const renderProduct = ({ item, index }) => (
        <ProductCard product={item} index={index} />
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top']}>
            <View style={styles.container}>
                <Text
                    style={{
                        fontFamily: globalStyle.font.semibold,
                        fontSize: 24,
                        marginBottom: 16,
                    }}
                >
                    Favorites ({favorites.length})
                </Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={favorites}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderProduct}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={10}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 24,
    },
});

export default Favorites;
