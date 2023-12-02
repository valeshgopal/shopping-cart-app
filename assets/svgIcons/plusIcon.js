import Svg, { Path, Circle } from 'react-native-svg';

export const PlusIcon = ({ size = 40, fill = '#F8F9FB', stroke = '#130F26' }) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <Circle cx='20' cy='20' r='20' fill={fill} />
            <Path
                d='M20.0001 16.3273V23.6537'
                stroke={stroke}
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
            <Path
                d='M23.6666 19.9905H16.3333'
                stroke={stroke}
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </Svg>
    );
};
