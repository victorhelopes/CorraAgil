import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { StyleSheet, Text, TextInput } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function LoginLayout() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <form>
      <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="usuário"
          onChangeText={newText => setUsername(newText)}
          defaultValue={username}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
    </form>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#883e3e',
    borderWidth: 1
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',

  }
});
