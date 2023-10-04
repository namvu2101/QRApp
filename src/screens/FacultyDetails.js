import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function FacultyDetails() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: true,
    headerTitle:'Faculty Details'});
  }, []);

  return (
    <View>
      <Text>FacultyDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({})