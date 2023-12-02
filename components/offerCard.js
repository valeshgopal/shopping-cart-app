import { Text, View, Image, StyleSheet } from 'react-native';
import { ThumbnailIcon } from '../assets/svgIcons/thumbnail';
import { useGlobalStyle } from '../globalStyle';

const OfferCard = () => {
    const { globalStyle } = useGlobalStyle();
    return (
        <View style={[styles.card]}>
            <ThumbnailIcon />
            <View>
                <Text
                    style={{
                        fontFamily: globalStyle.font.regular,
                        color: '#fff',
                        fontSize: 22,
                    }}
                >
                    Get
                </Text>
                <Text
                    style={{
                        fontFamily: globalStyle.font.extraBold,
                        color: '#fff',
                        fontSize: 22,
                    }}
                >
                    50% OFF
                </Text>
                <Text
                    style={{
                        fontFamily: globalStyle.font.light,
                        color: '#fff',
                        fontSize: 14,
                    }}
                >
                    On first 03 order
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 269,
        height: 123,
        borderRadius: 16,
        paddingHorizontal: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default OfferCard;
