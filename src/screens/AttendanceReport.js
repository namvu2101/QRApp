import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function AttendanceReport() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Attendance Report',
    });
  }, []);
  return (
    <View>
      <Text>AttendanceReport</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
