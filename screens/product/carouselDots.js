// CarouselDots.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useGlobalStyle } from '../../globalStyle';


const Dot = ({ index, currentIndex }) => {
    const { globalStyle } = useGlobalStyle()
    return (
        <View style={[styles.dot, { backgroundColor: index === currentIndex ? globalStyle.color.secondary : 'rgba(231, 236, 240, 1)' }]} />
    );
};

const CarouselDots = ({ currentIndex, totalDots }) => {
    return (
        <View style={styles.container}>
            {[...Array(totalDots).keys()].map((index) => (
                <Dot key={index} index={index} currentIndex={currentIndex} />
            ))}
        </View>
    );
};

const DOT_SIZE = 4;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: DOT_SIZE * 5,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        marginHorizontal: 3,
    },
});

export default CarouselDots;
