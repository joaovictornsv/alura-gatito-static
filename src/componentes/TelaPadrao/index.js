import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal from '../../estilos';

export default function TelaPadrao({ children }) {
  return <SafeAreaView style={estilosGlobal.preencher}>
  <StatusBar />
  <KeyboardAvoidingView
    style={estilosGlobal.preencher}
    behavior={Platform.OS === 'ios' ? "padding" : "height"}
  >
    { children }
  </KeyboardAvoidingView>
</SafeAreaView>
}