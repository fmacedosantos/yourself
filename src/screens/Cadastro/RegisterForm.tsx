import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Cadastro/RegisterFormStyle';
import { InputComponent } from '../../components/CadastroComponents/InputComponent';
import { ButtonComponent } from './../../components/CadastroComponents/ButtonComponent';
import { TituloComponent } from '../../components/CadastroComponents/TituloComponent';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // Temporarily removing validation logic
    alert('Cadastro realizado com sucesso!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <TituloComponent />
      </View>
      <InputComponent
        placeholder="seu@email.com"
        secureTextEntry={false}
        value={form.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <InputComponent
        placeholder="Nome completo"
        secureTextEntry={false}
        value={form.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      <InputComponent
        placeholder="Nome de usuário"
        secureTextEntry={false}
        value={form.username}
        onChangeText={(value) => handleChange('username', value)}
      />
      <InputComponent
        placeholder="Senha"
        secureTextEntry={true}
        value={form.password}
        onChangeText={(value) => handleChange('password', value)}
      />
      <InputComponent
        placeholder="Confirme a senha"
        secureTextEntry={true}
        value={form.confirmPassword}
        onChangeText={(value) => handleChange('confirmPassword', value)}
      />

      <ButtonComponent
        title="Cadastrar"
        onPress={handleSubmit}
        isPrimary={true}
      />

      <Text style={styles.alreadyHaveAccountText}>
        Já possui uma conta?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Faça login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default RegisterScreen;
