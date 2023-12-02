import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useGlobalStyle } from '../../globalStyle';
import OfferCard from '../../components/offerCard';

const Offers = () => {
    const { globalStyle } = useGlobalStyle();
    const scrollViewRef = useRef(null);
    const [focusedIndex, setFocusedIndex] = useState(null);
    const [offset, setOffet] = useState(0)

    const handleScroll = (event) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;

        const visibleWidth = layoutMeasurement.width;
        const offsetX = contentOffset.x;
        setOffet(offsetX)

        const currentIndex = Math.round(offsetX / visibleWidth);

        if (currentIndex !== focusedIndex) {
            setFocusedIndex(currentIndex);
        }
    };

    const renderItems = () => {
        const items = new Array(3)
            .fill('')
            .map((_, index) => <OfferCard key={index} />);
        return items.map((item, index) => (
            <View
                key={index}
                style={[
                    styles.item,
                    {
                        backgroundColor:
                            (offset === 0 && index === 0) || index === focusedIndex
                                ? globalStyle.color.secondary
                                : 'rgba(255, 188, 110, 0.4)',
                        marginRight: index !== item.length - 1 ? 18 : 0
                    },
                ]}
            >
                {item}
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            >
                {renderItems()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 27,
    },
    item: {
        borderRadius: 16,
        width: 269,
        height: 123,
    },
});

export default Offers;
