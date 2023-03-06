import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for(let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View
        key={index}
      >
        { index === 0 ? (
          <View
            style={{
              width: 60,
            }}
          >
            <Entypo 
              name="plus"
              style={{
                fontSize: 40,
                color: 'black',
              }}
            />
          </View>
        ) : (
          <View>
          </View>
        )}
      </View>

    );
  }

  return (
    <View>
      <SafeAreaView
        style={{
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            width: '100%',
            padding: 10,
          }}
        >
          <ProfileBody 
            name="Johnny"
            accountName="johnny"
            profileImage={require('../../assets/images/userProfile.jpeg')}
            followers="300"
            following="35"
            post="458"
          />
        </View>

        <ProfileButton 
          id={0}
          name="Johnny"
          accountName="johnny"
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />

        <ScrollView>
          {circles}
        </ScrollView>

      </SafeAreaView>
    </View>
  );
}

export default Profile;