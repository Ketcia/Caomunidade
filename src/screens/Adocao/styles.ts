import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor:colors.fundo,
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.marromC,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: "80%",
    height: 45,
  },
  input: {
    width: "80%"
  },
  icon: {
    fontSize: 24,
    padding: 5,
  },
  img: {
    width: 100,
    height: 100,
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor:
    colors.marrom,
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
    buttonText: {
    color: colors.branco,
    fontSize: 28,
    fontWeight: "bold",
    }
})

export default styles;
