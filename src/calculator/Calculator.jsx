import React, {Component} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

const toC = (num) => {
    return (num - 32) / 1.8;
}

const toF = (num) => {
    return (num * 1.8) + 32;
}

const tryConvert = (temperature, funC) => {
    const num = Number(temperature);
    if(Number.isNaN(num) || temperature === '') {
        return '';
    }
    let output = funC(num);
    output = Math.round((output * 1000)) / 1000

    return output;
}

// Fahrenheit and Celsius
const title = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleChange = (scale) => (value) => {
        this.setState({
            temperature: value,
            scale
        })
    }

    render() {

        const {temperature, scale} = this.state;

        const doC = scale === 'f' ? tryConvert(temperature, toC) : temperature;
        const doF = scale === 'c' ? tryConvert(temperature, toF) : temperature;

        return (
            <div>
                <TemperatureInput
                    title={title.c}
                    temperature={doC}
                    onChangeInput={this.handleChange('c')}
                />
                <TemperatureInput
                    title={title.f}
                    temperature={doF}
                    onChangeInput={this.handleChange('f')}
                />
                <BoilingVerdict celsius={doC} />
            </div>
        )
    }
}

export default Calculator