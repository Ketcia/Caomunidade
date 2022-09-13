import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.fundo,
  },
  text:{
    margin:10,
    backgroundColor:colors.marromC,
    padding:5,
    borderRadius:15
  }
})

export default styles