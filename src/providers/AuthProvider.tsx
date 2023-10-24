import {useNavigation} from '@react-navigation/native';
import Screens from 'constants/Screens';
import {Button, Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
export interface AuthProviderInterface {
  children: React.ReactNode;
  handleDisconnect?: boolean;
  lazyDisconnect?: boolean;
}

const AuthProvider = ({
  children,
  lazyDisconnect = true,
}: AuthProviderInterface) => {
  const account = useSelector((state: RootState) => state.auth);
  const hasLazy = lazyDisconnect && !account.account && !account.token;

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {hasLazy ? (
        <View
          h="full"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <View>
            <Text my="30px" textAlign="center" variant="textBodyBold">
              {"Vous n'êtes pas connecter"}
            </Text>
            <Button onPress={() => navigation.navigate(Screens.Login)}>
              Se connecter
            </Button>
          </View>
        </View>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

export default AuthProvider;
