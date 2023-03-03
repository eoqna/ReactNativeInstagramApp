import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';

const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, post, followers, following} = route.params;

  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Ionic 
              name="arrow-back"
              style={{
                fontSize: 20,
                color: 'black',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '92%'
            }}
          >
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              {name}
            </Text>
            <Feather 
              name="more-vertical"
              style={{
                fontSize: 20,
                color: 'black',
              }}
            />
          </View>
        </View>

        <ProfileBody 
          name={name}
          profileImage={profileImage}
          post={post}
          followers={followers}
          following={following}
        />

        <ProfileButton id={1} />

      </View>
    </SafeAreaView>
  );
}

export default FriendProfile;

const styles = StyleSheet.create({});