import React from 'react'
import { View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcome from './welcome'
import Offers from './offers'
import Products from './products'
import { useGlobalStyle } from '../../globalStyle'
import { useIsFocused } from '@react-navigation/native'
const Home = () => {
    const { globalStyle } = useGlobalStyle()
    const isFocused = useIsFocused();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top']}>
            {isFocused && <StatusBar
                barStyle={'light-content'}
                backgroundColor={globalStyle.color.primary}
                animated={true}
            />}
            <Welcome />
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Offers />
                <Products />
            </View>

        </SafeAreaView>
    )
}

export default Home