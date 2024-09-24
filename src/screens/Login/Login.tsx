import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { style } from './LoginStyle';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.text}>Y🔥ourself</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.titleInput}>Email</Text>
        <View style={style.BoxInput}>
          <TextInput style={style.input} placeholder="seu@email.com" />
        </View>

        <Text style={style.titleInput}>Senha</Text>
        <View style={style.BoxInput}>
          <TextInput style={style.input} placeholder="senha" secureTextEntry={true} />
        </View>

        <TouchableOpacity
          style={style.buttonEntrar}
          onPress={() => navigation.navigate('BottomTabRoutes')}
        >
          <Text style={style.buttonEntrarText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonCadastrar}>
          <Text style={style.buttonCadastrarText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={style.esqueceu}>
          Esqueceu a{' '}
          <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
            <Text style={style.senha}>senha</Text>
          </TouchableOpacity>?
        </Text>
      </View>
    </View>
  );
}
