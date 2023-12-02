import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useCart } from '../context/cart'
import { MinusIcon } from '../assets/svgIcons/minusIcon'
import { PlusIcon } from '../assets/svgIcons/plusIcon'

export const CounterButton = ({ product, productId, itemQuantity }) => {
    const { addToCart, removeFromCart } = useCart()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => removeFromCart(productId)}>
                <MinusIcon />
            </TouchableOpacity>
            <Text>{itemQuantity}</Text>
            <TouchableOpacity onPress={() => addToCart(product)}>
                <PlusIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }
})