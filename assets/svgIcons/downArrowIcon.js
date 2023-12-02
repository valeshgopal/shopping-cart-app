import Svg, { Path } from 'react-native-svg';

export const DownArrowIcon = ({ size = 5, stroke = '#B2BBCE' }) => {
    return (
        <Svg
            width={+size + 4}
            height={+size}
            viewBox='0 0 9 5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <Path
                d='M1 0.757L4.471 4.243L7.942 0.757'
                stroke={stroke}
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </Svg>
    );
};
