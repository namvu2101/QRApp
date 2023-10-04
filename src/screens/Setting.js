import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PageContainer from '../conponents/PageContainer';
import {images} from '../constants';
import {Avatar, Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, SIZES} from '../constants';

export default function Setting() {
  const name = 'Bùi Công Dũng';
  const email = 'dungbui@gmail.com';
  const listItem = [
    {
      icon: 'account-outline',
      name: 'Thông tin',
      dec: 'Tên, ảnh đại diện, địa chỉ...',
      onPress: () => {
        Alert.alert('Thông báo', 'Chức năng chưa hoàn tiện');
      },
    },
    {
      icon: 'chat-processing-outline',
      name: 'Dịch vụ Chat',
      dec: 'Đăng ký nhận tin nhắn dịch vụ',
      onPress: () => {
        Alert.alert('Thông báo', 'Chức năng chưa hoàn tiện');
      },
    },
    {
      icon: 'inbox-full-outline',
      name: 'Quản lý dịch vụ Chat',
      dec: 'Quản lý và đăng ký dịch vụ Chat',
      onPress: () => {
        Alert.alert('Thông báo', 'Chức năng chưa hoàn tiện');
      },
    },

    {
      icon: 'account-multiple-plus-outline',
      name: 'Mời bạn bè',
      dec: 'Chia sẻ link với bạn bè',
      onPress: () => {
        Alert.alert('Thông báo', 'Chức năng chưa hoàn tiện');
      },
    },
    {
      icon: 'link-plus',
      name: 'Liên kết với tài khoản Social',
      dec: 'Google, Facebook hoặc Apple',
      onPress: () => {
        Alert.alert('Thông báo', 'Chức năng chưa hoàn tiện');
      },
    },
    {
      icon: 'key-outline',
      name: 'Đổi mật khẩu',
      dec: 'Thay đổi mật khẩu hiện tại',
      onPress: () => {
        Alert.alert('Thông báo', 'Chức năng chưa hoàn tiện');
      },
    },
    {
      icon: 'account-lock-outline',
      name: 'Khóa tài khoản tạm thời',
      dec: '',
      onPress: () => {
        Alert.alert('Thông báo', 'Chức năng chưa hoàn tiện');
      },
    },
    {
      icon: 'help-circle-outline',
      name: 'Hỗ trợ',
      dec: '',
      onPress: () => {
        Alert.alert('Thông báo', 'Vui lòng liên hệ Nam đẹp trai 0974046550');
      },
    },
  ];
  return (
    <PageContainer>
      <View style={styles.container}>
        <Pressable
          onPress={() => {}}
          style={{
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            width: 300,
          }}>
          <Avatar.Image source={images.user2} size={66} />
          <View style={{width: 180, marginHorizontal: 10}}>
            <Text style={{...FONTS.h3}}>{name}</Text>
            <Text style={{...FONTS.h4}}>{email}</Text>
          </View>
          <MaterialCommunityIcons name="qrcode-scan" size={20} color={'#000'} />
        </Pressable>

        <ScrollView>
          {listItem.map((i, index) => (
            <TouchableOpacity
              key={index}
              onPress={i.onPress}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: SIZES.width * 0.8,
                paddingVertical: 10,
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 1,
              }}>
              <Avatar.Icon icon={i.icon} size={50} color={'#FFFFFF'} />
              <View style={{marginHorizontal: 10, justifyContent: 'center'}}>
                <Text style={{...FONTS.h3}}>{i.name}</Text>
                {i.dec && (
                  <Text style={{...FONTS.h4, color: COLORS.secondaryGray}}>
                    {i.dec}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Button
        style={{marginVertical: 10, backgroundColor: 'white'}}
        textColor="#000"
        icon="logout"
        rippleColor={COLORS.white}
        labelStyle={{...FONTS.h2}}
        onPressIn={() => {
          console.log('logout');
        }}>
        Đăng xuất
      </Button>
    </PageContainer>
  );
}

const styles = StyleSheet.create({});
