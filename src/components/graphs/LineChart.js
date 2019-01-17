import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { colorGraph1, colorGraph2 } from '../../styles';
import Shuffle from '@material-ui/icons/Shuffle';
import Save from '@material-ui/icons/Save';
import { Button } from '../elements';
import FileSaver from 'file-saver';

class LineChartTest extends Component {
  state = {
    data: [
      { name: 'Page A', uv: 4200, pv: 2400, amt: 2400, value: 150 },
      { name: 'Page B', uv: 3100, pv: 6398, amt: 2210, value: 650 },
      { name: 'Page C', uv: 7700, pv: 4800, amt: 2290, value: 250 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 550 },
      { name: 'Page E', uv: 8890, pv: 4800, amt: 2181, value: 50 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 950 },
      { name: 'Page G', uv: 3490, pv: 1300, amt: 2100, value: 250 },
      { name: 'Page H', uv: 3280, pv: 9208, amt: 2000, value: 550 },
      { name: 'Page I', uv: 4990, pv: 2300, amt: 2181, value: 50 },
      { name: 'Page J', uv: 6390, pv: 6800, amt: 2500, value: 950 },
      { name: 'Page K', uv: 5490, pv: 2300, amt: 2100, value: 250 },
    ],
    svg: '',
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  updateData = () => {
    const dataToUpdate = [...this.state.data];
    console.log(dataToUpdate);
    dataToUpdate.map(item =>
      Object.assign(item, { uv: Math.random(20000), pv: Math.random(10000) }),
    );
    this.setState({ data: dataToUpdate });
  };

  getSVG = () => {
    console.log(this.myRef.current);
    const node = this.myRef.current;
    const svg = node.querySelector('.recharts-surface').outerHTML;

    // -----------------------------
    let svgURL = new Blob([svg], { type: 'text/plain' });
    let svgBlob = new Blob([svgURL], {
      type: 'image/svg+xml;charset=utf-8',
    });
    FileSaver.saveAs(svgBlob, 'test.svg');
  };

  render() {
    const { data, svg } = this.state;

    return (
      <div>
        <ResponsiveContainer width="100%" height={360} debounce={0}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke={colorGraph1}
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke={colorGraph2} />
          </LineChart>
        </ResponsiveContainer>

        <Button size="sm" onClick={this.updateData} circle>
          <Shuffle />
        </Button>
        <Button size="sm" onClick={this.getSVG} circle>
          <Save />
        </Button>
      </div>
    );
  }
}

export default LineChartTest;
