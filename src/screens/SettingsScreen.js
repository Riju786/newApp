import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = ({navigation}) => {
  const onSaveLanguage = async lang => {
    try {
      await AsyncStorage.setItem('selectedLanguage', lang);
      console.log('language saved to async storage ');
      const toCheck = await AsyncStorage.getItem('selectedLanguage');
      console.log('saved language inasync :', toCheck);

      navigation.navigate('Home');
    } catch (error) {
      console.log('error while saving selected language', error);
    }
  };
  return (
    <View style={{padding: 10}}>
      <Text>settingScreen</Text>
      <Button
        title="Switch to Italian"
        onPress={() => {
          onSaveLanguage('it');
        }}
      />
      <Button
        title="Switch to English "
        onPress={() => {
          onSaveLanguage('en');
        }}
      />
      <Button
        title="Swith to French"
        onPress={() => {
          onSaveLanguage('fr');
        }}
      />
    </View>
  );
};
export default SettingsScreen;
