import React from 'react'
import {
  Montserrat_400Regular as MontserratRegular,
  Montserrat_500Medium as MontserratMedium,
  Montserrat_600SemiBold as MontserratSemibold,
  Montserrat_700Bold as MontserratBold,
  Montserrat_900Black as MontserratBlack,
} from '@expo-google-fonts/montserrat'
import { Text } from 'react-native'
import { useFonts } from 'expo-font'

import { ThemeProvider } from './src/hooks/theme'
import Home from './src/home'

export default function App() {
  let [fontsLoaded] = useFonts({
    MontserratRegular,
    MontserratMedium,
    MontserratSemibold,
    MontserratBold,
    MontserratBlack
  })

  if ( !fontsLoaded ) return <Text>carregando...</Text>

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}