import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    startOver:{
        flex:1,
        backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",

    },
    buttonStartOver:{
        width:130,
        borderRadius:4,
        backgroundColor:"#ff5522",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:40,
    },
    textStartOver:{
        color:"#fff",
        fontWeight:"bold",
        textAlign:"center",
    },
    collumnPreviewVisible:{
        flex:1,
        flexDirection:"column",
        padding:15,
        justifyContent:"flex-end",
    },
    rowPreviweVisible:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    buttonPreviweVisible:{
        widht:130,
        height:40,
        alignItems:"center",
        borderRadius:4,
    },
    textPreviewVisible:{
        color: "#fff",
        fontSize:20,
    },
    buttonSavePhoto:{
        width:130,
        height:40,
        alignItems:"center",
        borderRadius:4,
    },
    buttonTop:{
        flex:1,
        backgroundColor:"transparent",
        flexDirection:"row",
    },
    buttonTopPosition:{
        position:"absolute",
        top:"5%",
        right:"5%",
    },
    textClose:{
        color:"#fff",
        fontSize:20,
    },
    buttonFlip:{
        position:"absolute",
        top:"5%",
        left:"5%",
    },
    textFlip:{
        fontSize:18,
        marginBottom:10,
        color:"#fff",
    },
    viewTakePicture:{
        position: "absolute",
        bottom: 0,
        flexDirection:"row",
        flex: 1,
        width: "100%",
        padding:20,
        justifyContent: "space-between",
    },
    positionTakePicture:{
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
    },
    buttonTakePicture:{
        width:70,
        height:70,
        bottom:0,
        borderRadius:50,
        backgroundColor:"#fff"
    },

})

export default styles