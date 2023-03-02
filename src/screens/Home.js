import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import Post from '../components/Post';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar 
        backgroundColor='white'
        barStyle='dark-content'
      />
      
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '500',
              color: 'black',
            }}
          >
            Instagram
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FontAwesome 
            name='plus-square-o' 
            style={{ 
              fontSize: 24, 
              paddingHorizontal: 15, 
              color: 'black'
            }}
          />
          <Feather
            name='navigation' 
            style={{ 
              fontSize: 24,
              color: 'black'
            }}
          />
        </View>
      </View>

      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({});