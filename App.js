import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import Botao from './src/components/Botao';

export default function App() {
  return (
    <>
      <View style={style.App}>
        <View style={style.Container}>
          <Botao />
          <Botao />
          <Botao />
        </View>
        <View style={style.Container}>
          <Botao />
          <Botao />
          <Botao />
        </View>
        <View style={style.Container}>
          <Botao />
          <Botao />
          <Botao />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  App:{
    backgroundColor: '#f77ce3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
