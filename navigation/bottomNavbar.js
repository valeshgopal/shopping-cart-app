import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native'
import { HomeIcon } from '../assets/svgIcons/homeIcon'
import { FavoritesIcon } from '../assets/svgIcons/favoritesIcon'
import { CartIcon } from '../assets/svgIcons/cartIcon'
import { useState } from 'react'
import { useGlobalStyle } from '../globalStyle'

const ICONS = (routeName, props = {}) => {
    switch (routeName) {
        case 'Home':
            return <HomeIcon size={props.size} fill={props.fill} strokeWidth={props.strokeWidth} />
        case 'Categories':
            return <CategoriesIcon size={props.size} fill={props.fill} strokeWidth={props.strokeWidth} />
        case 'Favorites':
            return <FavoritesIcon size={props.size} fill={props.fill} strokeWidth={props.strokeWidth} />
        case 'Cart':
            return <CartIcon size={props.size} fill={props.fill} strokeWidth={props.strokeWidth} />
    }
}

function BottomNavbar({ state, descriptors, navigation }) {
    const [isPressed, setIsPressed] = useState(false)
    const { globalStyle } = useGlobalStyle()

    return (
        <View
            style={
                [styles.container, { backgroundColor: globalStyle.color.primary }]
            }
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true })
                    }
                }

                const handlePress = () => {
                    if (!isPressed) {
                        setIsPressed(true)
                        onPress()
                        setTimeout(() => {
                            setIsPressed(false)
                        }, 500)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={handlePress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                        key={route.name}
                    >
                        <View style={styles.tab}>
                            <View>
                                {isFocused ? ICONS(route.name, {
                                    fill:
                                        globalStyle.color.secondary,
                                    size: 24,
                                    stroke: globalStyle.color.secondary,

                                }) : ICONS(route.name, {
                                    fill:
                                        'none',
                                    size: 24,
                                })}
                            </View>
                            <Text
                                style={[
                                    styles.tabText,
                                    {
                                        fontFamily: globalStyle.font.medium,
                                        color:
                                            isFocused ? globalStyle.color.secondary : '#fff',
                                        lineHeight: 16
                                    },
                                ]}
                            >
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 72,
        paddingTop: 10,
        justifyContent: 'space-between',
        backgroundColor: '#F8F7FB'
    },
    tab: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        textAlign: 'center',
        fontSize: 11,
        lineHeight: 11,
        color: '#fff',
    },
    icon: {
        height: 64,
        width: 64,
        backgroundColor: '#1E222B',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#fff',
        bottom: 32
    }
})
