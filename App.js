import * as React from 'react';
import View from 'react-native';
import Botao from './src/components/Botao';
import style from './src/components/Style'

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


