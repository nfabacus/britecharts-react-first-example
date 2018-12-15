import React, { Component } from 'react';
import { Bar } from 'britecharts-react';
import './App.css';

const barData = () => [
  {
    name: 'Radiating',
    value: 2,
  },
  {
    name: 'Opalescent',
    value: 4,
  },
  {
    name: 'Shining',
    value: 3,
  },
  {
    name: 'Vibrant',
    value: 6,
  },
  {
    name: 'Vivid',
    value: 6,
  },
  {
    name: 'Brilliant',
    value: 1,
  },
];
const marginObject = {
  left: 100,
  right: 40,
  top: 40,
  bottom: 40
};

class App extends Component {
  state = {
    width: window.innerWidth
  };

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  render() {
    return (
      <div className="App">
        <h1>BriteCharts-React</h1>
        <p>How do I get rid of yAxis label line??  API documentation is inconsistent with what actually available as well...</p>
        <Bar
          data={barData}
          isHorizontal={true}
          isAnimated={true}
          height={400}
          width={this.state.width}
          betweenBarsPadding={0.3}
          margin={marginObject}
          yAxisPaddingBetweenChart={0}
        />
      </div>
    );
  }
}

export default App;
