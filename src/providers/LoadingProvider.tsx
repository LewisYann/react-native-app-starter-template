import React from 'react';
import {View, Spinner, PresenceTransition} from 'native-base';
import {SafeAreaView, ViewProps} from 'react-native';

interface LoadingProviderInterface extends ViewProps {
  children: React.ReactNode;
  isLoading?: boolean;
}
const LoadingProvider = ({
  children,
  isLoading = false,
  ...props
}: LoadingProviderInterface) => {
  if (isLoading) {
    return (
      <View
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        alignContent="center"
        w="full"
        h="200px">
        <Spinner color="primary.100" />
      </View>
    );
  }

  return (
    <SafeAreaView {...props}>
      <PresenceTransition
        visible={!isLoading}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 100,
          },
        }}>
        {isLoading ? (
          <View
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            alignContent="center"
            w="full"
            h="200px">
            <Spinner color="primary.100" />
          </View>
        ) : (
          <View>{children}</View>
        )}
      </PresenceTransition>
    </SafeAreaView>
  );
};

export default LoadingProvider;
