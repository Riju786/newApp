/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import localizationData from './localization.json';

let strings = new LocalizedStrings(localizationData);

const HomeScreen = ({navigation}) => {
  const [language, setLanguage] = useState('en-US');
  console.log('strings hgchc', strings);

  useEffect(() => {
    const translatePage = async () => {
      const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
      console.log('saved language', savedLanguage);

      if (savedLanguage) {
        strings.setLanguage(savedLanguage);
        setLanguage(savedLanguage);
      }
      const currentLang = strings.getLanguage();
      console.log('current language', currentLang);
    };
    translatePage();
  }, [language]);

  return (
    <View style={{padding: 20}}>
      <Text>HomeScreen</Text>
      <Text>{strings.how}</Text>
      <Text>{strings.boiledEgg}</Text>
      <Text>{strings.softBoiledEgg}</Text>
      <Text>{strings.choice}</Text>
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
};
export default HomeScreen;
