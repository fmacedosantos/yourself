import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';
import pomodoroIcon from '../../../assets/pictures/tomato-icon.png';
import { BackScreen } from '../BackScreen';
import { SummaryStats } from '../SummaryStats';

export function Pomodoro({ navigation }: any) {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(''); // Inicializa como string vazia
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    const totalSeconds = convertToSeconds(target); // Converte para segundos
    if (isCounting && count < totalSeconds) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (count >= totalSeconds) {
      setIsCounting(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isCounting, count, target]);

  const startTimer = () => {
    setCount(0);
    setIsCounting(true);
  };

  const resetTimer = () => {
    setCount(0);
    setIsCounting(false);
  };

  // Função para converter minutos para segundos
  const convertToSeconds = (time: string) => {
    const minutes = Number(time);
    return minutes * 60; // Converte minutos para segundos
  };

  const handleInputChange = (input: string) => {
    // Remove caracteres não numéricos
    const formattedInput = input.replace(/[^0-9]/g, '');

    // Atualiza o target apenas se o valor for válido
    setTarget(formattedInput); // Atualiza o target
  };

  return (
    <View style={styles.container}>
      <SummaryStats />
      <BackScreen navigation={navigation} style={styles.backButton} />
      <Text style={styles.textTitle}>CONCENTRAÇÃO</Text>
      <Text style={styles.textTimer}>
        {Math.floor(count / 60)}:{(count % 60).toString().padStart(2, '0')}
      </Text>
      <Image source={pomodoroIcon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Quantos Minutos?"
        keyboardType="numeric"
        value={target}
        onChangeText={handleInputChange}
      />
      <Button title="Iniciar" onPress={startTimer} disabled={target === ''} />
      
      {isCounting && <Text>Contando...</Text>}

      <Button title="Resetar" onPress={resetTimer} disabled={!target} />
    </View>
  );
}
