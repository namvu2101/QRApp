import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PageTitle(props) {
  return (
    <View
      style={{
        marginTop:22,
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 22,
        alignItems: 'center',
        width: SIZES.width,
      }}>
      <Pressable>
        <MaterialCommunityIcons
          name={props.icon}
          size={44}
          color={COLORS.secondaryBlack}
        />
      </Pressable>
      <Text style={{...FONTS.h2, marginLeft:44}}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
