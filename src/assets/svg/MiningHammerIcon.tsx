// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';
import {rem} from 'rn-units';

export const MiningHammerIcon = ({
  width = rem(17),
  height = rem(16),
  color = COLORS.white,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill={color} {...props}>
    <G clipPath="url(#a)" fill={color}>
      <Path d="M5.42 3.677a.218.218 0 0 0 .106-.294l-.099-.2a.227.227 0 0 0-.3-.104l-3.61 1.704a.218.218 0 0 0-.106.295l.099.2c.054.11.188.156.3.103l3.61-1.704ZM7.16 1.793c.034.04.07.067.088.102.177.356.351.713.524 1.07.046.097.016.177-.083.224l-1.362.637c-.104.048-.184.02-.234-.08-.173-.352-.345-.705-.516-1.058-.051-.105-.022-.181.086-.232.451-.212.903-.423 1.356-.633.04-.019.09-.02.14-.03ZM6.74 1.601l-.818.382c-.006-.01-.018-.03-.028-.051L5.078.259a.278.278 0 0 1-.034-.114c0-.116.134-.186.238-.118.159.102.318.207.461.33.407.347.721.769.989 1.225a.116.116 0 0 1 .008.019ZM6.866 3.923l.823-.385c.025.064.053.134.078.205.189.53.31 1.074.285 1.64-.003.08-.014.16-.025.24-.012.09-.06.142-.135.153-.075.01-.132-.024-.174-.11-.219-.446-.437-.893-.654-1.34l-.198-.403ZM8.5 16l.748-4.991L8.5 8.502l-.748 2.507.748 4.99ZM16.5 8l-4.991-.748L9.002 8l2.507.748L16.5 8ZM.5 8l4.991.748L7.998 8 5.49 7.252.5 8ZM12.722 3.778l-2.64 1.556-1.229 2.308 2.294-1.257 1.575-2.607ZM2.877 13.691l4.04-3.025 1.23-2.309-2.294 1.258-2.976 4.076ZM14.19 13.623l-3.024-4.04-2.309-1.23 1.258 2.294 4.076 2.976Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color} transform="translate(.5)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);