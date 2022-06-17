import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#012a36',

    },
    inner_container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin : 5,
        padding: 5,
        justifyContent: 'space-between'

    },
    title: {
        color : 'orange',
        fontSize: 35,
        fontWeight : 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
        
    },
    number: {
        color : 'orange',
        fontSize: 35,
        fontWeight: 'bold',
         

    },
    toDo_container:{
        flexDirection: 'row',
        backgroundColor: 'orange',
        borderBottomWidth: 1,
        borderRadius: 10,
        margin: 10,
    },
    delete_toDo:{
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#012a36'
    },
    text_container:  {
        flex:1,
    },
    input_container: {
        backgroundColor : '#b1b2b3',
        margin: 15,
        borderRadius: 10,  
        
    },
    button: {
        margin: 15,
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
        
    },
    button_text: {
        textAlign: 'center',
        fontSize: 20,
        
    },
    text_Input: {
        padding: 10,
        borderBottomWidth: 1,
        margin: 10,
        fontSize: 20,
        borderBottomColor: '#dce0e3'
    },


});