import logo from './logo.svg';
import './App.css';
import React from 'react';
import LightSwitch from './LightSwitch';
import LightBulb from './LightBulb';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightOn: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(newStatus) {
    this.setState({ lightOn: newStatus });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h1>🔷 Hệ thống đèn LED</h1>
        
        {/* 👇 Gọi component LightSwitch */}
        <LightSwitch onToggle={this.handleToggle} />
        
        {/* 👇 Gọi component LightBulb */}
        <LightBulb isLit={this.state.lightOn} />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// App.js

