// src/services/authUserService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../../firebase-init.js';
import { router } from 'expo-router';
import { PATHS, ROUTES } from '@/src/constants/Routes';
import { fetchWithAuth } from '@/src/utils/fetchWithAuth';

interface Atividade {
  id: string;
  titulo: string;
  categoria: string;
  pontos: number;
  dificuldade: number;
}

interface ResumoEstatisticas {
  ofensiva: number;
  pontos: number;
}

interface MelhoresEstatisticas {
  maiorOfensiva: number;
  totalPontos: number;
}

interface Preferencias {
  preferenciaConcentracao: number;
  preferenciaDescanso: number;
}

interface Informacoes {
  nome: string;
  apelido: string;
  anoRegistro: number;
}

interface UpdateUserData {
  nome?: string;
  apelido?: string;
  novaSenha?: string;
}

const erroServidor = 'Encontramos problemas ao conectar com o servidor.';

export async function register(email: string, nome: string, apelido: string, senha: string) { // ok
    try {
      const response = await fetch(ROUTES(PATHS.REGISTER_USER), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nome, apelido, senha }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const { success, message } = await login(email, senha);
        router.replace('/(tabs)/screens/home');
        return { success: success, message: message };
      } else {
        return { success: false, message: data.message || 'Erro ao realizar cadastro.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }

  export async function login(email: string, senha: string) { // ok
    try {
      const response = await fetch(ROUTES(PATHS.AUTHENTICATE), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      const success = data.success;
      const message = data.message;

      if (response.ok) {

        if (success) {
          const userCredential = await firebase.auth().signInWithEmailAndPassword(email, senha);
  
          if (userCredential.user) {
            const token = await userCredential.user.getIdToken(true);
            await AsyncStorage.setItem('jwt', token);
            await AsyncStorage.setItem('loginDate', new Date().toISOString());
            
            return { success: success, message: message };
          } else {
            return { success: false, message: message || 'Erro ao autenticar usuário.' };
          }
        }  else {
          return { success: false, message: message || 'Erro ao autenticar usuário.' };
        }
        
      } else {
        return { success: false, message: message || 'Erro ao autenticar usuário.' };
      }
      
    } catch {
      return { success: false, message: erroServidor };
    }
  }

  export async function forgotPassword(email: string) { // ok
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      return { success: true, message: 'E-mail de redefinição de senha enviado.' };
    } catch {
      return { success: false, message: 'Erro ao enviar e-mail de redefinição de senha.' };
    }
  }

  export async function logout() {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      if (jwt) {
        await AsyncStorage.removeItem('jwt');
      }
  
      const loginDate = await AsyncStorage.getItem('loginDate');
      if (loginDate) {
        await AsyncStorage.removeItem('loginDate');
      }
  
      await firebase.auth().signOut(); 
      router.replace('/');
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
    }
  }

  export async function reauthenticateUser(senha: string) { // ok
    try {
      const response = await fetchWithAuth(ROUTES(PATHS.REAUTHENTICATE), {
        method: 'POST',
        body: JSON.stringify({ senha }),
      });

      const data = await response.json();
      const success = data.success;
      const message = data.message;

      if (response.ok) {
        if (success) {
          const user = firebase.auth().currentUser;
      
          if (!user || !user.email) {
            return { success: false, message: 'Usuário não encontrado.' };
          }
  
          await firebase.auth().signInWithEmailAndPassword(user.email, senha);
      
          return { success: true, message: 'Reautenticação realizada com sucesso!' };
        } else {
          return { success: false, message: message || 'Erro ao autenticar usuário.' };
        }
      } else {
        return { success: false, message: message || 'Erro ao reautenticar usuário.' };
      }
    } catch {
        return { success: false, message: erroServidor };
    }
  }

  export async function checkToken() { //ok
    try {
      const lastLoginDateString = await AsyncStorage.getItem('loginDate');
      const lastLoginDate = lastLoginDateString ? new Date(lastLoginDateString) : null;

      const currentDate = new Date();
      const daysSinceLastLogin = lastLoginDate 
        ? Math.floor((currentDate.getTime() - lastLoginDate.getTime()) / (1000 * 60 * 60 * 24))
        : null;

      const response = await fetchWithAuth(ROUTES(PATHS.AUTHENTICATE_JWT), {
        method: 'POST',
      });

      const data = await response.json();
      const success = data.success;
      const message = data.message;

      if (response.ok) {
        if (!success) {
          console.log(message);
          if (message === "Sessão expirada. Faça login novamente.") {
            if (daysSinceLastLogin !== null && daysSinceLastLogin < 5) {
              try {
                const user = firebase.auth().currentUser;
                if (!user) {
                  await logout();
                  return { success: false, message: 'Usuário não autenticado.' };
                }
    
                const newToken = await user.getIdToken(true);
                await AsyncStorage.setItem('jwt', newToken);
                return { success: true, message: 'Token renovado com sucesso!' };
              } catch {
                  await logout();
                  return { success: false, message: 'Não foi possível renovar a sessão.' };
              }
            } else {
              await logout();
              return { success: false, message: 'Sessão expirada. Faça login novamente.' };
            }
          } else {
            return { success: false, message: 'Usuário não autenticado!' };
          }
        } else {
          return { success: true, message: 'Usuário autenticado com sucesso!' };
        }
      } else {
        return { success: false, message: message || 'Erro ao autenticar usuário.' };
      }
    } catch {
      await logout();
      return { success: false, message: 'Erro na verificação da sessão.' };
    }
  }

  export async function atualizarUsuario(userData: UpdateUserData) {
    try {
      const filteredData = Object.fromEntries(
        Object.entries(userData).filter(([_, value]) => value !== undefined && value !== '')
      );

      if (Object.keys(filteredData).length === 0) {
        return { success: false, message: 'Nenhum dado fornecido para atualização.' };
      }

      const response = await fetchWithAuth(ROUTES(PATHS.UPDATE_USER), {
        method: 'PATCH',
        body: JSON.stringify(filteredData),
      });

      if (response.ok) {
        return { success: true, message: 'Dados atualizados com sucesso!' };
      } else {
        const data = await response.json();
        return { success: false, message: data.message || 'Erro ao atualizar dados.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }

  export async function carregarUsuario(setInformacoes: (informacoes: Informacoes) => void) {
    try {
      const response = await fetchWithAuth(ROUTES(PATHS.SHOW_USER));
      const data = await response.json();

      if (response.ok && data.data) {
        setInformacoes({
          nome: data.data.nome,
          apelido: data.data.apelido,
          anoRegistro: data.data.anoRegistro,
        });
        return { success: true, message: 'Dados carregados com sucesso!' };
      } else {
        return { success: false, message: data.message || 'Erro ao buscar informações do usuário.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }

  export async function cadastrarAtividade(
    titulo: string,
    descricao: string,
    dificuldade: number,
    categoria: string,
    tempoConcentracao: number
  ) {
    try {
      const response = await fetchWithAuth(ROUTES(PATHS.REGISTER_ACTIVITY), {
        method: 'POST',
        body: JSON.stringify({ titulo, descricao, dificuldade, categoria, tempoConcentracao }),
      });

      if (response.ok) {
        return { success: true, message: 'Atividade cadastrada com sucesso!' };
      } else {
        const data = await response.json();
        return { success: false, message: data.message || 'Erro ao cadastrar atividade.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }

  export async function carregarAtividades(setAtividades: (atividades: Atividade[]) => void) {
    try {
      const response = await fetchWithAuth(ROUTES(PATHS.SHOW_ACTIVITIES));
      const data = await response.json();
  
      if (response.ok && data.data) {
        setAtividades(data.data as Atividade[]);
        return { success: true, message: 'Atividades carregadas com sucesso!' };
      } else {
        return { success: false, message: 'Erro ao buscar atividades.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }
  
  export async function carregarResumoEstatisticas(
    setResumoEstatisticas: (resumo: ResumoEstatisticas) => void
  ) {
    try {
      const response = await fetchWithAuth(ROUTES(PATHS.SHOW_STATS));
      const data = await response.json();
  
      if (response.ok && data.data) {
        setResumoEstatisticas({
          ofensiva: data.data.ofensiva,
          pontos: data.data.pontos,
        });
        return { success: true, message: 'Resumo estatístico carregado com sucesso!' };
      } else {
        return { success: false, message: 'Erro ao buscar resumo estatístico.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }
  
  export async function carregarMelhoresEstatisticas(
    setMelhoresEstatisticas: (melhores: MelhoresEstatisticas) => void
  ) {
    try {
      const response = await fetchWithAuth(ROUTES(PATHS.SHOW_STATS));
      const data = await response.json();
  
      if (response.ok && data.data) {
        setMelhoresEstatisticas({
          maiorOfensiva: data.data.maiorOfensiva,
          totalPontos: data.data.totalPontos,
        });
        return { success: true, message: 'Melhores estatísticas carregadas com sucesso!' };
      } else {
        return { success: false, message: 'Erro ao buscar melhores estatísticas.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }
  
  export async function carregarPreferencias(setPreferencias: (preferencias: Preferencias) => void) {
    try {
      const response = await fetchWithAuth(ROUTES(PATHS.SHOW_PREFERENCES));
      const data = await response.json();
  
      if (response.ok && data.data) {
        setPreferencias({
          preferenciaConcentracao: data.data.preferenciaConcentracao,
          preferenciaDescanso: data.data.preferenciaDescanso,
        });
        return { success: true, message: 'Preferências carregadas com sucesso!' };
      } else {
        return { success: false, message: 'Erro ao buscar preferências.' };
      }
    } catch {
      return { success: false, message: erroServidor };
    }
  }
  

