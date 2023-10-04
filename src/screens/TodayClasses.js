import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES, classes, images} from '../constants';
import PageContainer from '../conponents/PageContainer';
import {Avatar} from 'react-native-paper';

export default function TodayClasses() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: true, headerTitle: 'Today Classes'});
  }, []);

  const name = 'Bùi Công Dũng';
  const email = 'dungbui@gmail.com';

  const renderItem = ({item, index}) => {
    const backgroud = index % 2 == 0 ? '#97BCE8' : '#1C2D40';
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Class', {name: item.name})}
        style={{
          height: 77,
          borderColor: '#DEDEDE',
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Avatar.Text
          label={item.text}
          style={{backgroundColor: backgroud}}
          color="white"
          size={55}
        />
        <View style={{width: '50%'}}>
          <Text style={{...FONTS.h3}}>{item.name}</Text>
          <Text
            style={{...FONTS.h3, color: COLORS.secondaryGray}}
            numberOfLines={1}>
            {item.dec}
          </Text>
        </View>
        <Text style={{...FONTS.h4}}>{item.timeStart}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <PageContainer>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 22,
          width: SIZES.width,
        }}>
        <View
          style={{
            marginVertical: 22,
            flexDirection: 'row',
            marginBottom: 44,
            alignItems: 'center',
          }}>
          <Avatar.Image source={images.user2} size={55} />
          <View>
            <Text style={{...FONTS.h3, marginLeft: 33}}>{name}</Text>
            <Text style={{...FONTS.h4, marginLeft: 33}}>{email}</Text>
          </View>
        </View>

        <FlatList data={classes} renderItem={renderItem} />
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({});
