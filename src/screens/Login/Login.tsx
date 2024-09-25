import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './LoginStyle';
import { useNavigation } from '@react-navigation/native';
import { TituloComponent } from '../../components/LoginComponents/TituloComponent';
import { InputComponent } from '../../components/LoginComponents/InputComponent';
import { ButtonComponent } from '../../components/LoginComponents/ButtonComponent';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <TituloComponent />
      </View>

      <View style={style.boxMid}>
        <Text style={style.titleInput}>Email</Text>
        {/* Usando o InputComponent para o campo de email */}
        <InputComponent placeholder="seu@email.com" />

        <Text style={style.titleInput}>Senha</Text>
        {/* Usando o InputComponent para o campo de senha */}
        <InputComponent placeholder="senha" secureTextEntry={true} />

        {/* Usando o ButtonComponent para o botão de "Entrar" */}
        <ButtonComponent 
          title="Entrar" 
          onPress={() => navigation.navigate('BottomTabRoutes')} 
        />

        {/* Usando o ButtonComponent para o botão de "Cadastrar" com o estilo secundário */}
        <ButtonComponent
          title="Cadastrar"
          onPress={() => {}}
          isPrimary={false}  // Definindo como secundário
        />

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
