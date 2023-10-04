import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FONTS, SIZES} from '../constants';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 500);
  }, []);
  return (
    <LinearGradient
      colors={['#97BCE8', '#2867B0']}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: SIZES.height * 0.6,
          alignItems: 'center',
          marginVertical: 44,
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={require('../assets/Attendity.png')}
          style={{height: 80, width: 80}}
        />
        <Text style={{...FONTS.h1, color: '#1C2D40'}}>Loading...</Text>

        <ActivityIndicator size={55} color="white" />
        <Text style={{...FONTS.h2, color: '#1C2D40'}}>
          Mark you attendance at
        </Text>
        <Text style={{...FONTS.h2, color: '#1C2D40', fontWeight: 'bold'}}>
          Attendity
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
