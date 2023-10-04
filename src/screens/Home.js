import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import PageContainer from '../conponents/PageContainer';
import PageTitle from '../conponents/PageTitle';
import {Avatar} from 'react-native-paper';
import {images} from '../constants';
import {COLORS, FONTS, SIZES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const name = 'Bùi Công Dũng';
  const email = 'dungbui@gmail.com';
  const navigation = useNavigation();
  const list_items = [
    {
      name: 'Today’s Classes',
      onPress: () => {
        navigation.navigate('TodayClasses');
      },
    },
    {
      name: 'Check Attendance Report',
      onPress: () => {
        navigation.navigate('AttendanceReport');
      },
    },
    {
      name: 'Faculty Details',
      onPress: () => {
        navigation.navigate('FacultyDetails');
      },
    },
    {
      name: 'Class Details',
      onPress: () => {
        navigation.navigate('ClassDetails');
      },
    },
  ];
  return (
    <PageContainer>
      <PageTitle title="Attendity" icon="home" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 22,
          width: SIZES.width,
        }}>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            marginBottom: 44,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Avatar.Image source={images.user2} size={55} />
          <View>
            <Text style={{...FONTS.h3}}>{name}</Text>
            <Text style={{...FONTS.h4}}>{email}</Text>
          </View>
          <Pressable onPress={()=>navigation.navigate('Settings')}>
            <MaterialCommunityIcons
              name="account-cog"
              size={30}
              color="black"
            />
          </Pressable>
        </View>

        <Text style={{...FONTS.h1, textAlign: 'center'}}>Hi, {name}</Text>
        <Text style={{...FONTS.h2, color: COLORS.primary, textAlign: 'center'}}>
          Welcome to your Class
        </Text>
        <View
          style={{
            marginVertical: 12,
          }}>
          {list_items.map(item => (
            <Pressable
              onPress={item.onPress}
              style={{
                flexDirection: 'row',
                height: 55,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              key={item.name}>
              <Text style={{...FONTS.h2}}>{item.name}</Text>
              <MaterialCommunityIcons
                name="arrow-right-bold"
                size={20}
                color="black"
              />
            </Pressable>
          ))}
        </View>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({});
