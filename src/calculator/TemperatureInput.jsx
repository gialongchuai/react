import React, {Component} from "react";

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
    }

    handleOnChange = (e) => {
        this.props.onChangeInput(e.target.value);
    }

    render() {
        const {title, temperature} = this.props;
        return (
            <fieldset>
                <legend>Nhập Temperature với độ {title}</legend>
                <input onChange={this.handleOnChange} value={temperature} />
            </fieldset>
        )
    }
}

export default TemperatureInput