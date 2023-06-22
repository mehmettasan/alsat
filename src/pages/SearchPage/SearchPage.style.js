import { StyleSheet } from "react-native";

export default StyleSheet.create({
    productContainer:{
        paddingHorizontal:10,
        alignItems:"flex-start",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        flex:1
    },
    title:{
        color:"black",
        fontWeight:"bold",
        fontSize:35
    },
    titleContainer:{
        padding:10,
    },
    textInput: {
        width: "95%",
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#FF512F',
        borderWidth: 1,
        paddingHorizontal:10,
        marginVertical:5
      },
    inputContainer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})