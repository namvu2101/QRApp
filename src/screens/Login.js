import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageContainer from '../conponents/PageContainer';
import {COLORS, FONTS, SIZES} from '../constants';
import UITextInput from '../conponents/UITextInput';
import UIButton from '../conponents/UIButton';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <PageContainer style={{justifyContent: 'center'}}>
      <Text style={{...FONTS.h2}}>QR APP</Text>
      <Image
        source={require('../assets/login.png')}
        style={{height: 150, width: 150, marginVertical: 20}}
        resizeMode="contain"
      />
      <Text style={{...FONTS.h3, marginBottom: 15}}>
        LOGIN TO YOUR ACCOUNT
      </Text>
      <View
        style={{
          height: SIZES.height * 0.22,
          justifyContent: 'space-around',
        }}>
        <UITextInput
          title="Your Institute Email ID"
          mode="outlined"
          outlinestyle={{borderRadius: 30, backgroundColor: '#F1F1F1'}}
        />
        <UITextInput
          title="Password"
          mode="outlined"
          outlinestyle={{borderRadius: 30, backgroundColor: '#F1F1F1'}}
        />
        <Text style={{...FONTS.h4, color: COLORS.primary, textAlign: 'right'}}>
          Forgot Password ?
        </Text>
      </View>
      <UIButton title="login" onPress={() => navigation.navigate('Splash')} />
    </PageContainer>
  );
}

const styles = StyleSheet.create({});
