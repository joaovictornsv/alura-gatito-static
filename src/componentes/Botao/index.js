import React from 'react';
import funcaoEstilosPadrao from './estilos';

import { TouchableOpacity, Text } from 'react-native';

export default function Botao({ pequeno=false, invertido=false, estilos, valor, acao }) {
  const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido)

  return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
    <Text style={estilosPadrao.valor}>{valor}</Text>
  </TouchableOpacity>
}