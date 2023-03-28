// SPDX-License-Identifier: ice License 1.0

import {IceLabel} from '@components/Labels/IceLabel';
import {COLORS} from '@constants/colors';
import {commonStyles} from '@constants/styles';
import {PAGE_HEIGHT} from '@screens/HomeFlow/Home/components/Pager';
import {miningRatesSelector} from '@store/modules/Tokenomics/selectors';
import {CoinsStackIcon} from '@svg/CoinsStackIcon';
import {MiningHammerIcon} from '@svg/MiningHammerIcon';
import {StarIcon} from '@svg/StarIcon';
import {TeamIcon} from '@svg/TeamIcon';
import {t} from '@translations/i18n';
import {parseNumber} from '@utils/numbers';
import {font} from '@utils/styles';
import React, {memo, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {rem} from 'rn-units';

import {IconValueText} from './components/IconValueText';
import {MiningRateValue} from './components/MiningRateValue';

type Props = {
  darkMode?: boolean;
};

export const MiningRate = memo(({darkMode}: Props) => {
  const miningRates = useSelector(miningRatesSelector);

  const rateValueTextStyle = useMemo(() => {
    switch (miningRates?.type) {
      case 'positive':
        return styles.miningValuePositive;

      case 'negative':
        return styles.miningValueNegative;

      default:
        return styles.miningValueNeutral;
    }
  }, [miningRates?.type]);

  if (!miningRates) {
    //TODO: add loading
    return null;
  }

  const color = darkMode ? COLORS.primaryDark : COLORS.white;

  return (
    <View style={[commonStyles.baseSubScreen, styles.container]}>
      <View style={styles.titleContainer}>
        <MiningHammerIcon color={color} />
        <Text
          style={[styles.miningRateText, darkMode && commonStyles.darkText]}>
          {t('home.mining_rate.title')}
        </Text>
      </View>
      <View style={styles.miningRate}>
        <MiningRateValue
          style={styles.miningValueContainer}
          bodyStyle={[styles.miningValueText, rateValueTextStyle]}
          decimalsStyle={[styles.miningValueDecimalsText, rateValueTextStyle]}
          signRequired
          value={
            parseNumber(miningRates?.total.amount ?? '0') *
            {
              positive: 1,
              negative: -1,
              none: 1,
            }[miningRates?.type ?? 'none']
          }
        />

        <IceLabel
          textStyle={styles.rateValueText}
          iconOffsetY={-1}
          iconSize={16}
          label={t('general.ice_per_hour')}
        />
        {!!miningRates.total.bonuses?.total && (
          <Text style={styles.rateIncreaseText}>
            +{miningRates.total.bonuses.total}%
          </Text>
        )}
      </View>
      <View style={styles.baseContainer}>
        <Text style={[styles.baseTitleText, darkMode && commonStyles.darkText]}>
          {t('home.mining_rate.base')}
        </Text>
        <MiningRateValue
          style={styles.baseValueContainer}
          bodyStyle={
            darkMode ? styles.baseValueTextDarkMode : styles.baseValueText
          }
          decimalsStyle={
            darkMode ? styles.baseDecimalsTextDarkMode : styles.baseDecimalsText
          }
          value={parseNumber(miningRates?.base.amount ?? '0')}
        />

        <IceLabel
          textStyle={
            darkMode ? styles.baseValueTextDarkMode : styles.baseValueText
          }
          color={color}
          iconOffsetY={-1}
          iconSize={12}
          label={t('general.ice_per_hour')}
        />
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <TeamIcon color={color} />

          <IconValueText
            style={styles.iconValueText}
            value={
              (miningRates?.total.bonuses?.t1 ?? 0) +
              (miningRates?.total.bonuses?.t2 ?? 0)
            }
          />
        </View>
        <View style={styles.iconContainer}>
          <StarIcon color={color} />

          <IconValueText
            style={styles.iconValueText}
            value={miningRates?.total.bonuses?.extra ?? 0}
          />
        </View>
        <View style={styles.iconContainer}>
          <CoinsStackIcon color={color} width={rem(14)} height={rem(14)} />

          <IconValueText
            style={styles.iconValueText}
            value={miningRates?.total.bonuses?.preStaking ?? 0}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.transparent,
    height: PAGE_HEIGHT + rem(30),
    marginBottom: -rem(30),
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: rem(25),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  miningRateText: {
    ...font(12, 14, 'semibold'),
    marginLeft: rem(4),
  },
  miningValueContainer: {
    marginRight: rem(4),
  },
  miningValueText: {
    ...font(17, 20.4, 'bold'),
  },
  miningValueDecimalsText: {
    alignSelf: 'flex-start',
    ...font(8, 10, 'bold'),
    marginRight: rem(4),
  },

  miningValuePositive: {
    color: COLORS.shamrock,
  },
  miningValueNegative: {
    color: COLORS.attention,
  },
  miningValueNeutral: {
    color: COLORS.white,
  },

  baseContainer: {
    marginTop: rem(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseTitleText: {
    ...font(12, 15, 'medium'),
  },
  baseValueContainer: {
    marginHorizontal: rem(4),
  },
  baseValueText: {
    ...font(12, 14.4, 'medium'),
  },
  baseValueTextDarkMode: {
    ...font(12, 14.4, 'medium', 'primaryDark'),
  },
  baseDecimalsText: {
    ...font(7, 9, 'bold'),
    alignSelf: 'flex-start',
    marginRight: rem(4),
  },
  baseDecimalsTextDarkMode: {
    ...font(7, 9, 'bold', 'primaryDark'),
    alignSelf: 'flex-start',
    marginRight: rem(4),
  },
  miningRate: {
    marginTop: rem(4),
    borderRadius: rem(16),
    paddingHorizontal: rem(20),
    paddingVertical: rem(6),
    backgroundColor: COLORS.toreaBay,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateValueText: {
    ...font(15, 19, 'medium'),
  },
  rateIncreaseText: {
    marginLeft: rem(8),
    ...font(17, 20.4, 'bold'),
    color: COLORS.shamrock,
  },
  iconsContainer: {
    marginTop: rem(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginHorizontal: rem(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconValueText: {
    marginLeft: rem(6),
    ...font(15, undefined, 'bold'),
    color: COLORS.shamrock,
  },
});