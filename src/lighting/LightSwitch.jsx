// LightSwitch.js
import React from 'react';

class LightSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newStatus = !this.state.isOn;
    this.setState({ isOn: newStatus });
    // 👇 Gọi hàm từ cha (props.onToggle) và gửi trạng thái mới
    this.props.onToggle(newStatus);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isOn ? 'TẮT ĐÈN' : 'BẬT ĐÈN'}
      </button>
    );
  }
}

export default LightSwitch;