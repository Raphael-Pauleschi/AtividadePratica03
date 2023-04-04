import * as React from 'react';
import { View, StyleSheet,  } from 'react-native';
import Botao from './src/components/Botao';

export default function App() {
  return (
    <>
      <View style={style.App}>
        <View style={style.Container}>
          <Botao buttonText="/" />
          <Botao buttonText="7" />
          <Botao buttonText="4" />
          <Botao buttonText="1" />
        </View>
        <View style={style.Container}>
          <Botao buttonText="+" />
          <Botao buttonText="8" />
          <Botao buttonText="5" />
          <Botao buttonText="2" />
        </View>
        <View style={style.Container}>
          <Botao buttonText="*" />
          <Botao buttonText="9" />
          <Botao buttonText="6" />
          <Botao buttonText="3" />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10px',
  },
  App: {
    backgroundColor: '#f77ce3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
