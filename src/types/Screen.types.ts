import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
  Tab: undefined;
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

//Chat Stack
export type ChatStackParamList = {
  Chat: undefined
  EnviarMensagem: undefined
}
type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamList, 'Chat'>
export type ChatTypes = {
  navigation: ChatScreenNavigationProp
}