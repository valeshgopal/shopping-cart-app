import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalStyle } from '../../globalStyle';

const Categories = () => {
    const { globalStyle } = useGlobalStyle();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top']}>
            <View style={{ padding: 16 }}>
                <Text style={{
                    fontFamily: globalStyle.font.semibold,
                    fontSize: 24,
                    marginBottom: 16,
                }}>Categories</Text>
            </View>
        </SafeAreaView>
    )
}

export default Categories