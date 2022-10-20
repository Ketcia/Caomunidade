import { StyleSheet } from "react-native"
import colors from "../../styles/colors";
import Button from "../../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fundo,
    resizeMode: "cover",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.preto,
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    padding: 5,
    color:colors.branco
  },
  link: {
    fontSize: 20,
    color:colors.branco
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  card:{
    flexDirection: "row",
    backgroundColor: colors.marrom,
    margin:10,
    borderRadius: 5,
    padding:5,
    width:"90%",
    
  },
  button:{
    width:"90%",
  }
})

export default styles