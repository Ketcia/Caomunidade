import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonTopPosition:{
    position:'absolute',
    top:"5%",
    right:"5%",
  },
  textClose:{
    color:"#fff",
    fontSize:20,
  },
  collumnPreviewVisible: {
    flex:1,
    flexDirection:"column",
    padding:15,
    justifyContent:"flex-end",
  },
  rowPreviewVisible: {
    flexDirection:"row",
    justifyContent: "space-between",
  },
  buttonPreviewVisible: {
    width: 130,
    height: 40,
    alignItems:"center",
    borderRadius:4,
  },
  textPreviewVisible: {
    color:"#fff",
    fontSize:20,
  },
  buttonStartOver: {
    width: 130,
    borderRadius:4,
    backgroundColor:"#1f1",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    height: 40,
  },
  textStartOver: {
    color:"#fff",
    fontWeight:"bold",
    textAlign:"center",
  },
  startOver: {
    flex:1,
    backgroundColor: "#fff",
    justifyContent:"center",
    alignItems: "center",
  },
 
});

export default styles