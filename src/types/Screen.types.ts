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

//Adocao Stack
export type AdocaoStackParamList = {
  Adocao: undefined
  EnviarMensagem: undefined
}
type AdocaoScreenNavigationProp = StackNavigationProp<AdocaoStackParamList, 'Adocao'>
export type AdocaoTypes = {
  navigation: AdocaoScreenNavigationProp
}