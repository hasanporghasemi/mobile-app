// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {rem} from 'rn-units';

export const PingIcon = ({color, ...props}: SvgProps) => (
  <Svg
    width={rem(11)}
    height={rem(14)}
    fill={'none'}
    viewBox={'0 0 11 14'}
    {...props}>
    <Path
      d={
        'M6.106 1.277c0-.226.008-.464-.002-.702A.607.607 0 0 0 5.507 0a.595.595 0 0 0-.418.163.624.624 0 0 0-.193.412c-.01.185-.004.371-.005.556v.14c-.31.092-.611.153-.891.269-1.58.653-2.498 1.847-2.742 3.574a4.469 4.469 0 0 0-.032.613c-.003 1.084 0 2.167-.005 3.25a.366.366 0 0 1-.091.227c-.297.317-.603.626-.909.935-.202.204-.28.439-.174.718.097.258.31.39.627.39h9.652c.314 0 .53-.134.627-.39.105-.28.027-.514-.175-.718-.302-.306-.599-.617-.904-.92a.322.322 0 0 1-.1-.256c.002-1.103.005-2.206 0-3.31-.008-1.899-1.122-3.518-2.854-4.145-.255-.092-.522-.149-.814-.23ZM6.716 12.506H4.29c-.044.635.505 1.211 1.176 1.243.666.031 1.245-.539 1.249-1.243Z'
      }
      fill={color ?? COLORS.primaryDark}
    />
  </Svg>
);