import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  buttonprimary: {
    backgroundColor: colors.marrom,
    borderRadius: 20,
    margin: 10
  },
  buttonSecondary: {
    backgroundColor: colors.verde,
    borderRadius: 20,
    margin: 10
  },
  buttonThird: {
    backgroundColor: colors.marromC,
    borderRadius: 20,
    margin: 10,
    width: '90%'
  },
  text: {
    color: colors.branco,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18
  }
})

export default styles