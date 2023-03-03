import { View, Text, Image } from 'react-native';
import React from 'react';

const ProfileBody = ({
    name,
    profileImage,
    post,
    followers,
    following,
  }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Image 
          source={profileImage}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            paddingVertical: 5,
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          {name}
        </Text>
      </View>
      
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          {post}
        </Text>
        <Text
          style={{
            color: 'black',
          }}
        >
          게시물
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          {followers}
        </Text>
        <Text
          style={{
            color: 'black',
          }}
        >
          팔로우
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          {following}
        </Text>
        <Text
          style={{
            color: 'black',
          }}
        >
          팔로잉
        </Text>
      </View>
    </View>
  );
};

export default ProfileBody;