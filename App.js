import 'react-native-gesture-handler'
import 'react-native-reanimated'
import { StatusBar } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navigation';
import * as Linking from 'expo-linking'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CartProvider } from './context/cart';
import { FavoriteProvider } from './context/favorites';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { useGlobalStyle } from './globalStyle';
import { ProductsProvider } from './context/products';

const App = () => {
  const { globalStyle } = useGlobalStyle()
  const prefix = Linking.createURL('/')
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        TabMenu: {
          screens: {
            Home: 'home',
            Categories: 'categories',
            Favorites: 'favorites'
          },
          initialRouteName: 'Home',
        },
        Product: 'product',
        Cart: 'cart',
      },
      initialRouteName: 'TabMenu',
    },
  }

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'lightgreen' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontFamily: globalStyle.font.medium,
          color: 'lightgreen',
          fontSize: 16
        }}
        text2Style={{
          fontFamily: globalStyle.font.regular,
          fontSize: 14
        }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontFamily: globalStyle.font.medium,
          fontSize: 16
        }}
        text2Style={{
          fontFamily: globalStyle.font.medium,
          fontSize: 14
        }}
      />
    )
  }
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="#fff"
        animated={true}
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer
          linking={linking}
        >
          <ProductsProvider>
            <CartProvider>
              <FavoriteProvider>
                <Navigation />
                <Toast config={toastConfig} />
              </FavoriteProvider>
            </CartProvider>
          </ProductsProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App

