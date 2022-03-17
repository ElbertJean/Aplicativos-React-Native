import React from "react";
import {View, Text} from "react-native";

const Render = (props) => {
    return (
       <View style={{alignSelf:'center'}}>
           <Text>{props.names}</Text>
       </View> 
    );
}

const Testes = () => {
    return(
        <View style={{marginTop:50}}>
            <Render names="Bert" />
            <Render names="Robert" />
            <Render names="Jhon" />
            <Render names="Shrek" />
            <Render names="Turk" />
        </View>
    );
}

export default Testes;