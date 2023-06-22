import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        width:"80%",
        height:50,
        backgroundColor:"white",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingHorizontal:20
    },
    logo:{
        width:25,
        height:25
    },
    textContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize:18,
        color:"black"
    }
})