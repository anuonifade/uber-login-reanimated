import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useCode, cond, eq, set, interpolate } from 'react-native-reanimated';
import { withTimingTransition } from 'react-native-redash';

import Logo from './components/Logo';
import {SCREEN_HEIGHT, LOGIN_VIEW_HEIGHT} from './constants/Constants';

export default function App() {

  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current);

  const translateY = interpolate(scaleAnimation, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT, SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT],
  })

  useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo scale = {scaleAnimation}/>
      </View>
      <Animated.View
        style={{
          backgroundColor: 'white',
          ...StyleSheet.absoluteFill,
          transform: [{ translateY }],
        }}
      >
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2289d6',
  },
  logoContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
