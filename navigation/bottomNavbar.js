import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native'
import { HomeIcon } from '../assets/svgIcons/homeIcon'
import { CategoriesIcon } from '../assets/svgIcons/categoriesIcon'
import { FavoritesIcon } from '../assets/svgIcons/favoritesIcon'
import { MoreIcon } from '../assets/svgIcons/moreIcon'
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
        case 'More':
            return <MoreIcon size={props.size} fill={props.fill} strokeWidth={props.strokeWidth} />
    }
}

function BottomNavbar({ state, descriptors, navigation }) {
    const [isPressed, setIsPressed] = useState(false)
    const { globalStyle } = useGlobalStyle()

    return (
        <View
            style={
                styles.container
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
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
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
                            <View style={isFocused ? styles.icon : {}}>
                                {isFocused ? ICONS(route.name, {
                                    fill:
                                        globalStyle.color.secondary,
                                    size: 24,
                                    strokeWidth: 0
                                }) : ICONS(route.name, {
                                    fill:
                                        'none',
                                    size: 24,
                                })}
                            </View>
                            {!isFocused ? <Text
                                style={[
                                    styles.tabText,
                                    {
                                        fontFamily: globalStyle.font.medium,
                                        color:
                                            '#8891A5',
                                        lineHeight: 16
                                    },
                                ]}
                            >
                                {label}
                            </Text> : null}
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
        // alignItems: 'center',
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
