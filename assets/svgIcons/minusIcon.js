import Svg, { Path, Circle } from 'react-native-svg';

export const MinusIcon = ({ size = 40, fill = '#F8F9FB' }) => {
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
                d='M23.6666 19.9905H16.3333'
                stroke='#130F26'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </Svg>
    );
};
