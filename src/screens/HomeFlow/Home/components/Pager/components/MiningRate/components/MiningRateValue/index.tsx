// SPDX-License-Identifier: ice License 1.0

import {AnimatedNumberText} from '@components/AnimatedNumberText';
import {FormattedNumber} from '@components/Labels/FormattedNumber';
import {formatNumber} from '@utils/numbers';
import React, {memo, useCallback} from 'react';
import {StyleProp, TextStyle} from 'react-native';

interface Props {
  style?: StyleProp<TextStyle>;
  bodyStyle?: StyleProp<TextStyle>;
  decimalsStyle?: StyleProp<TextStyle>;
  value: number;
  signRequired?: boolean;
}

export const MiningRateValue = memo(
  ({style, bodyStyle, decimalsStyle, value, signRequired = false}: Props) => {
    const NumberComponent = useCallback(
      ({animatedValue}) => {
        const formattedValue = `${
          animatedValue > 0 && signRequired ? '+' : ''
        }${formatNumber(animatedValue, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
        return (
          <FormattedNumber
            trim
            containerStyle={style}
            bodyStyle={bodyStyle}
            decimalsStyle={decimalsStyle}
            number={formattedValue}
          />
        );
      },
      [bodyStyle, decimalsStyle, signRequired, style],
    );

    return (
      <AnimatedNumberText value={value} NumberComponent={NumberComponent} />
    );
  },
);
