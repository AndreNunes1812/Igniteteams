import {StatusBar} from 'react-native';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components/native';

import {Loading} from '@components/Loading';
import theme from './src/theme';
import {Groups} from '@screens/Groups';

export default function App() {
  const [fontsLoaded] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
