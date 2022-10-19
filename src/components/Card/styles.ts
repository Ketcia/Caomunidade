import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.marromC,
    borderRadius: 5,
    margin: 10,
    alignItems: "flex-start",
    width: "95%",
    padding: 10,
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.marrom,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    
  },
  img: {
    width: 300,
    height: 300,
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  usuario:{
    fontWeight: 'bold',
    fontSize: 18,
  }
})

export default styles