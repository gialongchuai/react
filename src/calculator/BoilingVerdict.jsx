import React, {Component} from "react";

class BoilingVerdict extends Component {
    render() {
        return ( 
            <div>
                {(this.props.celsius >= 100)
                ? ('Nước sôi rồi kìa!')
                : ('Nước chưa sôi.')}
            </div>
        )
    }
}

export default BoilingVerdict