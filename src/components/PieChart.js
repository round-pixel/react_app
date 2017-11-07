import React from 'react';
import ReactDOM from 'react-dom-factories';
import c3 from 'c3';

import styles from './constants/styles';

class PieChart extends React.Component {

  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: { columns: this.props.columns, type: 'pie' }
    });
  }

  componentWillUnMount() {
    this.chart.destroy();
  }

  componentWillReceiveProps() {
    this.chart.load({ columns: this.props.columns });
  }

  render() {
    return (
      React.createElement(
        'div',
        {
          ref: 'chart',
          style: styles.pieChartStyle
        }
      )
    );
  }
}

export default PieChart;
