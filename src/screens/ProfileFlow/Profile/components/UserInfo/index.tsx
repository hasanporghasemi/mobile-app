// SPDX-License-Identifier: ice License 1.0

import {User} from '@api/user/types';
import {LadderBar} from '@screens/ProfileFlow/Profile/components/UserInfo/LadderBar';
import {font} from '@utils/styles';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {rem} from 'rn-units';

type Props = {
  user: User | null;
};

export const USER_INFO_HEIGHT = rem(173);

export const UserInfo = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.usernameText} numberOfLines={1}>
        {user ? `@${user.username}` : ''}
      </Text>
      <View style={styles.ladderContainer}>
        {!!user && <LadderBar user={user} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: USER_INFO_HEIGHT,
    paddingTop: rem(67),
  },
  ladderContainer: {
    marginTop: rem(15),
    height: rem(58),
    marginBottom: rem(15),
  },
  usernameText: {
    alignSelf: 'center',
    ...font(17, 20, 'semibold'),
  },
});