import Svg, { Path } from 'react-native-svg';

export const CartIcon = ({ size = 18, fill = 'none', stroke = '#fff' }) => {
    return (
        <Svg
            width={+size}
            height={+size + 2}
            viewBox='0 0 18 20'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <Path
                d='M13.4485 5.9995C10.2931 6.51124 7.63269 6.49623 4.56871 5.99535C2.47793 5.65356 0.597986 7.484 1.09451 9.53958L2.86182 16.8562C3.16559 18.1138 4.29303 19 5.58921 19H12.4423C13.7385 19 14.8659 18.1138 15.1697 16.8562L16.9336 9.55363C17.4309 7.49478 15.5431 5.65982 13.4485 5.9995Z'
                stroke={stroke}
                stroke-width='1.5'
            />
            <Path
                d='M5 8.83231L5.00001 4.49999C5.00001 2.567 6.56701 1 8.50001 1H9.5C11.433 1 13 2.567 13 4.5V9'
                stroke={stroke}
                stroke-width='1.5'
                stroke-linecap='round'
            />
        </Svg>
    );
};
