import React, { useState } from "react";
import { View } from "react-native";
import YourselfTitle from '../../assets/images/yourself-title.svg';
import { FormInput } from "../../components/formInput";
import { BorderButton } from "../../components/borderButton";
import { passwordsMatch, validateEmail, validateFields, validatePasswordStrength } from "@/src/utils/validators";
import { register } from "@/src/services/api/user";
import { MessageAlert } from "@/src/components/messageAlert";
import { BackButton } from "@/src/components/backButton";
import { styles } from "./styles";

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  async function handleCadastrar() {
    
    const fieldsValidate = validateFields({email, nome, apelido, senha, confirmarSenha});
    const emailValidate = validateEmail(email);
    const passwordStrengthValidate = validatePasswordStrength(senha);
    const passwordMatchValidate = passwordsMatch(senha, confirmarSenha);

    if (!fieldsValidate.success) {
      setVisible(true);
      setMessage(fieldsValidate.message);
    } else if (!emailValidate.success) {
      setVisible(true);
      setMessage(emailValidate.message);
    } else if (!passwordStrengthValidate.success) {
      setVisible(true);
      setMessage(passwordStrengthValidate.message);
    } else if (!passwordMatchValidate.success) {
      setVisible(true);
      setMessage(passwordMatchValidate.message);
    } else {
      const {success, message} = await register(email, nome, apelido, senha);
      if (!success) {
        setVisible(true);
        setMessage(message);
      }
    }
  }

  return (
    <View
      style={styles.container}
    >
      <YourselfTitle width={200} height={100} />
      <BackButton style={styles.backButton}/>
      <FormInput label="Email" placeholder="seu@email.com" value={email} onChangeText={setEmail} type="email"/>
      <FormInput label="Nome" placeholder="Nome completo" value={nome} onChangeText={setNome}/>
      <FormInput label="Nome de usuário" placeholder="Nome de usuário" value={apelido} onChangeText={setApelido}/>
      <FormInput label="Senha" placeholder="Senha" value={senha} onChangeText={setSenha} isPassword={true}/>
      <FormInput label="Confirme a senha" placeholder="Confirme a senha" value={confirmarSenha} onChangeText={setConfirmarSenha} isPassword={true}/>
      <BorderButton title='Cadastrar' color={2} action={handleCadastrar}/>
      <MessageAlert
        type={1}
        message={message}
        visible={visible}
        onCancel={() => setVisible(false)}
      />

    </View>
    
  );
}


