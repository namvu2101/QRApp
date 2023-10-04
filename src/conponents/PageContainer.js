import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const PageContainer = props => {
  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={{
          flex: 1,
          height: SIZES.height,
          width: SIZES.width,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          ...props.style,
        }}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PageContainer;
