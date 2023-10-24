import {ScrollView, View} from 'native-base';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView h="80%">
        <View bg="black" h="full" pb="60px" flexDirection="row" flexWrap="wrap">
          <Text> Hello word</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
