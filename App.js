import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useCode, cond, eq, set } from 'react-native-reanimated';
import { withTimingTransition } from 'react-native-redash';

import Logo from './components/Logo';

export default function App() {

  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current);

  useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo scale = {scaleAnimation}/>
      </View>
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
