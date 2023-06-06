// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {rem} from 'rn-units';

export const MembersIcon = (props: SvgProps) => (
  <Svg
    width={rem(10)}
    height={rem(10)}
    fill="none"
    viewBox="0 0 10 10"
    {...props}>
    <Path
      d="M5.5 4C5.5 5.10469 4.60469 6 3.5 6C2.39531 6 1.5 5.10469 1.5 4C1.5 2.89531 2.39531 2 3.5 2C4.60469 2 5.5 2.89531 5.5 4ZM0 9.53594C0 7.99687 1.24688 6.75 2.78594 6.75H4.21406C5.75313 6.75 7 7.99687 7 9.53594C7 9.79219 6.79219 10 6.53594 10H0.464063C0.207813 10 0 9.79219 0 9.53594ZM9.52031 10H7.36562C7.45 9.85313 7.5 9.68281 7.5 9.5V9.375C7.5 8.42656 7.07656 7.575 6.40938 7.00313C6.44688 7.00156 6.48281 7 6.52031 7H7.47969C8.87187 7 10 8.12812 10 9.52031C10 9.78594 9.78438 10 9.52031 10ZM6.75 6C6.26562 6 5.82812 5.80313 5.51094 5.48594C5.81875 5.07031 6 4.55625 6 4C6 3.58125 5.89688 3.18594 5.71406 2.83906C6.00469 2.62656 6.3625 2.5 6.75 2.5C7.71719 2.5 8.5 3.28281 8.5 4.25C8.5 5.21719 7.71719 6 6.75 6Z"
      fill={props.color ?? COLORS.secondary}
    />
  </Svg>
);