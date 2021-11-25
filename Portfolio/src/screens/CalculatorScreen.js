import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';

export default class CalculatorScreen extends Component {
    constructor(){
        super()
        this.state = {}
    }

    
    render(){
        let rows = []
        let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 0, '=']]
        for (let i = 0; i < 4; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(<TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>{nums[i][j]}</Text>
                </TouchableOpacity>)
            }
            rows.push(<View style={styles.row}>{row}</View>)
        }

        let operations = ['+', '-', '*', '/']
        let ops = []
        for(let i = 0; i < 4; i++){
            ops.push(<TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText, styles.white}>{operations[i]}</Text>
            </TouchableOpacity>)
        }

        return(
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>11*11</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>121</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.number}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        {ops}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
    },
    resultText:{
        fontSize:20,
        fontWeight:'bold',
        color:"white"
    },
    btnText:{
        fontSize:25,
        color:"#222222"
    },
    white:{
        color:'white',
        fontSize:25
    },
    btn:{
        flex:1,
        alignItems:'center',
        alignSelf:'stretch',
        justifyContent:'center',
    },
    calculationText:{
        fontSize:14,
        color:"white"
    },
    row:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    result:{
        flex:2,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:20,
    },
    calculation:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:20,
    },
    buttons: {
        flexGrow:7,
        flexDirection:'row',
    },
    number:{
        flex: 3 ,
        backgroundColor:'yellow',
    },
    operations:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'black',
    },
});
