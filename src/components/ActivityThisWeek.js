import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FriendsProfileData } from './Database';
import { useNavigation } from '@react-navigation/core';

const ActivityThisWeek = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        이번 주
      </Text>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
        }}
      >
        {FriendsProfileData.slice(0,3).map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.push('FriendProfile', {
                name: data.name,
                profileImage: data.profileImage,
                follow: data.follow,
                post: data.posts,
                followers: data.followers,
                following: data.following,
              })}
              key={index}
            >
              <Text
                style={{
                  color: 'black',
                }}
              >{data.name}{" "}</Text>
            </TouchableOpacity>
          );
        })}
        <Text
          style={{
            color: 'black',
          }}
        >
          님이 팔로우 하기 시작했습니다.
        </Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;