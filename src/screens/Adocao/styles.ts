import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.fundo,
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
