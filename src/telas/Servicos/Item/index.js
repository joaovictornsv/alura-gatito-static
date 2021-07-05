import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';
import estilos from './estilos';

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expandir, setExpandir] = useState(false);

  useEffect(() => {
    setTotal(quantidade * preco)
  }, [quantidade])

  return <>
    <TouchableOpacity
      style={estilos.informacao}
      onPress={() => {
        setExpandir(!expandir);
        setQuantidade(1);
      }}
    >
      <Text style={estilos.nome}>{ nome }</Text>
      <Text style={estilos.descricao}>{ descricao }</Text>
      <Text style={estilos.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(preco)
      }</Text>
    </TouchableOpacity>
    {expandir && 
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={setQuantidade}/>
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Total:</Text>
            <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).format(total)
            }</Text>
          </View>
        </View>
        <Botao valor="Adicionar ao Carrinho" />
    </View>
    }
    
    <View style={estilos.divisor} />
  </>
}