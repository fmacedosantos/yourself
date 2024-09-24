import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './RecuperarSenhaStyle';
import { TituloComponent } from '../../components/LoginComponents/TituloComponent';
import { InputComponent } from '../../components/LoginComponents/InputComponent';
import { ButtonComponent } from '../../components/LoginComponents/ButtonComponent';

export default function RecuperarSenha({ navigation }: any) {
  return (
    <View style={style.container}>
      {/* Título */}
      <View style={style.boxTop}>
        <TituloComponent />
      </View>

      {/* Inputs e botão */}
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Email</Text>
        <InputComponent placeholder="Digite seu e-mail" />
        <ButtonComponent title="Enviar" onPress={() => alert('Link de recuperação enviado!')} />
      </View>

      {/* Botão de voltar para o login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={style.voltarLogin}>Voltar ao login</Text>
      </TouchableOpacity>
    </View>
  );
}
