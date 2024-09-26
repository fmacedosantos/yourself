import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabRoutes } from './bottom-tabs.routes';
import { CreateTask } from '../components/CreateTask';
import { Pomodoro } from '../components/Pomodoro';
import Login from '../screens/Login/Login';
import RegisterForm from "../screens/Cadastro/RegisterForm";
import RecuperarSenha from '../screens/RecuperarSenha/RecuperarSenha';
import { Task } from '../components/TaskAtive/Task';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterForm" component={RegisterForm} />
        <Stack.Screen name="BottomTabRoutes" component={BottomTabRoutes} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="TaskAtive" component={Task} />
        <Stack.Screen name="Pomodoro" component={Pomodoro} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

