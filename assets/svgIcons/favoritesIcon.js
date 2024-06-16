import Svg, { Path, G } from 'react-native-svg';

export const FavoritesIcon = ({ size = 24, fill = 'none', stroke = '#fff', strokeWidth = 1.5 }) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            <Path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z'
                stroke='#3E4554'
                stroke-width={strokeWidth}
                stroke-linecap='round'
                stroke-linejoin='round'
            />
            <Path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z'
                stroke={stroke}
                stroke-opacity='0.2'
                stroke-width={strokeWidth}
                stroke-linecap='round'
                stroke-linejoin='round'
            />
            <G opacity='0.4'>
                <Path
                    d='M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201'
                    stroke='#3E4554'
                    stroke-width={strokeWidth}
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
                <Path
                    d='M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201'
                    stroke={stroke}
                    stroke-opacity='0.2'
                    stroke-width={strokeWidth}
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
            </G>
        </Svg>
    );
};
