// SPDX-License-Identifier: ice License 1.0

import {HEADER_HEIGHT} from '@navigation/components/Header';
import {AVATAR_SIZE} from '@screens/ProfileFlow/Profile/components/AvatarHeader';
import {ViewStyle} from 'react-native';
import {
  AnimatedStyleProp,
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {rem} from 'rn-units';

export const AVATAR_RADIUS = rem(41);
const AVATAR_SMALL_SIZE = rem(36);
const AVATAR_SMALL_RADIUS = rem(16);
const SCROLL_STEP_1 = 140;
const MAX_SCROLL = 160;
export const PEN_SIZE = rem(32);

type Params = {
  scrollY: SharedValue<number>;
};

export const useAnimatedStyles = ({scrollY}: Params) => {
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const size = interpolate(
      scrollY.value,
      [0, MAX_SCROLL],
      [AVATAR_SIZE, AVATAR_SMALL_SIZE],
      Extrapolate.CLAMP,
    );

    const borderWidth = interpolate(
      scrollY.value,
      [0, MAX_SCROLL],
      [5, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      scrollY.value,
      [0, MAX_SCROLL],
      [AVATAR_RADIUS, AVATAR_SMALL_RADIUS],
      Extrapolate.CLAMP,
    );

    const marginTop = interpolate(
      scrollY.value,
      [0, MAX_SCROLL],
      [AVATAR_SIZE / 2 + HEADER_HEIGHT / 2 + 8, 0],
      Extrapolate.CLAMP,
    );

    return {height: size, width: size, borderWidth, borderRadius, marginTop};
  });

  const penAnimatedStyle = useAnimatedStyle(() => {
    const size = interpolate(
      scrollY.value,
      [0, MAX_SCROLL / 2],
      [PEN_SIZE, 0],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      scrollY.value,
      [0, MAX_SCROLL / 2],
      [1, 0],
      Extrapolate.CLAMP,
    );

    return {
      height: size,
      width: size,
      opacity,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [130, SCROLL_STEP_1],
      [0, 1],
      Extrapolate.CLAMP,
    );

    const fontSize = interpolate(
      scrollY.value,
      [0, SCROLL_STEP_1],
      [0.01, 17],
      Extrapolate.CLAMP,
    );

    const marginLeft = interpolate(
      scrollY.value,
      [0, MAX_SCROLL],
      [0, 12],
      Extrapolate.CLAMP,
    );

    return {opacity, fontSize, marginLeft};
  });

  const lettersAvatarStyle: AnimatedStyleProp<ViewStyle> = useAnimatedStyle(
    () => {
      const opacity = interpolate(
        scrollY.value,
        [0, 5],
        [1, 0],
        Extrapolate.CLAMP,
      );

      return {opacity};
    },
  );

  const iconAvatarStyle: AnimatedStyleProp<ViewStyle> = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, MAX_SCROLL],
      [1, 0],
      Extrapolate.CLAMP,
    );

    return {opacity};
  });

  return {
    imageAnimatedStyle,
    penAnimatedStyle,
    textStyle,
    lettersAvatarStyle,
    iconAvatarStyle,
  };
};