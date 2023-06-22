import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width:"43%",
        marginHorizontal:"3.5%",
        height:220,
        backgroundColor:"white",
        borderRadius:8,
        marginBottom:10,
        overflow:"hidden",
        flexDirection:"column",
        justifyContent:"space-around",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title:{
        color:"#FF512F",
        fontSize:15,
        fontWeight:"bold"
    },
    image:{
        width:"100%",
        height:"70%"
    },
    buttomBar:{
        paddingHorizontal:10,
        flex:1,
    },
    priceBar:{
        paddingBottom:10,
        paddingHorizontal:10
    },
    price:{
        textAlign:"right",
        fontStyle:"italic",
        color:"black",
        fontSize:12
    },
    modal:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0, 0, 0, 0.5)",
    },
    modalContainer:{
        width:"80%",
        height:"70%",
        backgroundColor:"white",
        borderRadius:10,
        overflow:"hidden"
    },
    modalTopBar:{
        width:"100%",
        height:30,
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    modalPImage:{
        width:25,
        height:25,
        borderRadius:25,
        marginRight:10,
    },
    modalPName:{
        fontWeight:"bold",
        color:"black"
    },
    modalProfile:{
        flexDirection:"row",
        height:"100%",
        alignItems:"center"
    },
    modalImage:{
        width:"100%",
        height:"30%"
    },
    modalContent:{
        flex:1,
        paddingHorizontal:10
    },
    modalTitle:{
        fontSize:25,
        color:"#FF512F",
        fontWeight:"bold"
    },
    modalDesc:{
        fontSize:14,
        color:"black"
    },
    modalButtomBar:{
        width:"100%",
        height:70
    },
    modalPrice:{
        textAlign:"right",
        paddingHorizontal:20,
        fontSize:16,
        fontStyle:"italic",
        color:"black",
        paddingBottom:5
    },
    modalButtonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    favButton:{
        width:"50%",
        height:50,
        backgroundColor:"#E32636",
        justifyContent:"center",
        alignItems:"center",
    },
    buyButton:{
        width:"50%",
        height:50,
        backgroundColor:"#FF512F",
        justifyContent:"center",
        alignItems:"center",
    },
    mButtonText:{
        color:"white",
        fontSize:17,
        fontWeight:"bold"
    }
})