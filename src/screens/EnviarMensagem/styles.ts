import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "80%",
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: colors.marrom,
        borderRadius: 5,
        margin: 10,
    },
    label: {
        height: 2
    },
    select: {
        width: "80%",
    },
    selectTopico: {
        borderWidth: 1,
        borderColor: colors.marrom,
        borderRadius: 5,
        padding: 10,
        height: 70
    },
    imagem: {
        flexDirection: "row",
    },
    img: {
        width: 100,
        height: 100,
    },
    buttonImage: {
        margin: 10,
    },
    buttonTop: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    buttonTopPosition: {
        position: "absolute",
        top: "5%",
        right: "5%",
    },
    textClose: {
        color: colors.branco,
        fontSize: 20,
    },
    buttonFlip: {
        position: "absolute",
        top: "5%",
        left: "5%",
    },
    textFlip: {
        fontSize: 18,
        marginBottom: 10,
        color: colors.branco,
    },
    viewTakePicture: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
    },
    positionTakePicture: {
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
    },
    buttonTakePicture: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: colors.branco,
    },
});

export default styles
})