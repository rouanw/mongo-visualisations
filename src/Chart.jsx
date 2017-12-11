import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import reqwest from 'reqwest';

class DataChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    reqwest({
      type: 'json',
      contentType: 'application/json',
      headers: { accept: 'application/json' },
      url: '/query',
      method: 'post',
      data: { filter: {} },
    })
    .then((data) => {
      this.setState({ data })
    });
  }

  render () {
    return (
      <LineChart width={730} height={250} data={this.state.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    );
  }
}

export default DataChart;
