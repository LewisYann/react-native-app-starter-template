import {useCallback, useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

const useScroll = () => {
  const [isScrollingEnd, setScrollingEnd] = useState(false);
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
      const isEndOfScroll =
        layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
      setScrollingEnd(isEndOfScroll);
    },
    [],
  );
  return [handleScroll, isScrollingEnd];
};

export default useScroll;
