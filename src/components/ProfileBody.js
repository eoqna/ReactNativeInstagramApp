import { View, Text, Image } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const ProfileBody = ({
    name,
    profileImage,
    accountName,
    post,
    followers,
    following,
  }) => {
  return (
    <View>
      {accountName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                {accountName}
              </Text>
              <Feather 
                name="chevron-down"
                style={{
                  fontSize: 20,
                  color: 'black',
                  paddingHorizontal: 5,
                  opacity: 0.5,
                }}
              />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Feather 
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 5,
              }}
            />
            <Feather 
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </View>
        </View>
      ) : null}
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
            ?????????
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
            ?????????
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
            ?????????
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;