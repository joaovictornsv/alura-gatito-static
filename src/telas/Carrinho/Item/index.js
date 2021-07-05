import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';
import estilos from './estilos';

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial }) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [total, setTotal] = useState(preco);

  useEffect(() => {
    setTotal(quantidade * preco)
  }, [quantidade])

  return <>
    <View
      style={estilos.informacao}
      onPress={() => {
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
    </View>
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
        <Botao valor="Remover do Carrinho" />
    </View>
    
    <View style={estilos.divisor} />
  </>
}