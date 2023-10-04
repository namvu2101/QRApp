import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Class({route}) {
  const navigation = useNavigation();
  const className = route.params.name;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: `Class ${className}`,
    });
  }, []);
  return (
    <View>
      <Text>Class</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
