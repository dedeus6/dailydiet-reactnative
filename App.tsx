import { ThemeProvider } from 'styled-components';;

import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';
import { Home } from '@screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Home /> : <Text>Deu ruim</Text>}
    </ThemeProvider>
  );
}