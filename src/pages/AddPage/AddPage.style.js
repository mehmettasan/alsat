import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    padding:10,
    flex:1
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
  textInputMulti:{
    width: "95%",
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#FF512F',
    borderWidth: 1,
    paddingHorizontal:10,
    marginVertical:5,
    textAlignVertical: 'top'
  },
  title:{
    color:"#FF512F",
    fontWeight:"bold",
    fontSize:25,
    marginBottom:10
  },
  content:{
    flex:1,
    alignItems:"center"
  },
  imageContainer:{
    width:200,
    height:200,
    backgroundColor:"#FF512F",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    overflow:"hidden"
  },
  imageBackground:{
    width:"100%",
    height:"100%",
    borderWidth:1,
    borderColor:"#FF512F"
  },
  button:{
    width:220,
    height:45,
    backgroundColor:"#FF512F",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonTitle:{
    color:"white",
    fontSize:22,
    fontWeight:"bold"
  },
  errorContainer:{
    width:"100%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red",
    borderRadius:5
  },
  errorText:{
    fontSize:16,
    fontWeight:"bold",
    color:"white"
  }
});
