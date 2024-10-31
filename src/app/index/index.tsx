import { useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { COLORS } from "../../constants/Colors";
import { FormInput } from "../../components/formInput";
import YourselfTitle from '../../assets/images/yourself-title.svg';
import { router } from "expo-router";
import { SolidButton } from '../../components/solidButton';
import { BorderButton } from '../../components/borderButton';
import { styles } from './styles';
import { validateEmail, validateFields } from '@/src/utils/validators';
import { LoadFont } from '@/src/utils/loadFont';
import { forgotPassword, login } from '@/src/services/api/auth';

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fontsLoaded = LoadFont();
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={COLORS.ORANGE} />;
  }

  function handleEnter() {
  
    if (validateFields({email, senha}) && validateEmail(email)) {
      login(email, senha);
    }
  }

  function handleForgotPassword() {

    if (!validateFields({email}) && !validateEmail(email)) {
      forgotPassword(email);
    }
  }

  function handleGoToRegister() {
    router.navigate('/register');
  }

  return (
    <View style={styles.container}>
      <YourselfTitle width={200} height={100} />

      <FormInput
        label="Email"
        placeholder="seu@email.com"
        value={email}
        onChangeText={setEmail}
      />
      <FormInput
        label="Senha"
        placeholder="senha"
        isPassword={true}
        value={senha}
        onChangeText={setSenha}
      />

      <SolidButton title='Entrar' action={handleEnter}/>
      <BorderButton title='Cadastrar' color={1} action={handleGoToRegister}/>

      <Text
        style={styles.forget}
        onPress={handleForgotPassword} 
      >
        Esqueceu a senha?
      </Text>
    </View>
  );
}


