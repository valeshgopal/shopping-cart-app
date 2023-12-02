import { useFonts, Manrope_300Light, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from "@expo-google-fonts/manrope"

export const useGlobalStyle = () => {
    let [fontsLoaded] = useFonts({
        Manrope_300Light,
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });

    const globalStyle = {
        font: {
            light: 'Manrope_300Light',
            regular: 'Manrope_400Regular',
            medium: 'Manrope_500Medium',
            semibold: 'Manrope_600SemiBold',
            bold: 'Manrope_700Bold',
            extraBold: 'Manrope_800ExtraBold',
        },
        color: {
            primary: '#2A4BA0',
            secondary: '#F9B023'
        }
    }
    return { globalStyle }
}