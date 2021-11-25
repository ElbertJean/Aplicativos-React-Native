import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';

export default class CalculatorScreen extends Component {
    constructor(){
        super()
        this.state = {
            resultText:"",
            calculationText:""
        }
        this.operations = ['Del', '/', '*', '-', '+']
    }

    calculateResult() {
        const text =  this.state.resultText
        console.log(text, eval(text))
        this.setState({
            calculationText: eval(text)
        })
    }

    validate() {
        const text = this.state.resultText
        switch(text.slice(-1)) {
            case '+':
            case '-':
            case '*':
            case '/':
            return false
        }
        return true
    }

    buttonPressed(text) {

        if (text == '=') {
            return this.validate() && this.calculateResult()
        }
        
        this.setState({
            resultText: this.state.resultText+text
        })
    }

    operate (operations) {
        switch(operations){
            case 'Del':
                let text = this.state.resultText.split('')
                text.pop()
                this.setState({
                    resultText:text.join('')
                })
                break
            case '+':
            case '-':
            case '*':
            case '/':

                const lastChar = this.state.resultText.split('').pop()
                
                if(this.operations.indexOf(lastChar) > 0) return

                if(this.state.text == '') return
                this.setState({
                    resultText: this.state.resultText + operations
                })

                
        }
    }

    
    render(){
        let rows = []
        let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
        for (let i = 0; i < 4; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(
                <TouchableOpacity
                    key={nums[i][j]}
                    style={styles.btn}
                    onPress ={() => this.buttonPressed(nums[i][j])}
                >
                    <Text style={styles.btnText}>{nums[i][j]}</Text>
                </TouchableOpacity>)
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>)
        }

        let ops = []
        for(let i = 0; i < 5; i++){
            ops.push(
            <TouchableOpacity
                key={this.operations[i]}
                style={styles.btn}
                onPress={() => this.operate(this.operations[i])}
            >
                <Text style={styles.btnText, styles.white}>{this.operations[i]}</Text>
            </TouchableOpacity>)
        }

        return(
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.resultText}</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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
        fontSize:35,
        fontWeight:'bold',
        color:"#222222"
    },
    btnText:{
        fontSize:30,
        color:"#E1ECE6"
    },
    white:{
        color:'#E1ECE6',
        fontSize:25
    },
    btn:{
        flex:1,
        alignItems:'center',
        alignSelf:'stretch',
        justifyContent:'center',
    },
    calculationText:{
        fontSize:30,
        fontWeight:'bold',
        color:"#007C4F"
    },
    row:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    result:{
        flex:2,
        backgroundColor:'#E1ECE6',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:20,
    },
    calculation:{
        flex:1,
        backgroundColor:'#E1ECE6',
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
        backgroundColor:'#434343',
    },
    operations:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#636363',
    },
});
