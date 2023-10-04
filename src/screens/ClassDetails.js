import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function ClassDetails() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: true,
    headerTitle:'Class Details'});
  }, []);
  return (
    <View>
      <Text>ClassDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({})